/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';

const Container = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0px;
  height: 6vh;
  text-align: center;
`;

const ImgContainer = styled.div`
  height: 100%;
`;

const StyledImg = styled.img`
  height: 100%;
`;

const Footer = () => {
  return (
    <Container>
      <ImgContainer>
        <StyledImg src={logo} alt="Logo" />
      </ImgContainer>
    </Container>
  );
};

export default Footer;
