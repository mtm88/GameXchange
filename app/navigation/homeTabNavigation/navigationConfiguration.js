'use strict'

import { StackNavigator } from 'react-navigation'

// Screens
import HomeView from './views/homeView'

const routeConfiguration = {
  HomeView: { screen: HomeView },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'HomeView'
}

const HomeTabNavigator = StackNavigator(routeConfiguration, stackNavigatorConfiguration);

export default HomeTabNavigator;