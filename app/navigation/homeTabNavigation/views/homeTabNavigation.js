'use strict'

// React
import React, { Component } from 'react';
import { Image } from 'react-native';
import styles from './homeView/styles';

// Navigation
import { addNavigationHelpers } from 'react-navigation';
import HomeTabNavigator from '../navigationConfiguration';

// Redux
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    navigationState: state.homeTabNavigation,
  }
}

class HomeTabNavigation extends Component {
  static navigationOptions = ({
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./../../../icons/home.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  })

  render() {
    const { navigationState, dispatch } = this.props;
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
export default connect(mapStateToProps)(HomeTabNavigation);