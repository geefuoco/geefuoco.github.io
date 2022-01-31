import React from "react";
import Carousel from "../ImageCarousel/ImageCarousel";
import "./Home.scss";

const Home = () => {
  return (
    <section className="page-container">
      <h1 className="home-title">Looking for a Fullstack Developer?</h1>
      <Carousel />
    </section>
  );
};

export default Home;
