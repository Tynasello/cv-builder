import React from "react";
import styled from "styled-components";

const Header = () => {
  return <HeaderContainer>Create Your Own Resume</HeaderContainer>;
};

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  font-family: "Roboto", sans-serif;
  font-size: 2.7rem;

  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.gunmetal};
`;

export default Header;
