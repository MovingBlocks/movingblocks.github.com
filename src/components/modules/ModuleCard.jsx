import React from "react";
import { FaGithub } from "react-icons/fa";
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
import "prismjs/themes/prism.css";

function ModuleCard({ title, cover, tags, description, url }) {
  return (
    <Col className="pt-0 mt-2 mb-4" lg="4" md="8" sm="12">
      <Card className="row_shadow h-100">
        {cover ? (
          <GatsbyImage
            image={getImage(cover)}
            className="card-img-top card-img-module"
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
          <CardText>{description}</CardText>
        </CardBody>
        <a
          href={url}
          className="mt-auto m-4 btn-primary text-center"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub /> View on GitHub
        </a>
      </Card>
    </Col>
  );
}

export default ModuleCard;
