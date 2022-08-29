import React from "react";
import "../App.css";

const Error = ({ text }) => {
  return (
    <div className="container text-center">
      <h2> Ooops ! Something went wrong.</h2>

      {text && <p>{text}</p>}
    </div>
  );
};

export default Error;
