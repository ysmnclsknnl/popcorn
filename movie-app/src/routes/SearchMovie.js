import React, { useState } from "react";

import Pagination from "../components/Pagination";
import "../componentCss/SearchMovie.css";
import { SearchContextProvider } from "../context/SearchContext";
import SearchBox from "../components/SearchBox";
import MovieSearchRow from "../components/MovieSearchRow";

export const SearchMovie = () => {
  const [showMovies, setShowMovies] = useState(false);
  const handleShowRow = (input) => {
    setShowMovies(input.length > 0 ? true : false);
  };
  return (
    <SearchContextProvider>
      <div>
        <SearchBox handleShowRow={handleShowRow} />
        <div className="flex-column">
          {showMovies && <MovieSearchRow className="container-search" />}

          {showMovies && <Pagination />}
        </div>
      </div>
    </SearchContextProvider>
  );
};
