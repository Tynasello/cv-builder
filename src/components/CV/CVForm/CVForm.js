import React, { useState } from "react";
import styled from "styled-components";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Work from "./Work";
import Projects from "./Projects";
import Button from "../Utils/Button";
import Section from "../Utils/Section";
import ColorPicker from "../Utils/ColorPicker";
const CVForm = ({
  cv,
  handlePersonalChange,
  handleEducationChange,
  handleWorkChange,
  handleProjectsChange,
  handleDeleteSection,
  addSection,
  switchFormStyle,
  handelColorChange,
  exportPDF,
  handleFileInput,
}) => {
  return (
    <CVFormContainer>
      <PersonalInfo
        personalInfo={cv.personalInfo}
        handlePersonalChange={handlePersonalChange}
        handleFileInput={handleFileInput}
      ></PersonalInfo>
      <Education
        educationInfo={cv.education}
        handleEducationChange={handleEducationChange}
        handleDeleteSection={handleDeleteSection}
        addSection={addSection}
      ></Education>
      <Work
        workInfo={cv.work}
        handleWorkChange={handleWorkChange}
        handleDeleteSection={handleDeleteSection}
        addSection={addSection}
      ></Work>
      <Projects
        projectsInfo={cv.projects}
        handleProjectsChange={handleProjectsChange}
        handleDeleteSection={handleDeleteSection}
        addSection={addSection}
      ></Projects>
      <Section>
        <Button addBtn onClick={switchFormStyle} args={["emptyCV"]}>
          Display Empty CV
        </Button>
        <Button addBtn onClick={switchFormStyle} args={["exampleCV"]}>
          Display Example CV
        </Button>
        <Button addBtn onClick={exportPDF}>
          Export as PDF
        </Button>
      </Section>
      <Section title="Color Picker"></Section>
      <ColorPickerSection>
        <ColorPickerItem>
          <h3>Sidebar Color</h3>
          <br />
          <ColorPicker
            handelColorChange={handelColorChange}
            type="sidebarColor"
          ></ColorPicker>
        </ColorPickerItem>
        <ColorPickerItem>
          <h3>Font Color (Main)</h3>
          <br />
          <ColorPicker
            handelColorChange={handelColorChange}
            type="mainFontColor"
          ></ColorPicker>
        </ColorPickerItem>
        <ColorPickerItem>
          <h3>Font Color (Sidebar)</h3>
          <br />
          <ColorPicker
            cv={cv}
            handelColorChange={handelColorChange}
            type="sidebarFontColor"
          ></ColorPicker>
        </ColorPickerItem>
      </ColorPickerSection>
    </CVFormContainer>
  );
};
export default CVForm;

const CVFormContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  font-family: Roboto, sans-serif;
`;
const ColorPickerSection = styled.div`
  font-size: 0.8rem;
`;
const ColorPickerItem = styled.div`
  padding: 1rem 2rem;
`;
