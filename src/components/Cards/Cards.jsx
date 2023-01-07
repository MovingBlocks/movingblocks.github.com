import React from "react";
import { Link } from "gatsby";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
} from "reactstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Tags from "../common/Tags";

function Cards({ title, cover, tags, excerpt, path, author, date, type }) {
  // we use cover images with different aspect ratios for modules and blogs
  // the respective aspect ratio is encoded in the type-specific css class
  const imgClass = type ? `card-img-${type}` : "";

  return (
    <Col className="pt-0 mt-2 mb-4" lg="4" md="8" sm="12">
      <Card className="row_shadow h-100">
        {cover ? (
          <GatsbyImage
            image={getImage(cover)}
            className={`card-img-top ${imgClass}`}
          />
        ) : (
          ""
        )}
        <CardBody>
          <CardSubtitle tag="h7">
            <Tags tags={tags} />
          </CardSubtitle>
          <CardTitle tag="h5" className="mt-3">
            {title}
          </CardTitle>
          <CardText>{excerpt}</CardText>
          {author ? (
            <CardSubtitle className="text-muted">
              <b>By:</b> {author}
            </CardSubtitle>
          ) : (
            ""
          )}
          {date ? (
            <CardSubtitle className="text-muted">
              <b>Posted on:</b> {date}
            </CardSubtitle>
          ) : (
            ""
          )}
        </CardBody>
        <Link
          to={path}
          key={title}
          className="mt-auto m-4 btn-primary text-center"
        >
          Read More
        </Link>
      </Card>
    </Col>
  );
}

export default Cards;
