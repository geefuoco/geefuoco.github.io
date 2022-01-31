import React, { useRef, useEffect } from "react";
import "./App.scss";
import Home from "../Home/Home";
import AboutMe from "../AboutMe/AboutMe";

function App() {
  const app = useRef();
  const [red, green, blue] = [52, 23, 132];

  const scrollBackground = (ev) => {
    const y = 1 + window.scrollY / 500;
    const [r, g, b] = [red * y, green * y * y, blue * y].map(Math.round);
    app.current.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollBackground);

    return () => window.removeEventListener("scroll", scrollBackground);
  }, []);

  return (
    <div className="app" ref={app}>
      <Home />
      <AboutMe />
    </div>
  );
}

export default App;
