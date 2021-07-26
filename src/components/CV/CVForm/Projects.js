import React, { useState } from "react";
import styled from "styled-components";
import Section from "../Utils/Section";
import ProjectElement from "./ProjectElement";
import Button from "../Utils/Button";

const Projects = ({
  projectsInfo,
  handleProjectsChange,
  handleDeleteSection,
  addSection,
}) => {
  let projectElements = [];
  projectsInfo.forEach((projectEl) => {
    projectElements.push(
      <ProjectElement
        projectEl={projectEl}
        handleProjectsChange={handleProjectsChange}
        handleDeleteSection={handleDeleteSection}
        key={projectEl.id}
      ></ProjectElement>
    );
  });
  return (
    <ProjectContainer>
      <Section title="Project">
        {projectElements}
        <Button
          addBtn
          onClick={addSection}
          args={["projects"]}
          section="projects"
        >
          Add
        </Button>
      </Section>
    </ProjectContainer>
  );
};
export default Projects;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 1rem;

  color: ${({ theme }) => theme.colors.gunmetal};
`;
