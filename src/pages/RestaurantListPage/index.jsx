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

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { ReactTinyLink } from 'react-tiny-link';
import { useGetRestList } from '../../actions/restaurant';

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
  'https://www.gogoro.com/',
  'https://www.gogoro.com/tw/smartscooter/s-performance/s1/',
  'https://www.gogoro.com/tw/smartscooter/s-performance/s2/',
  'https://www.gogoro.com/tw/smartscooter/viva/',
];

const RestaurantListPage = () => {
  const [status, result, api] = useGetRestList();
  console.log('[status]: ', status);
  console.log('[result]: ', result);
  useEffect(() => {
    api();
  });
  return (
    <Container>
      {list.map((item) => {
        return (
          <ReactTinyLink
            cardSize="large"
            showGraphic
            maxLine={2}
            minLine={1}
            width="500"
            url={item}
          />
        );
      })}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  name: state.name,
});

export default connect(mapStateToProps)(RestaurantListPage);
