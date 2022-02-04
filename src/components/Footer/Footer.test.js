import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  const setup = () => render(<Footer />);

  it("should render a button", () => {
    setup();
    expect(screen.getByRole("link")).toBeTruthy();
  });
});
