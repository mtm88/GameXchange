import React from 'react';
import { TabNavigator } from 'react-navigation';

import Home from './../../layouts/home';
import MyAccount from './../../layouts/myAccount';

import { tabBarOptions } from './styles';

const homeTabs = TabNavigator({
  Home: { screen: Home },
  MyAccount: { screen: MyAccount },
}, {
    tabBarOptions: tabBarOptions,
  });

export default homeTabs;
