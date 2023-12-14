import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./components/home";
import { GlobalStyles } from "./global/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Theme } from "./global/Theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={Theme}>
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);
