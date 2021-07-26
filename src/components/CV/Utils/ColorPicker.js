import React, { useState } from "react";
import styled from "styled-components";
import { TwitterPicker } from "react-color";

const ColorPicker = ({ cv, handelColorChange, type }) => {
  const [color, setColor] = useState("");

  return (
    <ColorPickerContainer>
      <TwitterPicker
        color={color}
        onChangeComplete={(color) => {
          setColor(color.hex);
          handelColorChange(color.hex, type);
        }}
      />
    </ColorPickerContainer>
  );
};

export default ColorPicker;

const ColorPickerContainer = styled.div``;
