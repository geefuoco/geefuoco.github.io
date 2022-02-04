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
        <p className="about-description">
          Feel free to contact me by email for any inquiries:{" "}
          <i>gianluca.fuoco9@gmail.com</i>
        </p>
        <div className="about-links">
          <a
            href="https://github.com/geefuoco"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="github-icon"
              src="/images/github-icon.svg"
              alt="github"
              width="20px"
            />
            <p className="github-text">Github</p>
          </a>
        </div>
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
