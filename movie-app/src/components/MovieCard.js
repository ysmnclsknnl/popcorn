import React from "react";
import Poster from "./Poster";
import WatchList from "./WatchList";
import { Link } from "react-router-dom";
import plusDark from "../assets/plusdark.png";

import "../componentCss/MovieCard.css";

export const MovieCard = ({ id, title, posterPath, voteAverage }) => {
  console.log(`movie id is ${id}`);
  return (
    <div className="movie-card">
      <Link to={`movie/${id}`}>
        <Poster className="poster-link" posterPath={posterPath} alt={title} />
      </Link>
      <div className="overlay">
        <WatchList id={id} />
        <p className="average-vote-count">{voteAverage}</p>
      </div>
    </div>
  );
};
