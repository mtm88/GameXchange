'use strict'

import { StackNavigator } from 'react-navigation'

// Screens
import HomeView from './views/homeView'
import List from './views/listView'
import OfferDetails from './views/offerDetailsView'

const routeConfiguration = {
  HomeView: { screen: HomeView },
  ListView: { screen: List },
  OfferDetails: { screen: OfferDetails },
}

const stackNavigatorConfiguration = {
  initialRouteName: 'HomeView',
  mode: 'card',
  headerMode: 'float',
}

const HomeTabNavigator = StackNavigator(routeConfiguration, stackNavigatorConfiguration);

export default HomeTabNavigator;