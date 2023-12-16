import React from "react";
import * as S from "./styles";
import { useMediaQuery, useTheme } from "@mui/material";

export function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only("xs")); // between 0 and 600px
  const isTablet = useMediaQuery(theme.breakpoints.only("sm")); // between 600px and 900px
  const isDesktop = useMediaQuery(theme.breakpoints.up("md")); // above 900px

  return (
    <S.WrapperPage $isMobile={isMobile}>
      <S.Header>
        {isMobile ? (
          <S.MenuMobile data-testid="menu-mobile">
            <img src="assets/imgs/User.svg" alt="" />
            <img src="assets/imgs/Union.svg" alt="" />
            <img src="assets/imgs/List.svg" alt="" />
          </S.MenuMobile>
        ) : (
          <S.MenuDesktop data-testid="menu-desktop">
            <S.MenuDesktopContentLeftSide>
              <li>
                <img src="assets/imgs/Union-red.svg" alt="" />
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
            <S.MenuDesktopContentRigthSide>
              <a href="#">
                Login <img src="assets/imgs/User.svg" alt="" />
              </a>
            </S.MenuDesktopContentRigthSide>
          </S.MenuDesktop>
        )}
        <S.WrapperSides>
          <S.HeaderLeftSide>
            <S.Title>
              <span>TeslaBank</span> Banco 100% digital
            </S.Title>
            <S.subTitle>
              Abrir uma conta digital nunca foi tão simples!
            </S.subTitle>

            <S.WrapperButtons data-testid="wrapperButtons">
              <S.Button>
                Abrir uma conta
                <img
                  src="assets/imgs/arrow-right.svg"
                  alt="seta apontando para a direita"
                />
              </S.Button>
              <S.WrapperIcons data-testid="wrapperIcons" hidden={isMobile}>
                <img
                  src="assets/imgs/playstore.svg"
                  alt="playstore"
                  data-testid="icon-plataform"
                />
                <img
                  src="assets/imgs/apple.svg"
                  alt="apple"
                  data-testid="icon-plataform"
                />
              </S.WrapperIcons>
            </S.WrapperButtons>
          </S.HeaderLeftSide>
          {!isMobile && (
            <S.HeaderRightSide data-testid="rightSideItem">
              <S.Card1 src="assets/imgs/Card1.svg" />
              <S.Card2 src="assets/imgs/Card2.svg" />
            </S.HeaderRightSide>
          )}
        </S.WrapperSides>
      </S.Header>

      <S.SectionOpenAcount>
        <S.SectionOpenAcountLeftSide data-testid="wrapperImgsPhone">
          <img src="assets/imgs/mobile.svg" alt="smarthphone" />
          <img src="assets/imgs/mouse-pointer.svg" alt="seta mouse" />
          <img src="assets/imgs/check-circle.svg" alt="check-circle" />
          <img src="assets/imgs/heart.svg" alt="heart" />
        </S.SectionOpenAcountLeftSide>
        <S.SectionOpenAcountRightSide></S.SectionOpenAcountRightSide>
      </S.SectionOpenAcount>

      <S.WrapperContent></S.WrapperContent>
    </S.WrapperPage>
  );
}
