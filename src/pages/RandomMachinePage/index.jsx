/*
 * (C) Copyright 2020 Compal Electronics, Inc.
 *
 * This software is the property of Compal Electronics, Inc.
 * You have to accept the terms in the license file before use.
 *
 * File: index.js
 * Project: jaspocketmonster
 * File Created: 2020-02-12 03:29:20 pm
 * Author: JamieWX Chen (JamieWX_Chen@compal.com)
 *
 * Last Modified: 2020-03-12 02:19:43 pm
 * Modified By: JamieWX Chen (JamieWX_Chen@compal.com)
 */

import React from 'react';
import RandomMachine from './components/RandomMachine';

// RandomMachinePage
const RandomMachinePage = () => {
  console.log('[RandomMachinePage]');
  return (
    <>
      <div>RandomMachinePage</div>
      <RandomMachine />
    </>
  );
};

/* <div className="randomMachine__coneArea">
  <div className="randomMachine__cone"></div>
  <div className="randomMachine__center"></div>
</div> */

export default RandomMachinePage;
