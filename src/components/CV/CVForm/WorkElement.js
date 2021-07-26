import React, { useState } from "react";
import styled from "styled-components";
import Input from "../Utils/Input";
import TextInput from "../Utils/TextInput";
import Button from "../Utils/Button";

const WorkElement = ({ workEl, handleWorkChange, handleDeleteSection }) => {
  return (
    <WorkContainer>
      <Input
        placeholder="Company / Position"
        onChange={(e) => handleWorkChange(e, workEl.id)}
        name={"position"}
        value={workEl.position}
      ></Input>
      <Input
        placeholder="Date"
        onChange={(e) => handleWorkChange(e, workEl.id)}
        name={"date"}
        value={workEl.date}
      ></Input>
      <TextInput
        placeholder="Description"
        onChange={(e) => handleWorkChange(e, workEl.id)}
        name={"desc"}
        value={workEl.desc}
      ></TextInput>
      <Button
        deleteBtn
        onClick={handleDeleteSection}
        el={workEl}
        section="work"
      >
        Remove
      </Button>
    </WorkContainer>
  );
};
export default WorkElement;

const WorkContainer = styled.div``;
