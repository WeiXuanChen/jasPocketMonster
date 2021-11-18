/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import listBgImage from '../assets/images/listBgImage.jpg';
import WishList from '../pages/WishListPage';
import BuyList from '../pages/BuyListPage';

const StyledImg = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  filter: opacity(70%);
  mask-image: linear-gradient(rgb(38 38 38 / 40%), #ffffff);
  z-index: -1;
`;

const Content = () => {
  return (
    <div>
      <StyledImg src={listBgImage} alt="bgImage" />
      <Switch>
        <Route path="/wishList">
          <WishList />
        </Route>
        <Route path="/buyList">
          <BuyList />
        </Route>
        <Route path="">
          <WishList />
        </Route>
      </Switch>
    </div>
  );
};

export default Content;
