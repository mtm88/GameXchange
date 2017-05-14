import React from 'react';
import { TabNavigator } from 'react-navigation';

import HomeView from './views/homeView';
import MyAccountView from './views/myAccountView';

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
  TabHome: { screen: HomeView },
  MyAccount: { screen: MyAccountView },
};

const HomeTabs = TabNavigator(routeConfigs, tabBarOptions);

export default HomeTabs;
