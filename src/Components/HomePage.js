import React from "react";
import "./HomePage.css";
import Navigation from "./Navigation";
import "../img/croissants.jpg";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div class="background-container">
      <Navigation />

      <div className="content-container">
        <h1 className="main-heading">Welcome to City Cakes</h1>
        <p className="description">South Africa's Favourite Bakery Store</p>
        <Link to="/menu" className="navbar-menu">
          <button className="menu-btn">Explore The Menu</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;