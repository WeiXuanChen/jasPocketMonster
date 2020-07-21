/* eslint-disable react/prefer-stateless-function */
/*
 * (C) Copyright 2020 Compal Electronics, Inc.
 *
 * This software is the property of Compal Electronics, Inc.
 * You have to accept the terms in the license file before use.
 *
 * File: Footer.js
 * Project: jaspocketmonster
 * File Created: 2020-02-12 03:09:31 pm
 * Author: JamieWX Chen (JamieWX_Chen@compal.com)
 *
 * Last Modified: 2020-02-12 05:19:09 pm
 * Modified By: JamieWX Chen (JamieWX_Chen@compal.com)
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import HelpIcon from '@material-ui/icons/Help';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    position: 'fixed',
    width: '100%',
    bottom: '0px',
    justifyContent: 'space-evenly',
    backgroundColor: '#6df5af',
    height: '7vh',
  },
  iconStyle: {
    fontSize: '5vh',
    color: '#ffa600',
  },
});

const Footer = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        window.location.href = `/${newValue}`;
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        value="restaurantList"
        icon={<RestaurantIcon className={classes.iconStyle} />}
      />
      <BottomNavigationAction
        value="randomMachine"
        icon={<HelpIcon className={classes.iconStyle} />}
      />
      <BottomNavigationAction
        value="viewpointList"
        icon={<LocationOnIcon className={classes.iconStyle} />}
      />
    </BottomNavigation>
  );
};

export default Footer;
