import React from "react";
import Filmstrip from "../components/Filmstrip";

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
    <div>
      <Filmstrip url={urls.popular} />
      <Filmstrip url={urls.upcoming} />
      <Filmstrip url={urls.topRated} />
    </div>
  );
};

export default Home;
