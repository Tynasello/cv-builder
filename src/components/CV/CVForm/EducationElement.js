import React, { useState } from "react";
import styled from "styled-components";
import Input from "../Utils/Input";
import TextInput from "../Utils/TextInput";
import Button from "../Utils/Button";
const EducationElement = ({
  educationEl,
  handleEducationChange,
  handleDeleteSection,
}) => {
  return (
    <ElementContainer>
      <Input
        placeholder="Degree"
        onChange={(e) => handleEducationChange(e, educationEl.id)}
        name={"degree"}
        value={educationEl.degree}
      ></Input>
      <Input
        placeholder="Date"
        onChange={(e) => handleEducationChange(e, educationEl.id)}
        name={"date"}
        value={educationEl.date}
      ></Input>
      <TextInput
        placeholder="School"
        onChange={(e) => handleEducationChange(e, educationEl.id)}
        name={"school"}
        value={educationEl.school}
      ></TextInput>
      <Button
        deleteBtn
        onClick={handleDeleteSection}
        el={educationEl}
        section="education"
      >
        Remove
      </Button>
    </ElementContainer>
  );
};
export default EducationElement;

const ElementContainer = styled.div``;
