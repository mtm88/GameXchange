'use strict';

import { StackNavigator } from 'react-navigation';

import List from './views/list';

const routeConfiguration = {
  List: { screen: List },
};

const stackNavigatorConfiguration = {
  initialRouteName: 'List'
};

const GameListNavigation = StackNavigator(routeConfiguration, stackNavigatorConfiguration)
export default GameListNavigation;
