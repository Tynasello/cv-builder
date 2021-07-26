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
  font-weight: 900;
  padding: 0.2rem 0;
  font-family: ${({ theme }) => theme.colors.bodyFont};
  font-style: oblique;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
`;
