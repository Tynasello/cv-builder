import React, { useState } from "react";
import styled from "styled-components";
import Section from "../Utils/Section";
import WorkElement from "./WorkElement";
import Button from "../Utils/Button";

const Work = ({
  workInfo,
  handleWorkChange,
  handleDeleteSection,
  addSection,
}) => {
  let workElements = [];
  workInfo.forEach((workEl) => {
    workElements.push(
      <WorkElement
        workEl={workEl}
        handleWorkChange={handleWorkChange}
        handleDeleteSection={handleDeleteSection}
        key={workEl.id}
      ></WorkElement>
    );
  });
  return (
    <WorkContainer>
      <Section title="Work">
        {workElements}
        <Button addBtn onClick={addSection} args={["work"]} section="work">
          Add
        </Button>
      </Section>
    </WorkContainer>
  );
};
export default Work;

const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 1rem;

  color: ${({ theme }) => theme.colors.gunmetal};
`;
