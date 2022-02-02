import React from "react";
import "./Projects.scss";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  const mernShopDesc = `
  A MERN stack application demonstrating a shopping website. The site contains users, shopping carts, and checkout with Stripe.
  `;

  return (
    <section className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <div className="projects">
        <ProjectCard
          link={"https://mernshopex.herokuapp.com"}
          imageObject={{ source: "", alt: "example" }}
          description={mernShopDesc}
          github={"https://github.com/geefuoco/mern_shop"}
          name="Mern Shopping App"
        />
        <ProjectCard
          link={""}
          imageObject={{ source: "", alt: "example" }}
          description={"desc"}
          github={""}
          name="Social Media Site"
        />
        <ProjectCard
          link={""}
          imageObject={{ source: "", alt: "example" }}
          description={"desc"}
          github={""}
          name="Battleship"
        />
        <ProjectCard
          link={""}
          imageObject={{ source: "", alt: "example" }}
          description={"desc"}
          github={""}
          name="Chess"
        />
      </div>
    </section>
  );
};

export default Projects;
