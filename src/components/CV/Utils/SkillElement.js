import React, { useState } from "react";
import styled from "styled-components";

const SkillElement = ({ cv, children }) => {
  return (
    <SkillElementContainer
      style={{
        color: cv.sidebarFontColor,
        backgroundColor: cv.sidebarColor,
        borderColor: cv.sidebarFontColor,
      }}
    >
      {children}
    </SkillElementContainer>
  );
};
export default SkillElement;

const SkillElementContainer = styled.div`
  padding: 0.4rem 0.4rem;
  border-radius: 5px;
  border: 1px solid;
`;
