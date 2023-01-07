import React from "react";
import { Badge } from "reactstrap";

function Tags({ tags }) {
  return tags.length === 0 ? (
    // invisible dummy badge to keep the space for tags
    <Badge className="mr-2 invisible"> </Badge>
  ) : (
    <>
      {tags.map((tag) => (
        <Badge className="mr-2">{tag}</Badge>
      ))}
    </>
  );
}

export default Tags;
