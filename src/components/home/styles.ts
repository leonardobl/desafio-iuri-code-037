import styled, { css } from "styled-components";

export const Container = styled.div<{ $isMobile: boolean }>`
  ${({ theme: { colors }, $isMobile }) => css`
    max-width: 1920px;
    margin: 0 auto;
    padding: 32px 15px 0;
    position: relative;

    @media (min-width: 400px) {
      padding: 0;
    }

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

export const Wrapper = styled.div`
  max-width: 1124px;
`;

export const Header = styled.header``;

export const HeaderLeftSide = styled.div``;
export const HeaderRightSide = styled.div``;

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

export const MenuDesktop = styled.nav``;

export const MenuDesktopContentLeftSide = styled.ul``;

export const Title = styled.h1`
  ${({ theme: { colors } }) => css`
    color: ${colors["brand-color"]};

    span {
      width: 100%;
      display: block;
    }

    @media (min-width: 400px) {
      font-size: 30px;
      font-weight: 600;
    }
  `}
`;
