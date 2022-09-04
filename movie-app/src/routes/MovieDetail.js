import React, { useState } from "react";
import playIcon from "../assets/playIcon.png";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Poster from "../components/Poster";
import { getMovieDetailUrl } from "../helpers/getUrl";
import "../componentCss/MovieDetail.css";
import Trailer from "../components/Trailer";
import WatchListIcon from "../components/WatchListIcon";

const MovieDetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useFetch(getMovieDetailUrl(id));
  const [play, setPlay] = useState(false);

  const getFormattedDate = (date) => {
    const [year, month, day] = date.split("-");
    return { fullDate: `${day}/${month}/${year}`, year: year };
  };
  const getDuration = (durationinMinute) => {
    return `${Math.floor(durationinMinute / 60)}h  ${durationinMinute % 60}m`;
  };
  if (error) {
    return <Error text="Movie details can not be loaded" />;
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className={`movie-detail-container ${play ? "play" : ""}`}>
        <Poster
          posterPath={data.poster_path}
          alt="movie poster"
          className="movie-detail-poster"
        />
        <div className="movie-detail-text-container">
          <h2 className="movie-detail-title">{`${data.title} (${
            getFormattedDate(data.release_date).year
          })`}</h2>

          <div className="flex-row">
            <p>{getFormattedDate(data.release_date).fullDate}</p>
            <ul>
              {data.genres.map((genre) => (
                <li key={genre.id}> {genre.name}</li>
              ))}
            </ul>
            <li>{getDuration(data.runtime)}</li>
          </div>
          <div className="user-control">
            <WatchListIcon id={id} />
            <p>{data.vote_average}</p>
            <button className="play-btn" onClick={() => setPlay(!play)}>
              <img src={playIcon} alt="play trailer" /> Play Trailer
            </button>
          </div>
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
            <strong>Total Votes: </strong>
            {data.vote_count}
          </p>
        </div>
      </div>
      {play && (
        <div className="trailer-container">
          <Trailer movieId={id} />
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
