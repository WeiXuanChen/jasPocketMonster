/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './Button';

const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #0006;
  display: ${props => props.isOpen ? 'flex' : 'none' };
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  width: 50%;
  height: fit-content;
  background: #fff;
  padding: 3vh 1vh 4vh 1vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
`;

const StyledButton = styled(Button)`
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  margin-top: 3vh;
  height: 6vh;

  :hover {
    background-color: #e5e5e5;
  }
`;

const Menu = ({ isOpen, closeModal }) => {
  const history = useHistory();

  const handleClick = (path) => {
    history.push(path);
    closeModal();
  }

  return (
    <Container isOpen={isOpen}>
      <Modal>
        <StyledButton  onClick={() => handleClick("/wishList")}>Your Wish List</StyledButton>
        <StyledButton onClick={() => handleClick("/buyList")}>Buy List</StyledButton>
      </Modal>
    </Container>
  );
};

Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func,
};

Menu.defaultProps = {
  closeModal: () => {},
};

export default Menu;
