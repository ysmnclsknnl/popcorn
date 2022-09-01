import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Poster from "../components/Poster";

const MovieDetail = () => {
  const { id } = useParams();
  console.log(`id ${id}`);

  const { loading, error, data } = useFetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=9d3f54e45d879086ab5584cbe37cd1cd&language=en-US`
  );
  if (error) {
    return <Error text="Product can not be loaded" />;
  }
  if (loading) {
    return <Loading />;
  }
  console.log(`data.homepage is ${data.homepage}`);
  return (
    <div className="flex-row ">
      <Poster
        posterPath={data.poster_path}
        alt="movie poster"
        className="movie-detail-poster"
      />
      <div className="flex-column">
        <p>{data.id}</p>
        <h1>{data.title}</h1>
        <em>{data.tagline}</em>
        <p>Overview :{data.overview}</p>
        <p>Original Title:{data.original_title}</p>
        <p>Release Date: {data.release_date}</p>
        <p>{data.vote_average}</p>
        <p>{data.vote_count}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
