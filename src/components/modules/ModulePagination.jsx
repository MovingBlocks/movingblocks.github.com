import React from "react";
import { Pagination, PaginationItem, PaginationLink, Row } from "reactstrap";

function ModulePagination({ currentLetter, availableLetters }) {
  const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];

  return (
    <Pagination className="mb-2">
      <Row className="justify-content-center mx-1">
        {alphabet.map((letter) => (
          <PaginationItem
            active={letter === currentLetter}
            disabled={!availableLetters.includes(letter)}
          >
            <PaginationLink href={`../${letter}`}>
              {letter.toUpperCase()}
            </PaginationLink>
          </PaginationItem>
        ))}
      </Row>
    </Pagination>
  );
}

export default ModulePagination;
