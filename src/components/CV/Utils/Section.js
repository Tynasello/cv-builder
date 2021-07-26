import React, { useState } from "react";
import styled from "styled-components";

const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      <Header>{title}</Header>
      <Content>{children}</Content>
    </SectionContainer>
  );
};
export default Section;

const SectionContainer = styled.div``;
const Header = styled.h3`
  display: block;
  margin: 1rem;

  font-size: 1.4rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;
const Content = styled.div`
  margin: 1rem;
  font-size: 0.8rem;
`;
