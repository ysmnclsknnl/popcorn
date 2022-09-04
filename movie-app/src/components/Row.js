import React from "react";

import { useFetch } from "../hooks/useFetch";
import Loading from "./Loading";
import Error from "./Error";
import Poster from "./Poster";
import "../App.css";
import { Link } from "react-router-dom";
import { MovieCard } from "./MovieCard";

import "../componentCss/Row.css";

const Row = ({ url, className, rowTitle }) => {
  const { loading, error, data } = useFetch(url);

  if (error) {
    return <Error text="Movies can not be loaded" />;
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="row">
      {rowTitle && <h2 className="row-title">{rowTitle}</h2>}
      {data.results.length === 0 && <div> No movies are found</div>}
      {data.results.length > 0 && (
        <div className={className}>
          {data.results.map(({ id, title, poster_path, vote_average }) => (
            <MovieCard
              key={id}
              id={id}
              title={title}
              posterPath={poster_path}
              voteAverage={vote_average}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default Row;
