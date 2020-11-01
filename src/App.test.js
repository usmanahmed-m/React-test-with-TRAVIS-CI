import { render, screen } from "@testing-library/react";
import App from "./App";

test("Hello World", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});

test("Test Driven", () => {
  render(<App />);
  const linkElement = screen.getByText(/Test Driven Development/i);
  expect(linkElement).toBeInTheDocument();
});
