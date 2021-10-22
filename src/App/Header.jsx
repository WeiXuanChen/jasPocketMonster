/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  width: 100%;
  top: 0px;
  background-color: #fff;
  height: 6vh;
  font-size: 100px;
  text-align: center;
`;

const Header = () => {
  return <Container>Home</Container>;
};

export default Header;
