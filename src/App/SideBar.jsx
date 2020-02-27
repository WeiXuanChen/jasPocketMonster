/* eslint-disable react/prefer-stateless-function */
/*
 * (C) Copyright 2020 Compal Electronics, Inc.
 *
 * This software is the property of Compal Electronics, Inc.
 * You have to accept the terms in the license file before use.
 *
 * File: SideBar.js
 * Project: jaspocketmonster
 * File Created: 2020-02-12 03:09:31 pm
 * Author: JamieWX Chen (JamieWX_Chen@compal.com)
 *
 * Last Modified: 2020-02-12 05:19:09 pm
 * Modified By: JamieWX Chen (JamieWX_Chen@compal.com)
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideBar extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/restaurantList">Restaurant List</Link>
            </li>
            <li>
              <Link to="/randomMachine">Random Machine</Link>
            </li>
            <li>
              <Link to="/viewpointList">Viewpoint List</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default SideBar;
