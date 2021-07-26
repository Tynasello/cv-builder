import React, { useState, useEffect } from "react";
import styled from "styled-components";
function autoGrow(elements) {
  elements.forEach((el) => {
    el.style.height = "0.8rem";
    el.style.height = el.scrollHeight + "px";
  });
}

const TextInput = ({ placeholder, onChange, name, value, textInputId }) => {
  useEffect(() => {
    const elements = document.querySelectorAll(TextInputContainer);
    autoGrow(elements);
  });
  return (
    <TextInputContainer
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
      name={name}
      value={value}
    ></TextInputContainer>
  );
};
export default TextInput;

const TextInputContainer = styled.textarea`
  font-family: Robot, sans-serif;

  display: block;
  width: 100%;
  max-width: 100%;
  margin: 1rem 0;
  padding: 0.6rem 0.3rem;
  border-radius: 5px;
  border: 1px solid grey;
  height: auto;
`;
