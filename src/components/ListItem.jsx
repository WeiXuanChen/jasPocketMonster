import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 1vh;
  height: 13vh;
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
  background-color: ${props => props.color};
`;

const ListItem = ({ text, color }) => {
  return (
    <Container>
      <ColorBar color={color} />
      <div>{text}</div>
    </Container>
  );
};

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default ListItem;
