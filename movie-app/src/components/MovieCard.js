import React from "react";
import Poster from "./Poster";
import WatchListIcon from "./WatchListIcon";
import { Link } from "react-router-dom";

import "../componentCss/MovieCard.css";
import AverageVote from "./AverageVote";

export const MovieCard = ({ id, title, posterPath, voteAverage }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${id}`}>
        <Poster className="poster-link" posterPath={posterPath} alt={title} />
      </Link>
      <div className="overlay">
        <WatchListIcon id={id} />
        <AverageVote voteAverage={voteAverage} />
      </div>
    </div>
  );
};
