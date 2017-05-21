'use strict'

// React
import React, { Component } from 'react';
import styles from './myAccountView/styles';

import { Image } from 'react-native';

// Navigation
import { addNavigationHelpers } from 'react-navigation';
import HomeTabNavigator from '../navigationConfiguration';

// Redux
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    navigationState: state.myAccountTabNavigation,
  }
}

class MyAccountTabNavigation extends Component {
  static navigationOptions = {
    tabBarLabel: 'My Account',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./../../../icons/account.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  }

  render() {
    const { navigationState, dispatch } = this.props
    return (
      <HomeTabNavigator
        navigation={
          addNavigationHelpers({
            dispatch,
            state: navigationState
          })
        }
      />
    )
  }
}
export default connect(mapStateToProps)(MyAccountTabNavigation)