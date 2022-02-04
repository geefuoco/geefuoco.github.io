import React from "react";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <section id="about" className="page-container">
      <div className="about-description-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          My name is Gianluca Fuoco and I am a fullstack web developer based in
          Toronto.
        </p>
        <p className="about-description">
          I genuinely love to write code and solve complex problems. I wrote my
          first java application, a{" "}
          <a
            href="https://www.spigotmc.org/resources/minecraft-rpg.93514/"
            target="_blank"
            rel="noreferrer"
          >
            Minecraft RPG Plugin{" "}
          </a>
          , in 2020 with over 7000 lines of code. Since then, I've learned
          fullstack web development with tech stacks like Ruby on Rails and my
          personal favourite MERN (MongoDB/Express/React/NodeJs)
        </p>
        <p className="about-description">
          I am a self taught programmer with the passion and drive to learn and
          evolve my coding skills.
        </p>
      </div>
      <div className="desk-image-container">
        <img
          className="setup-image"
          src="/images/desksetup_transparent.png"
          alt="block version of me sitting at my desk"
        />
      </div>
    </section>
  );
};

export default AboutMe;
