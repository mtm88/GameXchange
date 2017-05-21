'use strict'
import { StackNavigator } from 'react-navigation'

import HomeTabsNavigation from './../homeTabs/views/HomeTabsNavigation';
import GameListNavigation from './views/gameList/stackNavigation';
import OfferDetails from './../../layouts/offerDetails';

const routeConfiguration = {
  Home: { screen: HomeTabsNavigation },
  GameList: { screen: GameListNavigation },
  OfferDetails: { screen: OfferDetails },
}
const stackNavOptions = {
  initialRouteName: 'Home',
  mode: 'card',
  headerMode: 'float',
}
const StackNavConfig = StackNavigator(routeConfiguration, stackNavOptions);
export default StackNavConfig;