import React from "react";
import { Row, Col } from "reactstrap";

function HighlightBox({ title, children, bgImage, align = "start" }) {
  return (
    <div
      className="with-bg-image"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={`ts-gradient-background-${align}`}>
        <Row className={`justify-content-${align}`}>
          <Col md="5" className="mx-4">
            <h3 className="text-white pb-2">{title}</h3>
            <div className="text-white text-justify">{children}</div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default HighlightBox;
