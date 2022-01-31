import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  const setup = () => render(<App />);

  it("should render a home component", () => {
    setup();
    expect(
      screen.getByText(/Looking for a fullstack developer\?/i)
    ).toBeTruthy();
  });

  it("should render an about component", () => {
    setup();
    expect(screen.getByText(/about me/i)).toBeTruthy();
    expect(
      screen.getByAltText(/block version of me sitting at my desk/i)
    ).toBeTruthy();
  });

  it.skip("should container a projects section", () => {
    setup();
    expect(screen.getByText(/projects/i)).toBeTruthy();
  });
});
