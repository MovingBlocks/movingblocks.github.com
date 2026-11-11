import { useEffect, useMemo, useState } from "react";
import Select from "react-select";
import * as JsSearch from "js-search";
import { useLocationSearch } from "../lib/useLocationSearch";
import ModuleListing from "./ModuleListing";

const PER_PAGE = 9;
const HINT = "Filter by tags or type a search term to show matching modules.";

/** Module search with tag filter, state kept in ?term=&tag=&tag=… */
export default function ModuleSearch({ modules }) {
  const locationSearch = useLocationSearch();
  // null until the user edits; until then the URL query supplies the values
  const [editedTerm, setTerm] = useState(null);
  const [editedTags, setTags] = useState(null);
  const [shown, setShown] = useState(PER_PAGE);

  const fromUrl = useMemo(() => {
    const params = new URLSearchParams(locationSearch);
    return { term: params.get("term") || "", tags: params.getAll("tag").filter(Boolean) };
  }, [locationSearch]);
  const term = editedTerm ?? fromUrl.term;
  const tags = editedTags ?? fromUrl.tags;

  const search = useMemo(() => {
    const s = new JsSearch.Search("name");
    s.indexStrategy = new JsSearch.AllSubstringsIndexStrategy();
    s.sanitizer = new JsSearch.LowerCaseSanitizer();
    s.addIndex("name");
    s.addIndex("moduleDescription");
    s.addIndex("tags");
    s.addDocuments(modules);
    return s;
  }, [modules]);

  const allTags = useMemo(
    () => [...new Set(modules.flatMap((m) => m.tags))].sort().map((t) => ({ value: t, label: t })),
    [modules],
  );

  const results = useMemo(() => {
    if (!term && tags.length === 0) return [];
    const found = term ? search.search(term) : modules;
    return found.filter((m) => tags.every((t) => m.tags.includes(t)));
  }, [term, tags, search, modules]);

  useEffect(() => {
    // only after an edit, so the initial render doesn't wipe the query it has yet to read
    if (editedTerm === null && editedTags === null) return;
    const params = new URLSearchParams();
    if (term) params.set("term", term);
    tags.forEach((t) => params.append("tag", t));
    const query = params.toString();
    window.history.replaceState(null, "", query ? `?${query}` : window.location.pathname);
  }, [term, tags, editedTerm, editedTags]);

  let message = "";
  if (!term && tags.length === 0) message = HINT;
  else if (results.length === 0) message = "No modules found matching the search criteria.";

  return (
    <>
      <form role="search" onSubmit={(e) => e.preventDefault()}>
        <div className="row justify-content-center" id="search-form">
          <div className="col-md-4 mb-3">
            <Select
              isMulti
              inputId="module-tags"
              name="tags"
              placeholder="Tags..."
              className="search-input"
              classNamePrefix="react-select"
              options={allTags}
              value={tags.map((t) => ({ value: t, label: t }))}
              onChange={(selected) => {
                setTags(selected.map((t) => t.value));
                setShown(PER_PAGE);
              }}
            />
          </div>
          <div className="col-md-8 mb-3">
            <input
              type="search"
              className="form-control form-control-lg search-input"
              name="keywords"
              aria-label="Search modules"
              placeholder="Search..."
              value={term}
              onChange={(e) => {
                setTerm(e.target.value);
                setShown(PER_PAGE);
              }}
            />
          </div>
        </div>
      </form>
      <div className="row justify-content-center">
        <ModuleListing modules={results.slice(0, shown)} />
      </div>
      {message ? (
        <div className="row justify-content-center">
          <p className="text-center">{message}</p>
        </div>
      ) : null}
      {shown < results.length ? (
        <div className="row justify-content-center">
          <button
            type="button"
            className="btn btn-secondary col-auto"
            onClick={() => setShown(shown + PER_PAGE)}
          >
            Load More
          </button>
        </div>
      ) : null}
    </>
  );
}
