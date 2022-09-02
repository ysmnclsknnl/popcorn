import React, { useState } from "react";
import Row from "../components/Row";
import Pagination from "../components/Pagination";
import { usePaginationContext } from "../context/PaginationContext";
import "../componentCss/SearchMovie.css";

export const SearchMovie = () => {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  //   const { page, setPage, setTotalPages } = usePaginationContext();

  const url = `https://api.themoviedb.org/3/search/movie?api_key=9d3f54e45d879086ab5584cbe37cd1cd&language=en-US&query=${query}&page=${currentPage}&include_adult=false`;

  const handleTotalPage = (numberOfPages) => {
    setTotalPages(numberOfPages);
    console.log(`total pages is ${totalPages}`);
  };

  const handleCurrentPage = (number) => {
    setCurrentPage(number);
    console.log(`current page is ${currentPage}`);
  };

  return (
    <div>
      <div className="search-wrapper">
        <label className="search-form" htmlFor="search-form">
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Search for movies..."
            onChange={(e) => {
              setQuery(e.target.value);
              setCurrentPage(1);
              setTotalPages(0);
            }}
          />
        </label>
      </div>
      {query.length > 0 && (
        <>
          <Row
            url={url}
            className="container-search"
            handleTotalPage={handleTotalPage}
          />
          <Pagination
            currentPage={currentPage}
            handleCurrentPage={handleCurrentPage}
            totalPages={totalPages}
          />
        </>
      )}
    </div>
  );
};
