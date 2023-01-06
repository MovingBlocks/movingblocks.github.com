import React from "react";
import { Col, Row } from "reactstrap";
import ModuleCard from "./ModuleCard";

function ModuleListing({ modules, defaultCover }) {
  return (
    <Col lg="12" className="card-spacing">
      <Row className="justify-content-center">
        {modules.map(({ name, moduleTxt: { tags }, description, url }) => (
          <ModuleCard
            title={name}
            url={url}
            cover={defaultCover}
            tags={tags}
            description={description}
          />
        ))}
      </Row>
    </Col>
  );
}

export default ModuleListing;
