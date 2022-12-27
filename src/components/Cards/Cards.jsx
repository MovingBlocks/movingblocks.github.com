import React from "react";
import { Link } from "gatsby";
import { Row, Col, Badge } from "reactstrap";
import { GatsbyImage } from "gatsby-plugin-image";

function Cards({ title, cover, tags, excerpt, path, author, ddate }) {
  const tagCount = tags.length - 2;
  return (
    <Col className="ml-4 mr-4 pt-0 mt-2 mb-4 " lg="3" md="8" sm="12">
      <Row className="row_shadow h-100">
        <Col lg="12" md="12" className="p-0">
          <div className="card-img search-cards">
            <GatsbyImage image={cover.gatsbyImageData} />
          </div>
          <div className="d-flex">
            <div className="md-tag mt-3 ml-3">
              {tags.slice(0, 2).map((tag) => (
                <Badge className="mr-2">{tag}</Badge>
              ))}
            </div>
            <span className="card-people ml-2 mt-4 mr-4  h4">
              {tagCount > 0 ? `+${tagCount} more` : ""}{" "}
            </span>
          </div>
        </Col>
        <div className="d-flex flex-column ml-3">
          <h5 className="">{title}</h5>
          <div className="mt-1 mr-2" lang="en">
            <p className="word-break">{excerpt}</p>

            {author && ddate ? (
              <div className="mt-auto">
                <p style={{ fontSize: "14px" }}>
                  <b>By: </b>
                  {author}
                </p>
                <p style={{ fontSize: "14px" }}>
                  <b>Posted on: </b>
                  {ddate}
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="mt-auto mb-4">
            <Link to={path} key={title} className="mt-auto btn-primary">
              Read More
            </Link>
          </div>
        </div>
      </Row>
    </Col>
  );
}

export default Cards;
