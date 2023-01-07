import React from "react";
import { FaGithub } from "react-icons/fa";
import {
  Badge,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
} from "reactstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Tags from "../common/Tags";

function MentorCards({
  name,
  avatar,
  tags,
  html,
  githubProfile,
  timeZone,
  flagUrl,
}) {
  return (
    <Col className="pt-0 mt-2 mb-4" lg="4" md="8" sm="12">
      <Card className="row_shadow h-100 align-items-center">
        {avatar ? (
          <GatsbyImage
            image={getImage(avatar)}
            className="card-img-top rounded-circle my-4"
            style={{ width: "30%" }}
            alt={name}
          />
        ) : (
          ""
        )}
        <CardBody className="w-100">
          <CardSubtitle tag="h6">
            <Tags tags={tags} />
          </CardSubtitle>
          <CardTitle tag="h5" className="my-3">
            <img
              src={flagUrl}
              alt="The flag of the mentor's home country"
              className="mr-3"
            />
            {name}
          </CardTitle>
          <CardSubtitle tag="h6">
            {`${timeZone} | `}
            <FaGithub />
            {` @${githubProfile}`}
          </CardSubtitle>
          <CardText className="mt-3">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
}

export default MentorCards;
