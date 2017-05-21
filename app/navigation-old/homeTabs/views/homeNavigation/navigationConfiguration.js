'use strict';

import { stackNavigator } from 'react-navigation';

import HomeNavigation from './views/homeNavigation';
// import GamelistScreen from './views/GamelistScreen';

const routeConfiguration = {
  HomeNavigation: { screen: HomeNavigation },
  // GamelistScreen: { screen: GamelistScreen },
};

const stackNavigatorConfiguration = {

};

export const HomeNavigator = stackNavigator(routeConfiguration, stackNavigatorConfiguration);

