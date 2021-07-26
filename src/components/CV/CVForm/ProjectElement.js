import React, { useState } from "react";
import styled from "styled-components";
import Input from "../Utils/Input";
import TextInput from "../Utils/TextInput";
import Button from "../Utils/Button";
const ProjectElement = ({
  projectEl,
  handleProjectsChange,
  handleDeleteSection,
}) => {
  return (
    <ProjectContainer>
      <Input
        placeholder="Project Title"
        onChange={(e) => handleProjectsChange(e, projectEl.id)}
        name={"projectTitle"}
        value={projectEl.projectTitle}
      ></Input>
      <Input
        placeholder="Date"
        onChange={(e) => handleProjectsChange(e, projectEl.id)}
        name={"date"}
        value={projectEl.date}
      ></Input>
      <TextInput
        placeholder="Description"
        onChange={(e) => handleProjectsChange(e, projectEl.id)}
        name={"desc"}
        value={projectEl.desc}
      ></TextInput>
      <Button
        deleteBtn
        onClick={handleDeleteSection}
        el={projectEl}
        section="projects"
      >
        Remove
      </Button>
    </ProjectContainer>
  );
};
export default ProjectElement;

const ProjectContainer = styled.div``;
