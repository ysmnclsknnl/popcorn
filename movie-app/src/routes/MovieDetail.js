import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Poster from "../components/Poster";
import "../componentCss/MovieDetail.css";

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
    <div className="movie-detail-container ">
      <Poster
        posterPath={data.poster_path}
        alt="movie poster"
        className="movie-detail-poster"
      />
      <div className="movie-detail-text">
        <p>{data.id}</p>
        <h2>{data.title}</h2>
        <em>{data.tagline}</em>
        <p>
          <strong>Overview : </strong>
          {data.overview}
        </p>
        <p>
          <strong>Original Title: </strong>
          {data.original_title}
        </p>
        <p>
          <strong>Release Date: </strong>
          {data.release_date}
        </p>
        <p>{data.vote_average}</p>
        <p>{data.vote_count}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
