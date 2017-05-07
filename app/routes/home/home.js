import React from 'react';
import { TabNavigator } from 'react-navigation';

import Home from './../../layouts/home';
import MyAccount from './../../layouts/myAccount';
import logIn from './../../layouts/logIn';

import { tabBarOptions } from './styles';

const homeTabs = TabNavigator({
  Home: { screen: Home },
  myAccount: (() => {
    debugger;
    if (global.loggedIn) {
      return {
        screen: MyAccount
      }
    }
    return {
      screen: logIn,
    }
  })(),
}, {
    tabBarOptions: tabBarOptions,
  });

export default homeTabs;
