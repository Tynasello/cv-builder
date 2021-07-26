import React, { useState } from "react";
import styled from "styled-components";

const Input = ({ onChange, name }) => {
  return (
    <InputContainer
      type="file"
      onChange={onChange}
      name={name}
      placeholder="ok"
      accept="image/*"
    />
  );
};
export default Input;

const InputContainer = styled.input`
  background-color: white;
  display: block;
  width: 100%;
  margin: 1rem 0;
  padding: 0.6rem 0.3rem;
  border-radius: 5px;
  border: 1px solid grey;
`;
