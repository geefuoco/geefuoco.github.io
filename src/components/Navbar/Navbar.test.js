import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  const setup = () => render(<Navbar />);

  it("should render three links", () => {
    setup();
    expect(screen.getAllByRole("link").length).toEqual(3);
  });
});
