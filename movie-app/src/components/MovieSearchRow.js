import React from "react";
import { useFetch } from "../hooks/useFetch";
import Loading from "./Loading";
import Error from "./Error";
import Poster from "./Poster";
import "../App.css";
import { Link } from "react-router-dom";
import favoriteIcon from "../assets/favorite2.png";
import "../componentCss/Row.css";
import { useSearchContext } from "../context/SearchContext";

const MovieSearchRow = ({ className }) => {
  const { pageUrl, handleTotalPage } = useSearchContext();
  console.log(`page pageUrl is ${pageUrl} `);
  const { loading, error, data } = useFetch(pageUrl);

  if (error) {
    return <Error text="Movies can not be loaded" />;
  }
  if (loading) {
    return <Loading />;
  }
  if (data) {
    handleTotalPage(data.total_pages);
  }

  return (
    <div className="row">
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
};
export default MovieSearchRow;
