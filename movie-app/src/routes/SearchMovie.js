import React, { useState } from "react";
import Filmstrip from "../components/Filmstrip";
import Pagination from "../components/Pagination";
import { usePaginationContext } from "../context/PaginationContext";

export const SearchMovie = () => {
  const [query, setQuery] = useState("");
  //   const { page, setPage, setTotalPages } = usePaginationContext();

  const url = `https://api.themoviedb.org/3/search/movie?api_key=9d3f54e45d879086ab5584cbe37cd1cd&language=en-US&query=${query}&page=1&include_adult=false`;

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
              //   setPage(1);
              //   setTotalPages(0);
            }}
          />
        </label>
      </div>
      {query.length > 0 && (
        <>
          <Filmstrip url={url} className="container-search" />
        </>
      )}
    </div>
  );
};
