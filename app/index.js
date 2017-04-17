import React from 'react';

import { TabNavigator } from 'react-navigation';
import { defaultStyles } from './config/styles'

import Home from './layouts/home';
import Profile from './layouts/profile';

const App = TabNavigator({
  Home: { screen: Home },
  Profile: { screen: Profile },
}, {
    tabBarOptions: defaultStyles.tabBarOptions,
  });

export default App;
