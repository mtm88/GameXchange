'use strict'
import { StackNavigator } from 'react-navigation'

import HomeTabsNavigation from './../homeTabs/views/HomeTabsNavigation';
import GameList from './../../layouts/gameList';
import OfferDetails from './../../layouts/offerDetails';

const routeConfiguration = {
  Home: { screen: HomeTabsNavigation },
  GameList: { screen: GameList },
  OfferDetails: { screen: OfferDetails },
}
const stackNavOptions = {
  initialRouteName: 'Home',
  mode: 'card',
  headerMode: 'float',
}
export const StackNavConfig = StackNavigator(routeConfiguration, stackNavOptions);