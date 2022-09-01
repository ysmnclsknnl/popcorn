import React from "react";
import MyAccount from "./MyAccount";
import searchImg from "../assets/magnifier.png";
import logoImg from "../assets/logo.png";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="App-header">
      <NavLink className="nav-link" to="/">
        <section className="logo">
          <img className="logo-img" src={logoImg} alt="logo" />
          <h1 className="logo-title">Popcorn</h1>
        </section>
      </NavLink>
      <NavLink to="myaccount" className="nav-link">
        <MyAccount />
      </NavLink>
      <NavLink className="nav-link" to="search">
        <section className="search-icon">
          <img className="search-img" src={searchImg} alt="search button" />
        </section>
      </NavLink>
    </header>
  );
};

export default Header;
