import React, { useState } from "react";
import styled from "styled-components";
import Section from "../Utils/Section";
import EducationElement from "./EducationElement";
import Button from "../Utils/Button";

const Education = ({
  educationInfo,
  handleEducationChange,
  handleDeleteSection,
  addSection,
}) => {
  let educationElements = [];
  educationInfo.forEach((educationEl) => {
    educationElements.push(
      <EducationElement
        educationEl={educationEl}
        handleEducationChange={handleEducationChange}
        handleDeleteSection={handleDeleteSection}
        key={educationEl.id}
      ></EducationElement>
    );
  });
  return (
    <EducationContainer>
      <Section title="Education">
        {educationElements}
        <Button
          addBtn
          onClick={addSection}
          args={["education"]}
          section="education"
        >
          Add
        </Button>
      </Section>
    </EducationContainer>
  );
};
export default Education;

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 1rem;

  color: ${({ theme }) => theme.colors.gunmetal};
`;
