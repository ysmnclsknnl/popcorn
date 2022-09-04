import React from "react";
import logo from "../assets/logo.png";
import "../componentCss/MovieDetail.css";
import { POSTER_BASE_URL } from "../constants";

const Poster = ({ posterPath, alt, className }) => {
  return (
    <img
      src={posterPath ? `${POSTER_BASE_URL}/${posterPath}` : logo}
      alt={alt}
      className={className}
    />
  );
};

export default Poster;
