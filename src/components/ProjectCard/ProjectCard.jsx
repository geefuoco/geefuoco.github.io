import React, { useRef } from "react";
import "./ProjectCard.scss";

const ProjectCard = ({ name, link, imageObject, description, github }) => {
  const descriptionRef = useRef();

  const toggleDescription = (ev) => {
    descriptionRef.current.classList.toggle("toggle-description");
  };

  return (
    <div
      className="project-card"
      onMouseEnter={toggleDescription}
      onMouseLeave={toggleDescription}
    >
      <div className="project-header">
        <h3 className="project-title">{name}</h3>
      </div>
      <div className="project-body">
        <div className="project-image-container">
          <a href={link} target="_blank" rel="noreferrer">
            <img
              className="project-image"
              src={imageObject.source}
              alt={imageObject.alt}
            />
          </a>
        </div>
        <div className="description-container">
          <div
            className="project-description toggle-description"
            ref={descriptionRef}
          >
            {description}
          </div>
        </div>
      </div>
      <div className="project-footer">
        <a
          className="project-button"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          View Project
        </a>
        <a
          className="project-button"
          href={github}
          target="_blank"
          rel="noreferrer"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
