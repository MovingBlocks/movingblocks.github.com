import React from "react";

function Section({ title, children, tag: Tag = "h2" }) {
  return (
    <>
      <div>
        <Tag className="text-center">{title}</Tag>
        <div className="container my-4 ">
          <div className="title-underline" />
        </div>
      </div>
      {children}
    </>
  );
}

export default Section;
