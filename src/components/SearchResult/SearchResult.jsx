import React from "react";
import { Link } from "gatsby";
import Img from 'gatsby-image';
import { Row, Col, Badge } from "reactstrap";

const SearchResults = ({ query, filter, results }) => (
  <div aria-label="Search results for all posts">
    {!!results.length && query && (
      <h4
        className="search-results-count"
        id="search-results-count"
        aria-live="assertive"
      >
        Found 
        {' '}
        {results.length}
        {' '}
        {results.length==1 && "module matching with"} 
        {results.length>1 && "modules matching with"} 
        {' '}
        "{query}"
      </h4>
    )}
    <h4>
      {results.length<1 && "Found nothing"} 
    </h4>
    {!!results.length && (
      <Row className="equal">
        {results.map(({ title, path, cover, description, tags }) => (
          <Col md="4">
            <div className="card-content">
              <div className="card-img">
                <img src={cover.publicURL} alt={title} />
              </div>
              <div className="card-desc">
                <div className="md-tag">
                  <Badge>{tags}</Badge>
                </div>
                <h4 className="post-content">{title}</h4>
                <p>{description}</p>
                <Link to={path} key={title} className="btn-card">
                  Read More
                </Link>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    )}
  </div>
);

export default SearchResults;
