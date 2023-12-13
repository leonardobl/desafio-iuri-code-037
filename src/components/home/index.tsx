import React from "react";
import * as S from "./styles";
import { useMediaQuery, useTheme } from "@mui/material";

function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only("xs")); // between 0 and 600px
  const isTablet = useMediaQuery(theme.breakpoints.only("sm")); // between 600px and 900px
  const isDesktop = useMediaQuery(theme.breakpoints.up("md")); // above 900px

  return (
    <S.Wrapper>
      {isMobile && (
        <S.Menu data-testid="menu-mobile">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </S.Menu>
      )}
    </S.Wrapper>
  );
}

export default Home;
