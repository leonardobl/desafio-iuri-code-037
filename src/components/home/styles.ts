import styled, { css } from "styled-components";

export const WrapperPage = styled.div<{ $isMobile: boolean }>`
  ${({ theme: { colors }, $isMobile }) => css`
    max-width: 1920px;
    margin: 0 auto;
    position: relative;

    ${!$isMobile &&
    `&::before {
      content: "";
      display: block;
      height: 928px;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;

      background: linear-gradient(
        to right,
        transparent 50%,
        ${colors["brand-color"]} 50%
      );
    }`}
  `}
`;

export const WrapperContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.header`
  max-width: 1200px;
  padding: 50px 16px 0;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 0;
  }
`;

export const MenuMobile = styled.nav`
  ${({ theme: { colors } }) => css`
    background-color: ${colors["brand-color"]};
    padding: 15px 24px;
    display: flex;
    align-items: center;
    margin-bottom: 100px;
    justify-content: space-between;
  `}
`;

export const MenuDesktop = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 300px;
`;

export const WrapperSides = styled.div`
  display: flex;

  @media (max-width: 600px) {
    padding: 0 16px;
  }
`;

export const HeaderLeftSide = styled.div``;

export const HeaderRightSide = styled.div`
  @media (max-width: 600px) {
    visibility: hidden;
  }
`;

export const MenuDesktopContentLeftSide = styled.ul`
  ${({ theme: { colors } }) => css`
    display: flex;
    list-style: none;
    gap: 44px;
    align-items: center;

    li a {
      display: flex;
      gap: 10px;
      text-decoration: none;
      color: ${colors.dark20};
      font-size: 18px;
      font-weight: 500;
    }
  `}
`;

export const MenuDesktopContentRigthSide = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    gap: 10px;
    align-items: center;

    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 10px;
      color: ${colors.support5};
      font-size: 18px;
      font-weight: 500;
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme: { colors } }) => css`
    color: ${colors["brand-color"]};

    font-size: 54px;
    font-weight: 600;

    span {
      width: 100%;
      display: block;
    }

    @media (max-width: 600px) {
      font-size: 34px;
      font-weight: 600;
    }
  `}
`;
