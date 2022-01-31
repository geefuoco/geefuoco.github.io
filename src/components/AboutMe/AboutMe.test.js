import { render, screen } from "@testing-library/react";
import AboutMe from "./AboutMe";

describe("About Me", () => {
  const setup = () => render(<AboutMe />);

  it("should render the about me component", () => {
    setup();
    expect(screen.getByText(/about me/i)).toBeTruthy();
  });

  it("should render an image  with alt containing 'desk'", () => {
    setup();
    expect(screen.getByRole("img")).toBeTruthy();
    expect(screen.getByAltText(/desk/i)).toBeTruthy();
  });
});
