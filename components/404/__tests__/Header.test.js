import "@testing-library/jest-dom"; // 1
import { render, screen } from "@testing-library/react"; // 2
import Header from "../Header";

it("renders a heading", () => {
  render(<Header />);

  const heading = screen.getByRole("heading", { level: 1 });
  const goBackLink = screen.getByText("Powrót na stronę główną");

  // Assertion
  expect(heading).toBeInTheDocument();
  expect(goBackLink).toBeInTheDocument();
});
