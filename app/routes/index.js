import React from 'react';

import { StackNavigator } from 'react-navigation';

import homeTabs from './home';
import GameList from './../layouts/gameList';


const Routes = StackNavigator({
  Home: { screen: homeTabs },
  GameList: { screen: GameList },
});

export default Routes;
