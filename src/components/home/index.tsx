import React from "react";
import * as S from "./styles";
import { useMediaQuery, useTheme } from "@mui/material";

function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only("xs")); // between 0 and 600px
  const isTablet = useMediaQuery(theme.breakpoints.only("sm")); // between 600px and 900px
  const isDesktop = useMediaQuery(theme.breakpoints.up("md")); // above 900px

  return (
    <S.Container $isMobile={isMobile}>
      <S.Wrapper>
        <S.Header>
          <S.HeaderLeftSide>
            {isMobile ? (
              <S.MenuMobile data-testid="menu-mobile">
                <img src="assets/imgs/User.svg" alt="" />
                <img src="assets/imgs/Union.svg" alt="" />
                <img src="assets/imgs/List.svg" alt="" />
              </S.MenuMobile>
            ) : (
              <S.MenuDesktop>
                <S.MenuDesktopContentLeftSide>
                  <li>
                    <img src="assets/imgs/Union.svg" alt="" />
                  </li>
                  <li>
                    <a href="#">
                      TeslaBank
                      <img src="assets/imgs/arrow-down.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Conta digital
                      <img src="assets/imgs/arrow-down.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Pra você
                      <img src="assets/imgs/arrow-down.svg" alt="" />
                    </a>
                  </li>
                </S.MenuDesktopContentLeftSide>
              </S.MenuDesktop>
            )}

            <S.Title>
              <span>TeslaBank</span> Banco 100% digital
            </S.Title>
          </S.HeaderLeftSide>
        </S.Header>
      </S.Wrapper>
    </S.Container>
  );
}

export default Home;
