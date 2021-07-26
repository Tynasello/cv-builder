import React, { useState } from "react";
import styled from "styled-components";

const Subsection = ({ title, subtitle, children }) => {
  return (
    <SubsectionContainer>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Content>{children}</Content>
    </SubsectionContainer>
  );
};
export default Subsection;

const SubsectionContainer = styled.div`
  padding-bottom: 0.8rem;
`;
const Title = styled.h3`
  font-size: 0.9rem;
`;
const Subtitle = styled.h3`
  font-size: 0.8rem;
  padding: 0.1rem 0;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8erem;
  padding: 0.1rem 0;
`;
