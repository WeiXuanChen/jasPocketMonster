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

import React, { Component } from 'react';
import { connect } from 'react-redux';

// RestaurantListPage
class index extends Component {
  render() {
    return (
      <div>
        RestaurantListPage
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.name,
});

export default connect(mapStateToProps)(index);
