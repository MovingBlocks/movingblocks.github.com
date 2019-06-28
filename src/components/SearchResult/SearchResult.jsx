import React from "react";
import { Link } from "gatsby";
import { Row, Col, Badge } from "reactstrap";

const SearchResults = ({ query, results }) => (
  <div aria-label="Search results for all posts">
    {!!results.length && query && (
      <h2
        className="search-results-count"
        id="search-results-count"
        aria-live="assertive"
      >
        Found {results.length} posts on "{query}"
      </h2>
    )}
    {!!results.length && (
      <Row className="equal">
        {results.map(({ title, path, cover, excerpt }) => (
          <Col md="4">
            <div className="card-content">
              <div className="card-img">
                <img src={cover} alt={title} />
              </div>
              <div className="card-desc">
                <div className="md-tag">
                  <Badge>{title}</Badge>
                </div>
                <h4>{title}</h4>
                <p>{excerpt}</p>
                <Link
                  to={path}
                  key={title}
                  className="btn-card"
                >
                  Read More
                      </Link>
                <Link
                  to={path}
                  key={title}
                  className="btn-card"
                >
                  Download
                      </Link>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    )}
  </div>
)

export default SearchResults
