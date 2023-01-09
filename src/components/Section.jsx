import React from "react";
import slugify from "slugify";

function Section({ title, children, id, tag: Tag = "h2" }) {
  return (
    <>
      <div>
        <Tag
          className="text-center ts-anchor"
          id={id ?? slugify(title, { lower: true })}
        >
          {title}
        </Tag>
        <div className="container my-4 ">
          <div className="title-underline" />
        </div>
      </div>
      {children}
    </>
  );
}

export default Section;
