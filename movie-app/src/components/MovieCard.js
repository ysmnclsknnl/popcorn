import React from "react";
import Poster from "./Poster";
import WatchListIcon from "./WatchListIcon";
import { Link } from "react-router-dom";

import "../componentCss/MovieCard.css";

export const MovieCard = ({ id, title, posterPath, voteAverage }) => {
  console.log(`movie id is ${id}`);
  return (
    <div className="movie-card">
      <Link to={`movie/${id}`}>
        <Poster className="poster-link" posterPath={posterPath} alt={title} />
      </Link>
      <div className="overlay">
        <WatchListIcon id={id} />
        <p className={`average-vote-count ${voteAverage > 7.5 ? "green" : ""}`}>
          {voteAverage}
        </p>
      </div>
    </div>
  );
};
