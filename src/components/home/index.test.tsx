import { render, screen } from "@testing-library/react";
import Home from ".";

render(<Home />);

describe("Teste para a page Home", () => {
  const menu = screen.getByTestId("testIdMenu");

  it("Deve apresentar um menu", () => {
    expect(menu).toBeInTheDocument();
  });
});

export {};
