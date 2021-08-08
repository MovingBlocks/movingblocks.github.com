import React, { useState } from "react";
import { navigate } from "gatsby";
import { Col, Form, FormGroup, Input, Label, Button, Row } from "reactstrap";
import { IconContext } from "react-icons";
import { FaSearch, FaEquals } from "react-icons/fa";
import blogList from "../../generated/blog-result.json";
const moment = require("moment");
moment.locale("en");

const SearchForm = ({ query, tag, author, ddate }, props) => {
  console.log(blogList);
  const [showFilter, setShowFilter] = useState(false);
  let srcLocation = props.location;

  if (typeof window !== `undefined`) {
    srcLocation = location.search;
  }
  let urlTag = new URLSearchParams(srcLocation).get("tag") || "";
  let urlAuthor = new URLSearchParams(srcLocation).get("author") || "";
  let urlDdate = new URLSearchParams(srcLocation).get("ddate") || "";
  let authorList = [];
  let tagList = [];

  blogList.forEach((blog) => {
    authorList.push(blog.author);
    blog.tags.forEach((tag) => {
      tagList.push(tag);
    });
  });

  authorList = [...new Set(authorList)];
  tagList = [...new Set(tagList)];

  return (
    <Form role="search" method="GET">
      <Row className="justify-content-center" id="search-form">
        <Col md="8" className="p-3">
          <FormGroup>
            <Label for="searchQuery">
              <h6>Search & Filter</h6>
            </Label>
            <Input
              type="search"
              id="search-input"
              name="keywords"
              bsSize="lg"
              className="form-control"
              aria-controls="search-results-count"
              onChange={(e) =>
                navigate(
                  `${location.pathname}?keywords=${encodeURIComponent(
                    e.target.value
                  )}&tag=${tag === undefined ? `${urlTag}` : `${tag}`}&author=${
                    author === undefined ? `${urlAuthor}` : `${author}`
                  }&ddate=${ddate === undefined ? `${urlDdate}` : `${ddate}`}`
                )
              }
              placeholder="Search..."
              value={query}
            />
          </FormGroup>
        </Col>
        <Col md="2" className="pt-3 pl-4">
          <Button
            type="button"
            color="primary"
            onClick={() => {
              setShowFilter(!showFilter);
            }}
            size="lg"
            id="search-btn"
          >
            <FaEquals /> Filter
          </Button>
        </Col>
      </Row>
      {showFilter == true ? (
        <div class="row justify-content-center">
          <Col md="10" className="pt-0 align-item-center pb-0 input-col">
            <div class="row mt-0 justify-content-center">
              <Col md="3" className="pt-3">
                <FormGroup>
                  <Label for="searchQuery">
                    <h6>Tags</h6>
                  </Label>

                  <Input
                    type="select"
                    name="author"
                    id="search-tag"
                    bsSize="lg"
                    aria-controls="search-results-count"
                    className="option-position"
                    onChange={(e) =>
                      navigate(
                        `${
                          location.pathname
                        }?keywords=${query}&tag=${encodeURIComponent(
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
                <FormGroup>
                  <Label for="searchQuery">
                    <h6>Author</h6>
                  </Label>
                  <Input
                    type="select"
                    name="author"
                    id="search-tag"
                    bsSize="lg"
                    aria-controls="search-results-count"
                    className="option-position"
                    onChange={(e) =>
                      navigate(
                        `${location.pathname}?keywords=${query}&tag=${
                          tag === undefined ? `${urlTag}` : `${tag}`
                        }&author=${encodeURIComponent(e.target.value)}&ddate=${
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
                <FormGroup>
                  <Label for="searchQuery">
                    <h6>Date</h6>
                  </Label>
                  <Input
                    type="select"
                    name="author"
                    id="search-tag"
                    bsSize="lg"
                    aria-controls="search-results-count"
                    className="option-position"
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

              <Col md="2" className="pt-3">
                <FormGroup className="text-center ">
                  <Button
                    type="button"
                    color="primary"
                    size="lg"
                    id="search-btn"
                    onClick={(e) => navigate(`${location.pathname}`)}
                  >
                    Reset
                  </Button>
                </FormGroup>
              </Col>
            </div>
          </Col>
        </div>
      ) : (
        ""
      )}
    </Form>
  );
};

export default SearchForm;
