/*--------------------------------------------------------------*/

import React from "react";
import styled from "styled-components";

/*--------------------------------------------------------------*/

const Footer = () => {
  /*--------------------------------------------------------------*/

  return (
    <FooterContainer>
      <small> Copyright &copy; 2021, Ty Nasello. All Rights Reserved</small>
    </FooterContainer>
  );
};

/*--------------------------------------------------------------*/
export default Footer;
/*--------------------------------------------------------------*/

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;

  font-family: "Bangers";
  font-size: 1.3rem;

  color: #363537;
  background-color: #00d084;
`;
