import React from "react";
import styled from "styled-components";
import bgImg from "../assets/images/svg.png";

const Header = () => {
  return (
    <HeaderContainer
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      Create Your Own Resume
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 10rem 6rem 10rem;

  font-family: "Bangers", cursive;
  text-transform: uppercase;
  font-size: 4rem;

  color: #363537;
  background-color: ${({ theme }) => theme.colors.lightGray};

  background-position: "center";
  background-size: 100vw 17rem;
  background-repeat: "no-repeat";
`;

export default Header;
