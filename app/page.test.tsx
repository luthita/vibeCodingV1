import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home page", () => {
  it("renders the Next.js logo", () => {
    render(<Home />);
    expect(screen.getByAltText("Next.js logo")).toBeInTheDocument();
  });

  it("renders the heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", {
        name: /to get started, edit the page\.tsx file/i,
      })
    ).toBeInTheDocument();
  });

  it("renders the Templates link", () => {
    render(<Home />);
    expect(screen.getByRole("link", { name: /templates/i })).toBeInTheDocument();
  });

  it("renders the Learning center link", () => {
    render(<Home />);
    expect(screen.getByRole("link", { name: /learning/i })).toBeInTheDocument();
  });

  it("renders the Deploy Now link", () => {
    render(<Home />);
    expect(screen.getByRole("link", { name: /deploy now/i })).toBeInTheDocument();
  });

  it("renders the Documentation link", () => {
    render(<Home />);
    expect(
      screen.getByRole("link", { name: /documentation/i })
    ).toBeInTheDocument();
  });

  it("Deploy Now and Documentation links open in a new tab", () => {
    render(<Home />);
    const deployLink = screen.getByRole("link", { name: /deploy now/i });
    const docsLink = screen.getByRole("link", { name: /documentation/i });
    expect(deployLink).toHaveAttribute("target", "_blank");
    expect(deployLink).toHaveAttribute("rel", "noopener noreferrer");
    expect(docsLink).toHaveAttribute("target", "_blank");
    expect(docsLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});