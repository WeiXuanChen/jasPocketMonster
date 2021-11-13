/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WishList from '../pages/WishListPage';
import BuyList from '../pages/BuyListPage';

const Content = () => {
  return (
    <div>
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
