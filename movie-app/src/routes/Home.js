import React from "react";
import Row from "../components/Row";
import { HOMEPAGE_URL } from "../constants";

const Home = () => {
  return (
    <div className="home">
      <Row
        url={HOMEPAGE_URL.popular}
        className="row-movie-cards"
        rowTitle="Popular"
      />

      <Row
        url={HOMEPAGE_URL.upcoming}
        className="row-movie-cards"
        rowTitle="Upcoming"
      />

      <Row
        url={HOMEPAGE_URL.topRated}
        className="row-movie-cards"
        rowTitle="Top Rated"
      />
    </div>
  );
};

export default Home;
