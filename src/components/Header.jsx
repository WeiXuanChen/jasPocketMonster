/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Navicon } from '@styled-icons/evil';

import Menu from './Menu';

const Container = styled.div`
  width: 100%;
  height: 6vh;
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  align-items: center;
  padding: 0 1vh;

  > div {
    text-align: center;
    font-size: 3.5vh;
    line-height: 6vh;
  }
`;

const StyledIcon = styled(Navicon)`
  cursor: pointer;
`;

const Header = ({ title }) => {
  const [isOpen, setOpenModal] = useState(false);
  return (
    <>
      <Container>
        <StyledIcon size="4vh" onClick={() => setOpenModal(!isOpen)}/>
        <div>{title}</div>
        <div />
      </Container>
      <Menu isOpen={isOpen} closeModal={() => setOpenModal(false) }/>
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
