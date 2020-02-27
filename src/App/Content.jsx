/* eslint-disable react/prefer-stateless-function */
/*
 * (C) Copyright 2020 Compal Electronics, Inc.
 *
 * This software is the property of Compal Electronics, Inc.
 * You have to accept the terms in the license file before use.
 *
 * File: Content.js
 * Project: jaspocketmonster
 * File Created: 2020-02-12 03:18:30 pm
 * Author: JamieWX Chen (JamieWX_Chen@compal.com)
 *
 * Last Modified: 2020-02-19 11:27:22 am
 * Modified By: JamieWX Chen (JamieWX_Chen@compal.com)
 */

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import RestaurantList from '../pages/RestaurantListPage';
import RandomMachine from '../pages/RandomMachinePage';
import ViewpointList from '../pages/ViewpointListPage';

class Content extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/restaurantList"><RestaurantList /></Route>
          <Route path="/randomMachine"><RandomMachine /></Route>
          <Route path="/viewpointList"><ViewpointList /></Route>
          <Route path="/"><div /></Route>
        </Switch>
      </div>
    );
  }
}

export default Content;
