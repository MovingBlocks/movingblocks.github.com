import React from "react";
import { navigate } from "gatsby";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";
const moment = require("moment");
moment.locale("en");

const SearchForm = ({ query, tag, author, ddate }, props) => {
  let srcLocation = props.location;

  if (typeof window !== `undefined`) {
    // eslint-disable-next-line no-restricted-globals
    srcLocation = location.search;
  }
  let urlTag = new URLSearchParams(srcLocation).get("tag") || "";
  let urlAuthor = new URLSearchParams(srcLocation).get("author") || "";
  let urlDdate = new URLSearchParams(srcLocation).get("ddate") || "";
  let authorList = [
    "Cervator",
    "Skaldarnar",
    "Niruandaleth",
    "Niruandaleth & Skaldarnar",
    "Scott Moses Sunarto",
    "nihal111",
    "Thorbjørn Lindeijer",
    "Jordan H. (Qwertygiy)",
  ];
  let tagList = ["GSoC", "Project", "Update", "TeraSaturday", "TeraSpotlight"];

  return (
    <Form role="search" method="GET" className="mb-0">
      
      <div class="row justify-content-center" form id="search-form">
        <Col md="10">
          <FormGroup>
            <Label for="searchQuery">
              <h6>Search & Filter</h6>
            </Label>
            <div className="form-group search-box">
              <span className="form-control-feedback">
                {" "}
                <IconContext.Provider value={{ size: "18", color: "balck" }}>
                  <FaSearch />
                </IconContext.Provider>
              </span>
              <Input
                type="search"
                id="search-input"
                name="keywords"
                bsSize="lg"
                aria-controls="search-results-count"
                onChange={(e) =>
                  navigate(
                    `${location.pathname}?keywords=${encodeURIComponent(
                      e.target.value
                    )}&tag=${
                      tag === undefined ? `${urlTag}` : `${tag}`
                    }&author=${
                      author === undefined ? `${urlAuthor}` : `${author}`
                    }&ddate=${ddate === undefined ? `${urlDdate}` : `${ddate}`}`
                  )
                }
                placeholder="Search..."
                value={query}
              />
            </div>
          </FormGroup>
        </Col>
      </div>
      <div class="row justify-content-center">
        <Col md="10" className="pt-0 align-item-center pb-0">
          
          <div class="row mt-0 justify-content-center">
            <Col md="3" className="pt-3">
              <FormGroup className="text-center">
                <Label for="searchQuery">
                  <h6>Tags</h6>
                </Label>

                <Input
                  type="select"
                  name="author"
                  id="search-tag"
                  bsSize="lg"
                  aria-controls="search-results-count"
                  style={{ textAlignLast: "center" }}
                  onChange={(e) =>
                    navigate(
                      `${location.pathname}?keywords=${query}&tag=${encodeURI(
                        e.target.value
                      )}&author=${
                        author === undefined ? `${urlAuthor}` : `${author}`
                      }&ddate=${
                        ddate === undefined ? `${urlDdate}` : `${ddate}`
                      }`
                    )
                  }
                  value={tag}
                >
                  <option value="">All</option>
                  {tagList.map((tag) => {
                    return <option value={tag}>{tag}</option>;
                  })}
                </Input>
              </FormGroup>
            </Col>
            <Col md="3" className="pt-3">
              <FormGroup className="text-center">
                <Label for="searchQuery">
                  <h6>Author</h6>
                </Label>
                <Input
                  type="select"
                  name="author"
                  id="search-tag"
                  bsSize="lg"
                  aria-controls="search-results-count"
                  style={{ textAlignLast: "center" }}
                  onChange={(e) =>
                    navigate(
                      `${location.pathname}?keywords=${query}&tag=${
                        tag === undefined ? `${urlTag}` : `${tag}`
                      }&author=${encodeURI(e.target.value)}&ddate=${
                        ddate === undefined ? `${urlDdate}` : `${ddate}`
                      }`
                    )
                  }
                  value={author}
                >
                  <option value="">All</option>
                  {authorList.map((author) => {
                    return <option value={author}>{author}</option>;
                  })}
                </Input>
              </FormGroup>
            </Col>
            <Col md="3" className="pt-3">
              <FormGroup className="text-center">
                <Label for="searchQuery">
                  <h6>Date</h6>
                </Label>
                <Input
                  type="select"
                  name="author"
                  id="search-tag"
                  bsSize="lg"
                  aria-controls="search-results-count"
                  style={{ textAlignLast: "center" }}
                  onChange={(e) =>
                    navigate(
                      `${location.pathname}?keywords=${query}&tag=${
                        tag === undefined ? `${urlTag}` : `${tag}`
                      }&author=${
                        author === undefined ? `${urlAuthor}` : `${author}`
                      }&ddate=${encodeURIComponent(e.target.value)}`
                    )
                  }
                  value={ddate}
                >
                  <option value="">All</option>
                  {moment.monthsShort().map((month) => {
                    return (
                      <option value={month}>
                        {moment(month, "MMM").format("MMMM")}
                      </option>
                    );
                  })}
                </Input>
              </FormGroup>
            </Col>
          </div>
        </Col>
      </div>
    </Form>
  );
};

export default SearchForm;
