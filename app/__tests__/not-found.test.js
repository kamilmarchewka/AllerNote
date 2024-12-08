import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Custom404 from "../not-found";

describe("404 Page", () => {
  it("renders a heading with 404", () => {
    render(<Custom404 />);
    const heading = screen.getByRole("heading", { name: /404/i, level: 1 });

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("contains a link that redirects to the homepage", () => {
    render(<Custom404 />);
    const link = screen.getByRole("link", { name: /Powrót na stronę główną/i });

    // Assertion
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });
});
