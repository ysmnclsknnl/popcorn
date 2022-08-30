import React from "react";
import searchImg from "../assets/magnifier.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="App-header">
      <section className="logo">
        <img src="" alt="logo" />
        <p>Popcorn</p>
      </section>
      <section className="search-icon">
        <Link to="search">
          <img className="search-img" src={searchImg} alt="search button" />
        </Link>
      </section>
    </header>
  );
};

export default Header;
