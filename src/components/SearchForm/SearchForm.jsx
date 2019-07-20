import React from "react";
import { navigate } from "gatsby";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const SearchForm = ({ query, filter }) => (
  <Form role="search" method="GET">
    <Row form id="search-form">
      <Col md="6">
        <FormGroup>
          <Label for="searchQuery">
            <h7>Search</h7>
          </Label>
          <Input
            type="search"
            id="search-input"
            name="keywords"
            bsSize="lg"
            aria-controls="search-results-count"
            onChange={e =>
              navigate(
                `${location.pathname}?keywords=${encodeURIComponent(
                  e.target.value
                )}&filter=${filter}`
              )
            }
            placeholder="Search..."
            value={query}
          />
        </FormGroup>
      </Col>
      <Col md="4">
        <FormGroup>
          <Label for="searchFilter">
            <h7>Filter</h7>
          </Label>
          <Input
            type="select"
            name="filter"
            id="search-tag"
            bsSize="lg"
            aria-controls="search-results-count"
            onChange={e =>
              navigate(
                `${
                  location.pathname
                }?keywords=${query}&filter=${encodeURIComponent(
                  e.target.value
                )}`
              )
            }
            value={filter}
          >
            <option value="">All</option>
            <option value="gameplay">Gameplay</option>
            <option value="logic">Logic</option>
          </Input>
        </FormGroup>
      </Col>
      <Col md="2">
        <Button type="submit" color="primary" size="lg" id="search-btn">
          Search
        </Button>
      </Col>
    </Row>
  </Form>
);

export default SearchForm;
