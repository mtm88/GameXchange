import React from 'react';
import { TabNavigator } from 'react-navigation';

import Home from './../../layouts/home';
import Profile from './../../layouts/profile';

import { tabBarOptions } from './styles';

const homeTabs = TabNavigator({
  Home: { screen: Home },
  Profile: { screen: Profile },
}, {
    tabBarOptions: tabBarOptions,
  });

export default homeTabs;
