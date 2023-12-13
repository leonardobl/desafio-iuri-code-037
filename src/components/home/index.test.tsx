import { render, screen, within } from "@testing-library/react";
import mediaQuery from "css-mediaquery";
import Home from ".";

function createMatchMedia(width: number) {
  return (query: string) => {
    return {
      matches: mediaQuery.match(query, { width }),
      media: "",
      addListener: () => {},
      removeListener: () => {},
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => true,
    };
  };
}

function resizeScreenSize(width: number) {
  window.matchMedia = createMatchMedia(width);
}

describe("Deve testar todo o ambiente mobile", () => {
  beforeEach(() => resizeScreenSize(400));
  it("Deve apresentar um menu mobile", () => {
    render(<Home />);
    const navMenu = screen.getByTestId("menu-mobile");
    expect(navMenu).toBeInTheDocument();
  });

  it("O menu de apresentar 3 imagens", () => {
    render(<Home />);
    const container = screen.getByTestId("menu-mobile");
    const imgs = within(container).getAllByRole("img");

    expect(imgs).toHaveLength(3);
  });
});
