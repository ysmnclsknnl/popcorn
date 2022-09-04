import React from "react";
import searchImg from "../assets/magnifier.png";
import logoImg from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import "../App.css";
import "../componentCss/Header.css";
const Header = () => {
  return (
    <header className="App-header ">
      <NavLink className="nav-link" to="/">
        <section className="logo">
          <img className="logo-img" src={logoImg} alt="logo" />
          <h1 className="logo-title">Popcorn</h1>
        </section>
      </NavLink>
      <nav className="main-nav">
        <NavLink to="mywatchlist" className="nav-link">
          <p>My Watch List</p>
        </NavLink>
        <NavLink className="nav-link" to="search">
          <img className="search-img" src={searchImg} alt="search button" />
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
