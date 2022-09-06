import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <h2>Page is Not Found</h2>
      <Link className="link" to="/">
        Please Click Here to Go to The HomePage
      </Link>
    </div>
  );
};
