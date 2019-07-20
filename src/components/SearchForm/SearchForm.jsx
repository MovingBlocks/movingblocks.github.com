import React from "react";
import { navigate } from "gatsby";

const SearchForm = ({ query, filter }) => (
  <form role="search" method="GET">
    <label htmlFor="search-input">
      <h2>Search posts</h2>
    </label>
    <input
      type="search"
      id="search-input"
      name="keywords"
      aria-controls="search-results-count"
      onChange={e =>
        navigate(
          `${location.pathname}?keywords=${encodeURIComponent(e.target.value)}&filter=${filter}`
        )
      }
      value={query}
    />
    <select
    name="tag"
    aria-controls="search-results-count"
    onChange={e =>
      navigate(
        `${location.pathname}?keywords=${query}&filter=${encodeURIComponent(e.target.value)}`
      )
    }
    value={filter}
    >
      <option value="all">All</option>
      <option value="gameplay">Gameplay</option>
      <option value="logic">Logic</option>
    </select>
    <button type="submit">Submit</button>
  </form>
);

export default SearchForm;
