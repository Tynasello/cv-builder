import React, { useState } from "react";
import styled from "styled-components";
import Section from "../Utils/Section";
import Input from "../Utils/Input";
import TextInput from "../Utils/TextInput";
import FileInput from "../Utils/FileInput";
const PersonalInfo = ({
  personalInfo,
  handlePersonalChange,
  handleFileInput,
}) => {
  return (
    <PersonalInfoContainer>
      <Section title="Personal Information">
        <Input
          placeholder="First Name"
          onChange={(e) => handlePersonalChange(e)}
          name={"first"}
          value={personalInfo.first}
        ></Input>
        <Input
          placeholder="Last Name"
          onChange={(e) => handlePersonalChange(e)}
          name={"last"}
          value={personalInfo.last}
        ></Input>
        <h4>Upload profile image</h4>
        <FileInput
          onChange={(e) => handleFileInput(e)}
          name="profileImg"
          label="Upload profile image"
          value={personalInfo.photo}
        />
        <TextInput
          placeholder="Description"
          onChange={(e) => handlePersonalChange(e)}
          name={"desc"}
          value={personalInfo.desc}
        ></TextInput>
        <Input
          placeholder="Location"
          onChange={(e) => handlePersonalChange(e)}
          name={"location"}
          value={personalInfo.location}
        ></Input>
        <Input
          placeholder="Phone Number"
          onChange={(e) => handlePersonalChange(e)}
          name={"phone"}
          value={personalInfo.phone}
        ></Input>
        <Input
          placeholder="E-Mail"
          onChange={(e) => handlePersonalChange(e)}
          name={"eMail"}
          value={personalInfo.eMail}
        ></Input>
        <Input
          placeholder="Website"
          onChange={(e) => handlePersonalChange(e)}
          name={"website"}
          value={personalInfo.website}
        ></Input>
        <Input
          placeholder="Skills (seperate each skill by a comma)"
          onChange={(e) => handlePersonalChange(e)}
          name={"skills"}
          value={personalInfo.skills}
        ></Input>
      </Section>
    </PersonalInfoContainer>
  );
};
export default PersonalInfo;

const PersonalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem;

  color: ${({ theme }) => theme.colors.gunmetal};
`;
