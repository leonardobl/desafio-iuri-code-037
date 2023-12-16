import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
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

const dataVatagens = {
  title: "Abra sua conta gratuita!",
  subtitle:
    "Envie e receba dinheiro de forma mais prática e rápida. Faça Pix, TEDs e transferências com agendamento para todos os bancos sem pagar nada.",

  options: [
    {
      title: "Seu dinheiro rendendo mais",
      subtitle: "Rendem mais que a poupança e você resgata quando quiser",
    },
    {
      title: "Conta digital 100% grátis",
      subtitle:
        "Transferências, boletos de depósito e outros serviços gratuitos",
    },
    {
      title: "Cartão sem anuidade",
      subtitle:
        "Conta digital com cartão de crédito sem anuidade e sem complicação",
    },
  ],
};

describe("Deve testar todo o ambiente mobile", () => {
  beforeAll(() => resizeScreenSize(599));
  describe("Deve testar todo o header no ambiente mobile", () => {
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

    it("Deve apresentar um subtitulo com o texto 'Abrir uma conta digital nunca foi tão simples!'", () => {
      render(
        <ThemeProvider theme={Theme}>
          <Home />
        </ThemeProvider>
      );

      const subtitle = screen.getByRole("heading", {
        level: 3,
        name: "Abrir uma conta digital nunca foi tão simples!",
      });

      expect(subtitle).toBeInTheDocument();
    });

    it("Deve apresentar um botao com o titulo 'Abrir uma conta'", () => {
      render(
        <ThemeProvider theme={Theme}>
          <Home />
        </ThemeProvider>
      );

      const button = screen.getByRole("button", { name: /Abrir uma conta/ });

      expect(button).toBeInTheDocument();
    });

    it("Deve aprensetar 2 icones junto ao botao abrir conta", () => {
      render(
        <ThemeProvider theme={Theme}>
          <Home />
        </ThemeProvider>
      );

      const container = screen.getByTestId("wrapperIcons");

      expect(container).not.toBeVisible();
    });
  });

  describe("Deve testar toda a section de abertura de conta no ambiente mobile", () => {
    it("Nao deve apresentar uma imagem de um smartphone", () => {
      render(
        <ThemeProvider theme={Theme}>
          <Home />
        </ThemeProvider>
      );

      const wrapperSmartphone = screen.queryByRole("wrapperImgsPhone");

      expect(wrapperSmartphone).toBeNull();
    });

    it.todo("Deve apresentar o titulo comk o texto 'Abra sua conta gratuita!'");
    it.todo(
      "Deve apresentar o subtitle com o texto 'Envie e receba dinheiro de forma mais prática e rápida. Faça Pix, TEDs e transferências com agendamento para todos os bancos sem pagar nada.'"
    );
    it.todo("Deve apresentar '3 vantagens'");

    it.todo("Cada vantagens deve ter title e subtitle, alem da imagem");

    it("Deve apresentar o titulo com o texto 'Abra sua conta gratuita!'", () => {
      render(
        <ThemeProvider theme={Theme}>
          <Home />
        </ThemeProvider>
      );

      const wrapperRightSideOpenAcount = screen.getByTestId(
        "wrapperRightSideOpenAcount"
      );

      const title = within(wrapperRightSideOpenAcount).getByRole("heading", {
        level: 2,
        name: dataVatagens.title,
      });

      expect(wrapperRightSideOpenAcount).toBeInTheDocument();
      expect(title).toBeInTheDocument();
    });
  });
});

describe("Deve ter todo o ambiente desktop", () => {
  beforeAll(() => resizeScreenSize(1200));

  describe("Deve testar todo o header no ambiente desktop", () => {
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

    it("Deve apresentar um subtitulo com o texto 'Abrir uma conta digital nunca foi tão simples!'", () => {
      render(
        <ThemeProvider theme={Theme}>
          <Home />
        </ThemeProvider>
      );

      const subtitle = screen.getByRole("heading", {
        level: 3,
        name: "Abrir uma conta digital nunca foi tão simples!",
      });

      expect(subtitle).toBeInTheDocument();
    });

    it("Deve apresentar um botao com o titulo 'Abrir uma conta'", () => {
      render(
        <ThemeProvider theme={Theme}>
          <Home />
        </ThemeProvider>
      );

      const button = screen.getByRole("button", { name: /Abrir uma conta/ });

      expect(button).toBeInTheDocument();
    });

    it("Deve aprensetar 2 icones junto ao botao abrir conta", () => {
      render(
        <ThemeProvider theme={Theme}>
          <Home />
        </ThemeProvider>
      );

      const container = screen.getByTestId("wrapperIcons");

      expect(container).toBeVisible();
    });

    it("Deve apresentar os 2 cartoes no sideright", () => {
      render(
        <ThemeProvider theme={Theme}>
          <Home />
        </ThemeProvider>
      );

      const rightSide = screen.getByTestId("rightSideItem");

      const imgs = within(rightSide).getAllByRole("img");

      expect(rightSide).toBeInTheDocument();
      expect(imgs).toHaveLength(2);
    });
  });

  describe("Deve testar toda a section de abertura de conta", () => {
    it("Deve apresentar uma imagem de um smartphone", () => {
      render(
        <ThemeProvider theme={Theme}>
          <Home />
        </ThemeProvider>
      );

      const wrapperSmartphone = screen.getByTestId("wrapperImgsPhone");

      const imgs = within(wrapperSmartphone).getAllByRole("img");

      expect(wrapperSmartphone).toBeInTheDocument();
      expect(imgs).toHaveLength(4);
    });

    it("Deve apresentar o titulo com o texto 'Abra sua conta gratuita!'", () => {
      render(
        <ThemeProvider theme={Theme}>
          <Home />
        </ThemeProvider>
      );

      const wrapperRightSideOpenAcount = screen.getByTestId(
        "wrapperRightSideOpenAcount"
      );

      const title = within(wrapperRightSideOpenAcount).getByRole("heading", {
        level: 2,
        name: dataVatagens.title,
      });

      expect(wrapperRightSideOpenAcount).toBeInTheDocument();
      expect(title).toBeInTheDocument();
    });
    it.todo(
      "Deve apresentar o subtitle com o texto 'Envie e receba dinheiro de forma mais prática e rápida. Faça Pix, TEDs e transferências com agendamento para todos os bancos sem pagar nada.'"
    );
    it.todo("Deve apresentar '3 vantagens'");

    it.todo("Cada vantagens deve ter title e subtitle, alem da imagem");
  });
});
