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
      className={`vote-average  ${
        formatVoteAverage(voteAverage) > 7.5 ? "green" : ""
      }`}
    >
      <p className="vote-average-text"> {formatVoteAverage(voteAverage)}</p>
    </div>
  );
};

export default AverageVote;
