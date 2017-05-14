import React from 'react';
import { TabNavigator } from 'react-navigation';

import HomeView from './views/homeView';
import MyAccountView from './views/myAccountView';

import { tabBarOptions } from './styles';

const HomeTabs = TabNavigator({
  Home: { screen: HomeView },
  MyAccount: { screen: MyAccountView },
}, {
    tabBarOptions: tabBarOptions,
  });

export default HomeTabs;
