import React from "react";
import "../componentCss/AverageVote.css";

const AverageVote = ({ voteAverage }) => {
  const formatVoteAverage = (voteAverage) => {
    return parseFloat(
      voteAverage.toFixed(1)[2] !== "0"
        ? voteAverage.toFixed(1)
        : voteAverage.toFixed()
    );
  };

  return (
    <div
      className={`average-vote ${
        formatVoteAverage(voteAverage) > 7.5 ? "green" : ""
      }`}
    >
      {formatVoteAverage(voteAverage)}
    </div>
  );
};

export default AverageVote;
