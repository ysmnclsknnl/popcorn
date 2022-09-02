import React from "react";
import logo from "../assets/logo.png";

const Poster = ({ posterPath, alt, className }) => {
  return (
    <img
      src={posterPath ? `https://image.tmdb.org/t/p/w500/${posterPath}` : logo}
      alt={alt}
      className={className}
    />
  );
};

export default Poster;
