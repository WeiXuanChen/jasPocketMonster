/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import EventList from '../pages/EventListPage';

const Content = () => {
  return (
    <div>
      <Switch>
        <Route path="/eventList">
          <EventList />
        </Route>
        <Route path="/">
          <div />
        </Route>
      </Switch>
    </div>
  );
};

export default Content;
