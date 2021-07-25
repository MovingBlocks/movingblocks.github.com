import React from "react";
import { Link } from "gatsby";
import { Row, Col, Badge } from "reactstrap";
import { GatsbyImage } from "gatsby-plugin-image";

const Cards = ({ title, cover, tags, excerpt, path, ddate, author }) => {
  return (
    <Col className="ml-4 mr-4 mt-2 mb-4 " lg="3" md="8" sm="12">
      <Row className="row_shadow h-100">
        <Col lg="12" md="12" className="p-0">
          <div className="card-img search-cards">
            <GatsbyImage image={cover.gatsbyImageData} />
          </div>
          <div className="md-tag mt-3 ml-3">
            <Badge>{tags}</Badge>
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
};

export default Cards;
