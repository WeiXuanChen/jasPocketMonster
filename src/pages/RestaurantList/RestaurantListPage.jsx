/* eslint-disable react/prefer-stateless-function */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactTinyLink } from 'react-tiny-link';
import { Input, Button } from '@material-ui/core';
import { useAddRestList, useGetRestList } from '../../actions/restaurant';

const SearchArea = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
`;

const StyledInput = styled(Input)`
  height: 4vh;
  font-size: 2vh !important;
  border: 1px solid gray;
  padding: 6px 20px 7px;
`;

const StyledButton = styled(Button)`
  height: 4vh;
  font-size: 1.5vh !important;
`;

const Container = styled.div`
  display: grid;
  grid-gap: 4vw;
  width: 94%;
  margin: 2vh auto 8vh;
  justify-content: center;
  font-size: 30px;
  > .react_tinylink_card {
    height: 30vh;
    width: 90vw;
    > .react_tinylink_card_content_wrapper {
      > .react_tinylink_card_content_header {
        font-size: 2.5vh;
      }
      > .react_tinylink_card_content {
        display: none;
      }
      > .react_tinylink_footer {
        display: none;
      }
    }
  }
`;

const RestaurantListPage = () => {
  const [addStatus, , addRest] = useAddRestList();
  const [, getResult, getRestList] = useGetRestList();
  const [tempUrl, setTempUrl] = useState('');

  useEffect(() => {
    getRestList();
  }, []);

  useEffect(() => {
    if (addStatus.isSuccess) getRestList();
  }, [addStatus.isSuccess]);

  const handleAddRest = () => {
    if (tempUrl.substring(0, 4) === 'http' && tempUrl.indexOf('://' !== -1)) {
      addRest({ shopName: tempUrl });
    }
    setTempUrl('');
  };

  return (
    <Container>
      <SearchArea>
        <StyledInput
          value={tempUrl}
          onChange={(e) => {
            console.log(e.target.value);
            setTempUrl(e.target.value);
          }}
        />
        <StyledButton
          variant="contained"
          color="primary"
          style={{
            backgroundColor: '#b1d1ed',
          }}
          onClick={() => {
            handleAddRest();
          }}
        >
          Add
        </StyledButton>
      </SearchArea>
      {getResult
        ? getResult.map((item) => {
            return (
              <ReactTinyLink
                cardSize="large"
                showGraphic
                maxLine={2}
                minLine={1}
                width="500"
                url={item.shopName || ''}
                // eslint-disable-next-line no-underscore-dangle
                key={item._id}
              />
            );
          })
        : null}
      {/* {tempCard} */}
    </Container>
  );
};

export default RestaurantListPage;
