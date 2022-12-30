import React from "react";
import PostListing from "../PostListing/PostListing";

function SearchResults({ query, results, type }) {
  return (
    <div aria-label="Search results for all posts">
      {!!results.length && query && (
        <h4
          className="search-results-count text-center"
          id="search-results-count"
          aria-live="assertive"
        >
          {`Found ${results.length} `}
          {results.length === 1 && `${type} matching with`}
          {results.length > 1 && `${type}s matching with`}
          {` "${query}"`}
        </h4>
      )}
      <h4>{results.length < 1 && "Found nothing"}</h4>
      <PostListing prefix={`/${type}`} postList={results} />
    </div>
  );
}

export default SearchResults;
