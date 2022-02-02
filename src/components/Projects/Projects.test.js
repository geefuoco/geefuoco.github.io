import { render, screen } from "@testing-library/react";
import Projects from "./Projects";

describe("Projects", () => {
  const setup = () => render(<Projects />);

  it("should containe a title called projects", () => {
    setup();
    expect(screen.getByText(/projects/i)).toBeTruthy();
  });

  it("should render links to different websites that have projects", () => {
    setup();
    expect(screen.getAllByRole("link").length).toBeGreaterThanOrEqual(2);
  });
});
