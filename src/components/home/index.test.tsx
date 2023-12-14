import { render, screen, within } from "@testing-library/react";
import mediaQuery from "css-mediaquery";
import { Home } from ".";
import { ThemeProvider } from "styled-components";
import { Theme } from "../../global/Theme";

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
  beforeEach(() => resizeScreenSize(599));

  it("Deve apresentar um menu mobile", () => {
    render(
      <ThemeProvider theme={Theme}>
        <Home />
      </ThemeProvider>
    );
    const navMenu = screen.getByTestId("menu-mobile");
    expect(navMenu).toBeInTheDocument();
    expect(navMenu).toBeVisible();
  });

  it("O menu de apresentar 3 imagens", () => {
    render(
      <ThemeProvider theme={Theme}>
        <Home />
      </ThemeProvider>
    );
    const container = screen.getByTestId("menu-mobile");
    const imgs = within(container).getAllByRole("img");

    expect(imgs).toHaveLength(3);
  });

  it("Deve apresentar um titulo com o texto 'TeslaBank Banco 100% digital'", () => {
    render(
      <ThemeProvider theme={Theme}>
        <Home />
      </ThemeProvider>
    );

    const title = screen.getByRole("heading", {
      level: 1,
      name: "TeslaBank Banco 100% digital",
    });

    expect(title).toBeInTheDocument();
  });

  it("Não deve apresentar o elemento rightSide", () => {
    render(
      <ThemeProvider theme={Theme}>
        <Home />
      </ThemeProvider>
    );

    const rightSide = screen.queryByTestId("rightSideItem");

    expect(rightSide).not.toBeInTheDocument();
  });
});

describe("Deve ter todo o ambiente desktop", () => {
  beforeEach(() => resizeScreenSize(1200));

  it("Deve apresentar o menu desktop", () => {
    render(
      <ThemeProvider theme={Theme}>
        <Home />
      </ThemeProvider>
    );
    const menu = screen.getByTestId("menu-desktop");
    expect(menu).toBeVisible();
  });

  it("O menu deve apresentar 4 itens", () => {
    render(
      <ThemeProvider theme={Theme}>
        <Home />
      </ThemeProvider>
    );
    const menu = screen.getByTestId("menu-desktop");
    const itens = within(menu).getAllByRole("listitem");

    expect(itens).toHaveLength(4);
  });

  it("Deve apresentar um titulo com o texto 'TeslaBank Banco 100% digital'", () => {
    render(
      <ThemeProvider theme={Theme}>
        <Home />
      </ThemeProvider>
    );

    const title = screen.getByRole("heading", {
      level: 1,
      name: "TeslaBank Banco 100% digital",
    });

    expect(title).toBeInTheDocument();
  });

  it("Deve apresentar o elemento rightSide", () => {
    render(
      <ThemeProvider theme={Theme}>
        <Home />
      </ThemeProvider>
    );

    const rigthSideElemente = screen.getByTestId("rightSideItem");
    expect(rigthSideElemente).toBeVisible();
  });

  // it("Deve apresentar 2 imagens de cartões", () => {
  //   render(
  //     <ThemeProvider theme={Theme}>
  //       <Home />
  //     </ThemeProvider>
  //   );

  //   const rigthSideElemente = screen.getByTestId("rigthSideItem");
  // });
});
