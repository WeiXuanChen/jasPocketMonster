/* eslint-disable react/prefer-stateless-function */
/*
 * (C) Copyright 2020 Compal Electronics, Inc.
 *
 * This software is the property of Compal Electronics, Inc.
 * You have to accept the terms in the license file before use.
 *
 * File: index.js
 * Project: jaspocketmonster
 * File Created: 2020-02-12 03:47:54 pm
 * Author: JamieWX Chen (JamieWX_Chen@compal.com)
 *
 * Last Modified: 2020-02-19 11:34:46 am
 * Modified By: JamieWX Chen (JamieWX_Chen@compal.com)
 */

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { ReactTinyLink } from 'react-tiny-link';
import { Input, Button } from '@material-ui/core';
import { useAddRestList } from '../../actions/restaurant';

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

const list = [
  // 'https://www.gogoro.com/',
  // 'https://www.gogoro.com/tw/smartscooter/s-performance/s1/',
  // 'https://www.gogoro.com/tw/smartscooter/s-performance/s2/',
  // 'https://www.gogoro.com/tw/smartscooter/viva/',
];

const RestaurantListPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [status, result, api] = useAddRestList();
  const [tempUrl, setTempUrl] = useState('');
  const [tempCard, setTempCard] = useState(null);
  useEffect(() => {
    api();
  });
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
          onClick={() => {
            console.log(tempUrl);
            setTempCard(() => (
              <ReactTinyLink
                cardSize="large"
                showGraphic
                maxLine={2}
                minLine={1}
                width="500"
                url={tempUrl}
                key={tempUrl}
              />
            ));
            setTempUrl('');
          }}
        >
          Add
        </StyledButton>
      </SearchArea>
      {list.map((item) => {
        return (
          <ReactTinyLink
            cardSize="large"
            showGraphic
            maxLine={2}
            minLine={1}
            width="500"
            url={item}
            key={item}
          />
        );
      })}
      {tempCard}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  name: state.name,
});

export default connect(mapStateToProps)(RestaurantListPage);
