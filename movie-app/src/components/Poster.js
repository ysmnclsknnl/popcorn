import React from "react";

const Poster = ({ posterPath, alt, className }) => {
  return (
    <img
      src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
      alt={alt}
      className={className}
    />
  );
};

export default Poster;
