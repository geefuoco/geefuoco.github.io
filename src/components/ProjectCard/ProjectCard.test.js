import { render, screen } from "@testing-library/react";
import ProjectCard from "./ProjectCard";

describe("ProjectCard", () => {
  const setup = (link, imageObject) =>
    render(<ProjectCard link={link} imageObject={imageObject} />);

  it("should render a project card with a link and image", () => {
    setup("mernshopex.herokuapp.com", { src: "", alt: "" });

    expect(screen.getByRole("link")).toBeTruthy();
    expect(screen.getByRole("img")).toBeTruthy();
  });
});
