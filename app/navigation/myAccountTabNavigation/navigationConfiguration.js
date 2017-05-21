'use strict'

import { StackNavigator } from 'react-navigation'

// Screens
import MyAccountView from './views/myAccountView'

const routeConfiguration = {
  MyAccountView: { screen: MyAccountView },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'MyAccountView'
}

const MyAccountTabNavigator = StackNavigator(routeConfiguration, stackNavigatorConfiguration);

export default MyAccountTabNavigator;