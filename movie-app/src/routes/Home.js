import React from "react";
import Row from "../components/Row";
import "../App.css";
import "../componentCss/Row.css";

const Home = () => {
  const urls = {
    popular:
      "https://api.themoviedb.org/3/movie/popular?api_key=9d3f54e45d879086ab5584cbe37cd1cd&language=en-US&page=1",
    upcoming:
      "https://api.themoviedb.org/3/movie/upcoming?api_key=9d3f54e45d879086ab5584cbe37cd1cd&language=en-US&page=1",
    topRated:
      "https://api.themoviedb.org/3/movie/top_rated?api_key=9d3f54e45d879086ab5584cbe37cd1cd&language=en-US&page=1",
  };
  return (
    <div className="width-100 home">
      <Row url={urls.popular} className="row-movie-cards" rowTitle="Popular" />

      <Row
        url={urls.upcoming}
        className="row-movie-cards"
        rowTitle="Upcoming"
      />

      <Row
        url={urls.topRated}
        className="row-movie-cards"
        rowTitle="Top Rated"
      />
    </div>
  );
};

export default Home;
