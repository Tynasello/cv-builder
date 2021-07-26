import React, { useState, useRef } from "react";
import styled from "styled-components";
import CVForm from "./CV/CVForm/CVForm";
import CVTemplate from "./CV/CVTemplate/CVTemplate";
import emptyCV from "../utils/emptyCV";
import exampleCV from "../utils/exampleCv";
//
import { useReactToPrint } from "react-to-print";
//
const Body = () => {
  const [cv, setCv] = useState(exampleCV);

  //

  function handlePersonalChange(e) {
    let { name, value } = e.target;
    if (name == "skills") {
      value = value.split(",");
    }
    setCv((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }));
  }

  //

  function handleEducationChange(e, id) {
    const { name, value } = e.target;

    const newEducation = cv.education.map((educationEl) => {
      if (educationEl.id == id) {
        return { ...educationEl, [name]: value };
      }
      return educationEl;
    });
    setCv((prevState) => ({
      ...prevState,
      education: [...newEducation],
    }));
  }

  //

  function handleWorkChange(e, id) {
    const { name, value } = e.target;

    const newWork = cv.work.map((workEl) => {
      if (workEl.id == id) {
        return { ...workEl, [name]: value };
      }
      return workEl;
    });
    setCv((prevState) => ({
      ...prevState,
      work: [...newWork],
    }));
  }

  //

  function handleProjectsChange(e, id) {
    const { name, value } = e.target;

    const newProject = cv.projects.map((projectEl) => {
      if (projectEl.id == id) {
        return { ...projectEl, [name]: value };
      }
      return projectEl;
    });
    setCv((prevState) => ({
      ...prevState,
      projects: [...newProject],
    }));
  }

  function handleDeleteSection(changedEl, section, switchTo) {
    const newSection = [];
    cv[section].forEach((sectionEl) => {
      if (sectionEl == changedEl) {
        return;
      }
      newSection.push(sectionEl);
    });
    setCv((prevState) => ({
      ...prevState,
      [section]: [...newSection],
    }));
  }
  function handleAddSection(changedEl, section, switchTo) {
    const newSection = cv[section];
    newSection.push(emptyCV[section][0]);
    setCv((prevState) => ({
      ...prevState,
      [section]: [...newSection],
    }));
  }
  function switchFormStyle(changedEl, section, switchTo) {
    if (switchTo == "emptyCV") {
      setCv(() => emptyCV);
    } else {
      setCv(() => exampleCV);
    }
  }
  function handelColorChange(color, type) {
    setCv((prevState) => ({
      ...prevState,
      [type]: color,
    }));
  }

  const ref = useRef();

  const exportPDF = useReactToPrint({ content: () => ref.current });

  function handleFileInput(e) {
    const profileImg = e.target.files[0];
    if (!profileImg) return;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setCv((prevState) => ({
        ...prevState,
        personalInfo: {
          ...prevState.personalInfo,
          profileImg: fileReader.result,
        },
      }));
    };
    fileReader.readAsDataURL(profileImg);
  }

  return (
    <BodyContainer>
      <CVForm
        cv={cv}
        handlePersonalChange={handlePersonalChange}
        handleEducationChange={handleEducationChange}
        handleWorkChange={handleWorkChange}
        handleProjectsChange={handleProjectsChange}
        handleDeleteSection={handleDeleteSection}
        handleAddSection={handleAddSection}
        switchFormStyle={switchFormStyle}
        handelColorChange={handelColorChange}
        exportPDF={exportPDF}
        handleFileInput={handleFileInput}
      ></CVForm>
      <CVTemplate cv={cv} ref={ref}></CVTemplate>
    </BodyContainer>
  );
};
export default Body;

const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lightGray};
  min-width: 770px;
  & > * {
    width: 750px;
    margin: 3rem 1.5rem;
  }
  @media screen and (max-width: 1500px) {
    flex-direction: column;
    align-items: center;
  }
`;
