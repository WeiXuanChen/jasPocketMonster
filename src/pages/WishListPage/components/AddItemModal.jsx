/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../../../components/Button';

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
  width: 80%;
  height: fit-content;
  background: #fff;
  padding: 1vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
`;

const StyledInput = styled.input`
  height: 6vh;
  width: 100%;
  font-size: 3vh;
`;

const StyledText = styled.div`
  width: 100%;
  font-size: 3vh;
`;

const AddItemModal = ({ isOpen, onSave, onClose }) => {
  const [value, setValue] = useState();

  const handleClickSave = () => {
    setValue('');
    onSave(value);
  }

  const handleClickCancel = () => {
    setValue('');
    onClose();
  }

  return (
    <Container isOpen={isOpen}>
      <Modal>
        <StyledText>Item Name</StyledText>
        <StyledInput value={value} onChange={(e) => setValue(e.target.value)} />
        <Button style={{backgroundColor: '#2E8BC0', color: '#fff'}} onClick={() => handleClickSave()}>Save</Button>
        <Button style={{backgroundColor: '#DF362D', color: '#fff'}} onClick={() => handleClickCancel()}>Cancel</Button>
      </Modal>
    </Container>
  );
};

AddItemModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onSave: PropTypes.func,
  onClose: PropTypes.func,
};

AddItemModal.defaultProps = {
  onSave: () => {},
  onClose: () => {},
};

export default AddItemModal;
