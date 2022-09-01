import React from "react";
import { useFetch } from "../hooks/useFetch";
import Loading from "./Loading";
import Error from "./Error";
import Poster from "./Poster";
import "../App.css";
import { Link } from "react-router-dom";
import favoriteIcon from "../assets/favorite2.png";
// import { usePaginationContext } from "../context/PaginationContext";

const Filmstrip = ({ url, className }) => {
  const { loading, error, data } = useFetch(url);
  // const { setTotalPages } = usePaginationContext();
  if (error) {
    return <Error text="Product can not be loaded" />;
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <div className={className}>
      {data.results.map(({ id, title, poster_path, vote_average }) => (
        <Link to={`movie/${id}`} key={id}>
          <div className="card">
            <Poster posterPath={poster_path} alt={`${title} movie poster`} />

            <div className="overlay">
              <img
                className="favorite-icon"
                src={favoriteIcon}
                alt="favoriteIcon"
              />
              <p className="average-vote-count">{vote_average}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default Filmstrip;
