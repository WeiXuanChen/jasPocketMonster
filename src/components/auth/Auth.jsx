import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Lock, User } from '@styled-icons/evil';

import Button from '../../components/Button';
import bgImage from '../../assets/images/bgImage.jpg';
import logo from '../../assets/images/logo.png';

const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100vw;
  background-color: white;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

const StyledImg = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  filter: opacity(70%);
  mask-image: linear-gradient(rgb(38 38 38 / 40%), #ffffff);
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const StyledLogo = styled.img`
  height: 500px;
  width: fit-content;
`;

const Field = styled.div`
  display: flex;
  height: 6vh;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 16px;
  width: 70%;
  margin-bottom: 40px;
`;

const StyledInput = styled.input`
  height: 80%;
  width: 60%;
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid #000;
  font-size: 3vh;
`;



const Auth = ({ isOpen, handleClick }) => {
  return (
    <Container isOpen={isOpen}>
      <StyledImg src={bgImage} alt="bgImage" />
      <Form>
        <StyledLogo src={logo} alt="Logo" />
        <Field>
          <User size={100} color="#323237" />
          <StyledInput />
        </Field>
        <Field>
          <Lock size={100} color="#323237" />
          <StyledInput type="password" />
        </Field>
        <Button onClick={() => handleClick()}>Sign In</Button>
      </Form>
    </Container>
  );
};

Auth.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClick: PropTypes.func,
};

Auth.defaultProps = {
  handleClick: () => {},
};

export default Auth;
