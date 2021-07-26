import React, { useState } from "react";
import styled from "styled-components";

const Button = ({
  addBtn,
  deleteBtn,
  onClick,
  el,
  section,
  children,
  switchTo,
}) => {
  return (
    <ButtonContainer
      addBtn={addBtn}
      deleteBtn={deleteBtn}
      onClick={() => onClick(el, section, switchTo)}
    >
      {children}
    </ButtonContainer>
  );
};
export default Button;

const ButtonContainer = styled.button`
  display: block;
  width: 100%;
  margin: 1rem 0;
  padding: 0.6rem 0.3rem;
  border-radius: 5px;
  border: 1px solid grey;
  background-color: ${({ theme }) => theme.colors.gunmetal};
  color: ${({ theme }) => theme.colors.light};

  background-color: ${(props) =>
    props.addBtn ? ({ theme }) => theme.colors.green : ""};
  background-color: ${(props) =>
    props.deleteBtn ? ({ theme }) => theme.colors.red : ""};

  &:active {
    transform: scale(1.01);
  }
`;
