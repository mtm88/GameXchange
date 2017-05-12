'use strict'
import { StackNavigator } from 'react-navigation'
// Tab-Navigators
import TabOneNavigation from '../tabOne/views/TabOneNavigation'
import homeTabs from './../home';
import GameList from './../../layouts/gameList';
import OfferDetails from './../../layouts/offerDetails';

const routeConfiguration = {
  Home: { screen: homeTabs },
  GameList: { screen: GameList },
  OfferDetails: { screen: OfferDetails },
}
const tabBarConfiguration = {
  tabBarOptions: {
    mode: 'card',
    headerMode: 'float',
  }
}
export const StackNavConfig = StackNavigator(routeConfiguration, tabBarConfiguration);