import React, { useRef, useEffect } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const navLinks = useRef();
  const toggleNav = (ev) => {
    navLinks.current.classList.toggle("toggle-nav");
    document.querySelector(".nav-menu").classList.toggle("animate-menu");
  };

  const bindEvents = () => {
    navLinks.current.querySelectorAll("a").forEach((node) => {
      node.addEventListener("click", toggleNav);
    });
  };

  const unbindEvents = () => {
    navLinks.current.querySelectorAll("a").forEach((node) => {
      node.removeEventListener("click", toggleNav);
    });
  };

  useEffect(() => {
    bindEvents();
    return () => unbindEvents();
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-links" ref={navLinks}>
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
      </div>
      <div className="nav-menu" onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
