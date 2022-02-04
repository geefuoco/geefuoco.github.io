import React from "react";
import "./Projects.scss";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  const mernShopDesc = `
  A MERN stack application demonstrating a shopping website. The site contains users, shopping carts, and checkout with Stripe.
  `;

  const socialMediaDesc = `
  A social media website built with Ruby on Rails. It features likes, posts, comments, users, profiles, uploading a photo with a caption, creating an account, password resets, friend requests, etc.
  `;

  const battleShipDesc = `
  An implementation of battleship in the browser. Made with Javascript and Webpack.
  `;

  const rubyChessDesc = `
  A command-line game of chess. Built with Ruby.
  `;

  const dogWebsiteDesc = `
  An example of a dog breeder website for the English Bulldog.
  `;

  return (
    <section id="projects" className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <div className="projects">
        <ProjectCard
          link={"https://mernshopex.herokuapp.com"}
          imageObject={{
            source: "/images/mernshopex.png",
            alt: "a screenshot of the mernshopex webpage",
          }}
          description={mernShopDesc}
          github={"https://github.com/geefuoco/mern_shop"}
          name="Mern Shopping App"
        />
        <ProjectCard
          link={"https://thepeoplenetwork.herokuapp.com"}
          imageObject={{
            source: "/images/thepeoplenetwork.png",
            alt: "a screenshot of thepeoplenetwork webpage",
          }}
          description={socialMediaDesc}
          github={"https://github.com/geefuoco/the_people_network"}
          name="Social Media Site"
        />
        <ProjectCard
          link={"https://battleshipjavascript.netlify.app"}
          imageObject={{
            source: "/images/battleshipjs.png",
            alt: "a screenshot of the battleshipjs webpage",
          }}
          description={battleShipDesc}
          github={"https://github.com/geefuoco/battleshipjs"}
          name="Battleship"
        />
        <ProjectCard
          link={"https://replit.com/@geefuoco/rubychess#"}
          imageObject={{
            source: "/images/rubychess.png",
            alt: "a screenshot of the ruby repl",
          }}
          description={rubyChessDesc}
          github={"https://github.com/geefuoco/ruby_chess"}
          name="Chess"
        />
        <ProjectCard
          link={"https://bulldogwebsite.netlify.app/"}
          imageObject={{
            source: "/images/bulldogwebsite.png",
            alt: "a screenshot of the bulldog website",
          }}
          description={dogWebsiteDesc}
          github={"https://github.com/geefuoco/dog-website"}
          name="Example Dog Website"
        />
      </div>
    </section>
  );
};

export default Projects;
