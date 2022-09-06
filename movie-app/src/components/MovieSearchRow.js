import React from "react";
import { useFetch } from "../hooks/useFetch";
import Loading from "./Loading";
import Error from "./Error";
import { MovieCard } from "./MovieCard";
import "../App.css";
import "../componentCss/Row.css";
import { useSearchContext } from "../context/SearchContext";

const MovieSearchRow = ({ className }) => {
  const { pageUrl, handleTotalPage } = useSearchContext();
  const { loading, error, data } = useFetch(pageUrl);

  if (error) {
    return <Error text="Movies can not be loaded" />;
  }
  if (loading) {
    return <Loading />;
  }

  handleTotalPage(data.total_pages ? data.total_pages : 1);

  return (
    <div className="container-flex-row">
      {data.results.length === 0 && <div> No movies are found</div>}
      {data.results.length > 0 && (
        <div className={className}>
          {data.results.map(({ id, title, poster_path, vote_average }) => (
            <MovieCard
              key={id}
              id={id}
              title={title}
              posterPath={poster_path}
              voteAverage={vote_average}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default MovieSearchRow;
