import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Loading from "./Loading";
import Error from "./Error";
import "../componentCss/SearchMovie.css";
const Search = () => {
  const [query, setQuery] = useState("");
  const url = `https://api.themoviedb.org/3/search/movie?api_key=9d3f54e45d879086ab5584cbe37cd1cd&language=en-US&query=${query}&page=1&include_adult=false`;
  const { loading, error, data } = useFetch(url);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <div className="search-wrapper">
      <label htmlFor="search-form">
        <input
          type="search"
          name="search-form"
          id="search-form"
          className="search-input"
          placeholder="Search for movies..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>
    </div>
  );
};

export default Search;
