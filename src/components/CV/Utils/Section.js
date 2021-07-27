import React, { useState } from "react";
/*--------------------------------------------------------------*/
import styled, { css } from "styled-components";
/*--------------------------------------------------------------*/

const Section = ({ title, content, children }) => {
  /*--------------------------------------------------------------*/

  return (
    <SectionContainer>
      <Header>{title}</Header>
      <Content content={content}>{children}</Content>
    </SectionContainer>
  );
};

/*--------------------------------------------------------------*/
export default Section;
/*--------------------------------------------------------------*/

const SectionContainer = styled.div``;
const Header = styled.h3`
  display: block;
  margin: 0.5rem 1rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};

  font-family: ${({ theme }) => theme.colors.headerFont};
  text-transform: uppercase;
  font-size: 1.2rem;
`;
const Content = styled.div`
  margin: 0 1rem;
  font-size: 0.8rem;
  ${(props) =>
    props.content == "skills" &&
    css`
      display: flex;
      flex-wrap: wrap;
      & > * {
        padding: 0 0.3rem;
      }
    `}
`;
