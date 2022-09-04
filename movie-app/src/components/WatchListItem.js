import React from "react";
import { getMovieDetailUrl } from "../helpers/getUrl";
import { useFetch } from "../hooks/useFetch";
import Error from "./Error";
import Loading from "./Loading";
import { MovieCard } from "./MovieCard";

const WatchListItem = ({ id }) => {
  const { loading, error, data } = useFetch(getMovieDetailUrl(id));
  if (error) {
    return <Error text="Movie can not be loaded" />;
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <MovieCard
      id={data.id}
      title={data.title}
      voteAverage={data.vote_average}
      posterPath={data.poster_path}
    />
  );
};

export default WatchListItem;
