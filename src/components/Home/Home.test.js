import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
  const setup = () => render(<Home />);

  it("should have text on screen", () => {
    setup();
    expect(screen.getByText(/developer/i)).toBeDefined();
  });

  it("should also render an ImageCarousel component with 19 images", () => {
    setup();
    expect(screen.queryAllByRole("img").length).toBe(19);
  });
});
