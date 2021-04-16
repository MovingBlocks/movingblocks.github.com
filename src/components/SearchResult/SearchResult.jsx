import React from "react";
import { Link } from "gatsby";
import { Row, Col, Badge } from "reactstrap";
import "./SearchResult.css";

const SearchResults = ({ query, filter, results }) => (
  <div aria-label="Search results for all posts">
    {!!results.length && query && (
      <h4
        className="search-results-count"
        id="search-results-count"
        aria-live="assertive"
      >
        Found {results.length} {results.length == 1 && "module matching with"}
        {results.length > 1 && "modules matching with"} "{query}"
      </h4>
    )}
    <h4>{results.length < 1 && "Found nothing"}</h4>
    {!!results.length && (
      <Row className="justify-content-center">
        {results.map(({ title, path, cover, tags, excerpt }) => (
          <Col className="ml-4 mr-4 mt-2 mb-2" lg="3" md="8" sm="12">
            <Row className="row_shadow h-100">
              <Col lg="12" md="12" className="p-0">
                <div className="card-img search-cards">
                  <img src={cover.publicURL} alt={title} />
                </div>
                <div className="md-tag mt-3 ml-3">
                  <Badge>{tags}</Badge>
                </div>
              </Col>

              <div className="d-flex flex-column ml-3">
                <h5 className="mt-1">{title}</h5>
                <div className="mt-auto mr-2" lang="en">
                  <p className="word-break">{excerpt}</p>
                </div>

                <div className="mt-auto mb-4">
                  <Link to={path} key={title} className="mt-auto btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </Row>
          </Col>
        ))}
      </Row>
    )}
  </div>
);

export default SearchResults;
