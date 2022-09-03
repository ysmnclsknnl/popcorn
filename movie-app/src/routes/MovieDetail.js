import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Poster from "../components/Poster";
import "../componentCss/MovieDetail.css";

import Trailer from "../components/Trailer";

const MovieDetail = () => {
  const { id } = useParams();

  const { loading, error, data } = useFetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=9d3f54e45d879086ab5584cbe37cd1cd&language=en-US`
  );

  const getFormattedDate = (date) => {
    const [year, month, day] = date.split("-");
    return { fullDate: `${day}/${month}/${year}`, year: year };
  };

  if (error) {
    return <Error text="Movie details can not be loaded" />;
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="movie-detail-container ">
      <Poster
        posterPath={data.poster_path}
        alt="movie poster"
        className="movie-detail-poster"
      />
      <div className="movie-detail-text">
        <p>{data.id}</p>
        <h2 className="movie-detail-title">{`${data.title} (${
          getFormattedDate(data.release_date).year
        })`}</h2>
        <ul>
          <li>{getFormattedDate(data.release_date).fullDate}</li>
          <li>
            {data.genres.map((genre) => (
              <li key={genre.id}> {genre.name}</li>
            ))}
          </li>
          <li>{`${Math.floor(data.runtime / 60)}h  ${data.runtime % 60}m`}</li>
        </ul>
        <em>{data.tagline}</em>
        <p>
          <strong>Overview : </strong>
          {data.overview}
        </p>
        <p>
          <strong>Original Title: </strong>
          {data.original_title}
        </p>

        <p>{data.vote_average}</p>
        <p>{data.vote_count}</p>
      </div>
      <Trailer movieId={id} />
    </div>
  );
};

export default MovieDetail;
