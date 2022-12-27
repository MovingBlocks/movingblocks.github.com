import React, { useMemo } from "react";
import { PaginationItem, PaginationLink } from "reactstrap";
import { IconContext } from "react-icons";
import { GiPlainSquare, GiSquare } from "react-icons/gi";

function MediaPagination({
  imagePerPage,
  totalImages,
  paginate,
  currentSlider,
}) {
  const sildeNumber = [];

  for (let page = 1; page <= Math.ceil(totalImages / imagePerPage); page++) {
    sildeNumber.push(page);
  }

  const paginationIconAttributes = useMemo(
    () => ({ className: "pagination-icon", size: "1.5em" }),
    []
  );
  return (
    <div className="d-flex page-section">
      {sildeNumber.map((number) => (
        <PaginationItem key={number} className="mt-3">
          <PaginationLink onClick={() => paginate(number)} href="#">
            <IconContext.Provider value={paginationIconAttributes}>
              {(() => {
                if (currentSlider === number) {
                  return <GiPlainSquare />;
                }
                return <GiSquare />;
              })()}
            </IconContext.Provider>
          </PaginationLink>
        </PaginationItem>
      ))}
    </div>
  );
}

export default MediaPagination;
