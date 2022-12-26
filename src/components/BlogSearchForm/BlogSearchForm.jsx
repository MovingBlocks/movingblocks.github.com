import React, { useState } from "react";
import { navigate } from "gatsby";
import { Col, Form, FormGroup, Input, Label, Button, Row } from "reactstrap";
import { FaFilter } from "react-icons/fa";
import blogList from "../../generated/blog-result.json";

const moment = require("moment");

moment.locale("en");

const SearchForm = ({ query, tag, author, date }, props, location) => {
  const [showFilter, setShowFilter] = useState(false);
  let {location: srcLocation} = props;

  if (typeof window !== `undefined`) {
    srcLocation = location.search;
  }
  const urlTag = new URLSearchParams(srcLocation).get("tag") || "";
  const urlAuthor = new URLSearchParams(srcLocation).get("author") || "";
  const urldate = new URLSearchParams(srcLocation).get("date") || "";
  const authorList = new Set();
  const tagList = new Set();

  blogList.forEach((blog) => {
    authorList.add(blog.author);
    blog.tags.forEach((blogTag) => {
      tagList.add(blogTag);
    });
  });

  return (
    <Form role="search" method="GET">
      <Row className="justify-content-center" id="search-form">
        <Col md="8" className="pl-4 pt-3 pb-3 pr-0">
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
                  }&date=${date === undefined ? `${urldate}` : `${date}`}`
                )
              }
              placeholder="Search..."
              value={query}
            />
          </FormGroup>
        </Col>
        <Col md="2" className="pt-3 pl-4 pr-2">
          <Button
            type="button"
            color="primary"
            onClick={() => {
              setShowFilter(!showFilter);
            }}
            size="lg"
            id="search-btn"
          >
            <FaFilter />
            Filter
          </Button>
        </Col>
      </Row>
      {showFilter === true ? (
        <div className="row justify-content-center">
          <Col md="10" className="pt-1 align-item-center pb-0 input-col">
            <div className="row mt-0 justify-content-center">
              <Col md="3" className="pt-1">
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
                        }&date=${date === undefined ? `${urldate}` : `${date}`}`
                      )
                    }
                    value={tag}
                  >
                    <option value="">All</option>
                    {[...tagList.values()].map((blogTag, i) => {
                      return <option value={blogTag}>{blogTag}</option>;
                    })}
                  </Input>
                </FormGroup>
              </Col>
              <Col md="3" className="pt-1 pb-0">
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
                        }&author=${encodeURIComponent(e.target.value)}&date=${
                          date === undefined ? `${urldate}` : `${date}`
                        }`
                      )
                    }
                    value={author}
                  >
                    <option value="">All</option>
                    {[...authorList.values()].map((blogAuthor, i) => {
                      return <option value={blogAuthor}>{blogAuthor}</option>;
                    })}
                  </Input>
                </FormGroup>
              </Col>
              <Col md="3" className="pt-1 pb-0">
                <FormGroup>
                  <Label for="searchQuery">
                    <h6>Date</h6>
                  </Label>
                  <Input
                    type="date"
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
                        }&date=${encodeURIComponent(e.target.value)}`
                      )
                    }
                    value={date}
                  />
                </FormGroup>
              </Col>

              <Col md="2" className="pt-1 pb-0">
                <FormGroup className="text-center ">
                  <Button
                    type="button"
                    color="primary"
                    size="lg"
                    id="search-btn"
                    onClick={navigate(`${location.pathname}`)}
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
