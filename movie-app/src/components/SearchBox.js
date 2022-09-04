import React from "react";
import "../componentCss/SearchMovie.css";
import { useSearchContext } from "../context/SearchContext";

const SearchBox = ({ handleShowRow }) => {
  const { handlePageChange, handlePageUrl } = useSearchContext();
  return (
    <div className="search-wrapper">
      <label className="search-form" htmlFor="search-form">
        <input
          type="search"
          name="search-form"
          id="search-form"
          className="search-input"
          placeholder="Search for movies..."
          onChange={(e) => {
            handlePageUrl(e.target.value);
            handlePageChange(1);
            handleShowRow(e.target.value);
          }}
        />
      </label>
    </div>
  );
};

export default SearchBox;
