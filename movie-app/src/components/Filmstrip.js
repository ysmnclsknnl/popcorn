import React from "react";
import { useFetch } from "../hooks/useFetch";
import Loading from "./Loading";
import Error from "./Error";
import "../App.css";
import { Link } from "react-router-dom";

const Filmstrip = ({ url }) => {
  const { loading, error, data } = useFetch(url);
  if (error) {
    return <Error text="Product can not be loaded" />;
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container">
      {data.results.map((movie) => (
        <Link to={`movie/${movie.id}`} key={movie.id}>
          <div className="card">
            <img
              key={movie.id}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.original_title}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Filmstrip;
