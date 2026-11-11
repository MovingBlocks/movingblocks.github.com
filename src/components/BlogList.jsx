import { useEffect, useMemo, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useLocationSearch } from "../lib/useLocationSearch";
import PostListing from "./PostListing";

const KEYS = ["keywords", "tag", "author", "date"];
const EMPTY = { keywords: "", tag: "", author: "", date: "" };

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const matches = (value, needle) => new RegExp(escape(needle), "i").test(value ?? "");

/** Paginated blog listing with client-side search & filter (?keywords=&tag=&author=&date=). */
export default function BlogList({ posts, authors, tags, prevUrl, nextUrl }) {
  const search = useLocationSearch();
  const [edited, setFilter] = useState(null);
  const [showFilter, setShowFilter] = useState(false);
  const [index, setIndex] = useState(null);

  const fromUrl = useMemo(() => {
    const params = new URLSearchParams(search);
    return Object.fromEntries(KEYS.map((k) => [k, params.get(k) || ""]));
  }, [search]);
  const filter = edited ?? fromUrl;

  const searching = KEYS.some((k) => filter[k]);

  useEffect(() => {
    if (!searching || index) return;
    fetch("/blog/search-index.json")
      .then((r) => r.json())
      .then(setIndex)
      .catch(() => setIndex([]));
  }, [searching, index]);

  const update = (key, value) => {
    const next = { ...filter, [key]: value };
    setFilter(next);
    const params = new URLSearchParams();
    KEYS.forEach((k) => next[k] && params.set(k, next[k]));
    const query = params.toString();
    window.history.replaceState(null, "", query ? `/blog?${query}` : "/blog");
  };

  const results = useMemo(
    () =>
      (index ?? []).filter(
        (p) =>
          (matches(p.content, filter.keywords) || matches(p.title, filter.keywords)) &&
          (!filter.tag || p.tags.some((t) => matches(t, filter.tag))) &&
          matches(p.author, filter.author) &&
          matches(p.date, filter.date),
      ),
    [index, filter],
  );

  return (
    <>
      <div className="index-container">
        <form role="search" onSubmit={(e) => e.preventDefault()}>
          <div className="row justify-content-center" id="search-form">
            <div className="col-md-10 ps-4 pt-3 pb-3 pe-0">
              <label htmlFor="blog-search" className="form-label">
                <h6>Search & Filter</h6>
              </label>
              <input
                id="blog-search"
                type="search"
                name="keywords"
                className="form-control form-control-lg search-input"
                aria-controls="search-results-count"
                placeholder="Search..."
                value={filter.keywords}
                onChange={(e) => update("keywords", e.target.value)}
              />
            </div>
            <div className="col-md-2 pt-3 ps-4 pe-2">
              <button
                type="button"
                className="btn btn-primary btn-lg search-btn"
                onClick={() => setShowFilter(!showFilter)}
              >
                <FaFilter /> Filter
              </button>
            </div>
          </div>
          {showFilter ? (
            <div className="row justify-content-center">
              <div className="col-md-10 pt-1 pb-0 input-col">
                <div className="row mt-0 justify-content-center">
                  <div className="col-md-3 pt-1">
                    <label htmlFor="blog-tag" className="form-label">
                      <h6>Tags</h6>
                    </label>
                    <select
                      id="blog-tag"
                      className="form-select form-select-lg search-filter option-position"
                      value={filter.tag}
                      onChange={(e) => update("tag", e.target.value)}
                    >
                      <option value="">All</option>
                      {tags.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-3 pt-1 pb-0">
                    <label htmlFor="blog-author" className="form-label">
                      <h6>Author</h6>
                    </label>
                    <select
                      id="blog-author"
                      className="form-select form-select-lg search-filter option-position"
                      value={filter.author}
                      onChange={(e) => update("author", e.target.value)}
                    >
                      <option value="">All</option>
                      {authors.map((a) => (
                        <option key={a} value={a}>
                          {a}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-3 pt-1 pb-0">
                    <label htmlFor="blog-date" className="form-label">
                      <h6>Date</h6>
                    </label>
                    <input
                      id="blog-date"
                      type="date"
                      className="form-control form-control-lg search-filter option-position"
                      value={filter.date}
                      onChange={(e) => update("date", e.target.value)}
                    />
                  </div>
                  <div className="col-md-2 pt-1 pb-0 text-center">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg search-btn"
                      onClick={() => {
                        setFilter(EMPTY);
                        window.history.replaceState(null, "", "/blog");
                      }}
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </form>
        {searching ? (
          <div aria-label="Search results for all posts">
            {results.length > 0 && filter.keywords ? (
              <h4
                className="search-results-count text-center"
                id="search-results-count"
                aria-live="assertive"
              >
                {`Found ${results.length} blog${results.length > 1 ? "s" : ""} matching with "${filter.keywords}"`}
              </h4>
            ) : null}
            {index && results.length === 0 ? <h4>Found nothing</h4> : null}
            <PostListing postList={results} />
          </div>
        ) : (
          <PostListing postList={posts} />
        )}
      </div>
      {!searching ? (
        <div className="row">
          {prevUrl ? (
            <div className="col text-center m-4">
              <a href={prevUrl} rel="prev" className="btn-primary">
                <FiArrowLeft /> Previous Page
              </a>
            </div>
          ) : null}
          {nextUrl ? (
            <div className="col text-center m-4">
              <a href={nextUrl} rel="next" className="btn-primary">
                Next Page <FiArrowRight />
              </a>
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
