import { render, screen } from "@testing-library/react";
import ProjectCard from "./ProjectCard";

describe("ProjectCard", () => {
  const setup = ({ link, imageObject, name, description, github }) =>
    render(
      <ProjectCard
        link={link}
        imageObject={imageObject}
        description={description}
        github={github}
        name={name}
      />
    );

  it("should render a project card with a link and image", () => {
    setup({
      link: "testlink",
      imageObject: {
        source: "blank",
        alt: "test",
      },
      description: "test description",
      github: "test github",
      name: "Test Project",
    });

    expect(screen.getAllByRole("link").length).toEqual(3);
    expect(screen.getByRole("img")).toBeTruthy();
  });
});
