import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  height: 5vh;
  width: 40vw;
  margin-top: 2vh;
  font-size: 2.5vh;
  border-radius: 30px;
  font-family: system-ui;
  background-color: #d1a11cdb;
  z-index: 3;
  border: 0px;
  color: #eaefe9e8;

  :hover {
    background-color: #ad8518db;
  }
`;

const Button = ({children, ...props}) => {
    return <StyledButton {...props}>{children}</StyledButton>
} 

export default Button;