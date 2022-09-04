import React from "react";
import Poster from "./Poster";
import { Link } from "react-router-dom";
import plusDark from "../assets/plusorange.png";

import "../componentCss/MovieCard.css";

export const MovieCard = ({ id, title, posterPath, voteAverage }) => {
  console.log(`movie id is ${id}`);
  return (
    <div className="movie-card">
      <Link to={`movie/${id}`}>
        <Poster className="poster-link" posterPath={posterPath} alt={title} />
      </Link>
      <div className="overlay">
        <img className="favorite-icon" src={plusDark} alt="favoriteIcon" />
        <p className="average-vote-count">{voteAverage}</p>
      </div>
    </div>
  );
};
