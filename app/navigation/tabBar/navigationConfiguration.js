import React from 'react';
import { TabNavigator } from 'react-navigation';

import HomeTabNavigation from './../homeTabNavigation/views/homeTabNavigation';
import MyAccountTabNavigation from './../myAccountTabNavigation/views/myAccountTabNavigation';

const tabBarOptions = {
  activeTintColor: '#e50606',
  inactiveTintColor: '#FFF',
  activeBackgroundColor: '#000',
  inactiveBackgroundColor: '#000',
  labelStyle: {
    fontSize: 9,
    fontWeight: 'bold',
    marginBottom: 5,
  },
};

const routeConfigs = {
  HomeTab: { screen: HomeTabNavigation },
  MyAccountTab: { screen: MyAccountTabNavigation },
};

const TabBar = TabNavigator(routeConfigs, tabBarOptions);

export default TabBar;
