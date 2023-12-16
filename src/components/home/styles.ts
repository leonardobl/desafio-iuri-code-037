import styled, { css } from "styled-components";

export const WrapperPage = styled.div<{ $isMobile: boolean }>`
  ${({ theme: { colors }, $isMobile }) => css`
    max-width: 1920px;
    margin: 0 auto;
    position: relative;
    z-index: 0;
    background-color: ${colors.support5};

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
  height: 928px;

  @media (max-width: 600px) {
    padding: 0;
    height: max-content;
    padding-bottom: 100px;
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
  position: relative;

  &::after {
    content: "";
    display: block;
    background: url("assets/imgs/Bar1.svg");
    background-size: contain;
    background-repeat: no-repeat;
    width: 1000px;
    height: 233px;
    position: absolute;
    left: -51px;
    top: -50px;
  }

  &::before {
    content: "";
    display: block;
    background: url("assets/imgs/Bar2.svg");
    background-size: contain;
    background-repeat: no-repeat;
    width: 1000px;
    height: 233px;
    position: absolute;
    left: -51px;
    bottom: -200px;
  }
`;

export const Card1 = styled.img`
  position: absolute;
  width: 400px;
  left: 250px;
  top: -60px;
  z-index: 1;
`;

export const Card2 = styled.img`
  position: absolute;
  width: 400px;
  left: 500px;
  top: 50px;
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
    /* position: relative; */

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

    font-size: 48px;
    font-weight: 600;
    margin-bottom: 24px;

    span {
      width: 100%;
      display: block;
    }

    @media (max-width: 600px) {
      font-size: 34px;
      font-weight: 600;
      margin-bottom: 12px;
    }
  `}
`;

export const subTitle = styled.h3`
  color: #333;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 80px;

  @media (max-width: 600px) {
    font-size: 18px;

    margin-bottom: 32px;
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;

  & > img {
    cursor: pointer;
  }
`;

export const WrapperIcons = styled.div`
  display: flex;
  gap: 24px;

  :last-child {
    margin-top: -10px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Button = styled.button`
  display: flex;
  padding: 18px 40px;
  gap: 10px;
  border-radius: 4px;
  align-items: center;
  border: none;
  outline: none;
  background: linear-gradient(221deg, #eb3850 14.43%, #cb162e 85.28%);
  cursor: pointer;
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const SectionOpenAcount = styled.section`
  display: flex;
  background-color: #fff;
  padding: 120px 0;

  @media (max-width: 600px) {
    padding: 40px 0;
  }
`;

export const SectionOpenAcountLeftSide = styled.div`
  flex: 1;
  position: relative;

  img {
    display: block;
    margin: auto;
  }

  :nth-child(2) {
    position: absolute;
    top: 260px;
    right: 220px;

    padding: 25px;
    border-radius: 15px;
    background: #fff;
    box-shadow: 0px 8px 25px 0px rgba(229, 29, 55, 0.1);
  }
  :nth-child(3) {
    top: -20px;
    left: 230px;

    position: absolute;
    padding: 25px;
    border-radius: 15px;
    background: #fff;
    box-shadow: 0px 8px 25px 0px rgba(229, 29, 55, 0.1);
  }
  :nth-child(4) {
    bottom: 50px;
    left: 230px;

    position: absolute;
    padding: 25px;
    border-radius: 15px;
    background: #fff;
    box-shadow: 0px 8px 25px 0px rgba(229, 29, 55, 0.1);
  }
`;

export const SectionOpenAcountRightSide = styled.div`
  flex: 1;
`;
