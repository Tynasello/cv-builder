import React, { useState } from "react";
import styled from "styled-components";
import { v4 } from "uuid";
import Section from "../Utils/Section";
import Subsection from "../Utils/Subsection";
import SkillElement from "../Utils/SkillElement";
import { FaLocationArrow } from "react-icons/fa";
import { DiWebplatform } from "react-icons/di";
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";

const Sidebar = (cv) => {
  cv = cv.cv;
  const educationEls = cv.education.map((el) => (
    <Subsection key={el.id} title={el.degree} subtitle={el.date}>
      {el.school}
    </Subsection>
  ));
  const skills = cv.personalInfo.skills.map((skill) => (
    <Subsection key={v4()}>
      <SkillElement cv={cv}>{skill}</SkillElement>
    </Subsection>
  ));
  return (
    <SidebarContainer
      style={{ backgroundColor: cv.sidebarColor, color: cv.sidebarFontColor }}
    >
      {/* Profile Image */}
      <ProfileImage
        src={cv.personalInfo.profileImg}
        alt="Default profile picture"
      ></ProfileImage>
      {/* Contact Section */}
      <Section title="Contact">
        <Subsection>
          <FaLocationArrow style={{ marginRight: ".5rem" }} />{" "}
          {cv.personalInfo.location}
        </Subsection>
        <Subsection>
          <AiFillPhone style={{ marginRight: ".5rem" }} />{" "}
          {cv.personalInfo.phone}
        </Subsection>
        <Subsection>
          <AiTwotoneMail style={{ marginRight: ".5rem" }} />{" "}
          {cv.personalInfo.eMail}
        </Subsection>
        <Subsection>
          <DiWebplatform style={{ marginRight: ".5rem" }} />{" "}
          {cv.personalInfo.website}
        </Subsection>
      </Section>
      {/* Education Section */}
      <Section title="Education">{educationEls}</Section>
      {/* Skills Section */}
      <Section title="Skills">{skills}</Section>
    </SidebarContainer>
  );
};
export default Sidebar;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 1056px;
  max-height: 1056px;

  color: ${({ theme }) => theme.colors.light};

  padding: 1rem;
`;
const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  align-self: center;
  margin: 1rem;
  border-radius: 50%;
`;
