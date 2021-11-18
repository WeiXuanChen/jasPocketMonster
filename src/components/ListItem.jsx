import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CloseO } from '@styled-icons/evil';

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1vh;
  min-height: 13vh;
  border-radius: 10px 10px 30px 30px;
  font-size: 3vh;
  font-weight: 500;
  border: 1px solid #e5e5e5;
  color: #5a4040;

  > div {
    padding: 2vh 0;
  }
`;

const ColorBar = styled.div`
  width: 2vh;
  border-radius: 10px 0 0 30px;
  background-color: ${(props) => props.color};
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ListItem = ({ text, color, deleteItem, showDelete }) => {
  return (
    <Container>
      <ColorBar color={color} />
      <div>{text}</div>
      {showDelete && (
        <IconContainer onClick={() => deleteItem(text)}>
          <CloseO size={100} color={color} />
        </IconContainer>
      )}
    </Container>
  );
};

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  showDelete: PropTypes.bool,
  deleteItem: PropTypes.func,
};

ListItem.defaultProps = {
  showDelete: true,
  deleteItem: () => {},
};

export default ListItem;
