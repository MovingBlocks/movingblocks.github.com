import React, { useState } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { IconContext } from "react-icons";
import { GiPlainSquare, GiSquare } from "react-icons/gi";


const MediaPagination = ({
  imagePerPage,
  totalImages,
  paginate,
  currentSlider,
}) => {
  const sildeNumber = [];

  for (let page = 1; page <= Math.ceil(totalImages / imagePerPage); page++) {
    sildeNumber.push(page);
  }

  return (
    <div className="d-flex page-section">
      {sildeNumber.map((number) => {
        return (
          <PaginationItem key={number} className="mt-3">
            <PaginationLink onClick={() => paginate(number)} href="#">
              {(() => {
                if (currentSlider == number) {
                  return (
                    <IconContext.Provider
                      value={{ className: "pagination-icon" , size:"1.5em" }}
                    >
                      <GiPlainSquare />
                    </IconContext.Provider>
                  );
                } else {
                  return (
                    <IconContext.Provider
                      value={{ className: "pagination-icon", size:"1.5em" }}
                    >
                      <GiSquare />
                    </IconContext.Provider>
                  );
                }
              })()}
            </PaginationLink>
          </PaginationItem>
        );
      })}
    </div>
  );
};

export default MediaPagination;