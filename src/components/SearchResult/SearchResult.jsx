import React from "react";
import { Row } from "reactstrap";
import moment from "moment";
import Cards from "../Cards/Cards";

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
          {results.length === 1 && "module matching with"}
          {results.length > 1 && "modules matching with"}
          {` "${query}"`}
        </h4>
      )}
      <h4>{results.length < 1 && "Found nothing"}</h4>
      {!!results.length && (
        <Row className="justify-content-center">
          {results.map(
            ({ title, path, cover, tags, excerpt, date, author }) => (
              <Cards
                title={title}
                path={path}
                cover={cover.childImageSharp}
                tags={tags}
                excerpt={excerpt}
                date={moment(date).format("MMMM DD, YYYY")}
                author={author}
                type={type}
              />
            )
          )}
        </Row>
      )}
    </div>
  );
}

export default SearchResults;
