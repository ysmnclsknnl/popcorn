import React from "react";
import { useFetch } from "../hooks/useFetch";
import Loading from "./Loading";
import Error from "./Error";
import Poster from "./Poster";
import "../App.css";
import { Link } from "react-router-dom";
import favoriteIcon from "../assets/favorite2.png";
import "../componentCss/Row.css";

// import { usePaginationContext } from "../context/PaginationContext";

const Row = ({ url, className, rowTitle, handleTotalPage }) => {
  const { loading, error, data } = useFetch(url);
  // const { setTotalPages } = usePaginationContext();
  if (error) {
    return <Error text="Product can not be loaded" />;
  }
  if (loading) {
    return <Loading />;
  }
  if (data) {
    console.log(data.page);
    if (handleTotalPage) {
      handleTotalPage(data.total_pages);
    }
    return (
      <div className="row">
        {rowTitle && <h2 className="row-title">{rowTitle}</h2>}
        <div className={className}>
          {data.results.map(({ id, title, poster_path, vote_average }) => (
            <div className="movie-card" key={id}>
              <Link to={`movie/${id}`}>
                <Poster
                  className="poster-link"
                  posterPath={poster_path}
                  alt={title}
                />
              </Link>
              <div className="overlay">
                <img
                  className="favorite-icon"
                  src={favoriteIcon}
                  alt="favoriteIcon"
                />
                <p className="average-vote-count">{vote_average}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};
export default Row;
