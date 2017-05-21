'use strict';

import React, { Component } from 'react';

import { addNavigationHelpers } from 'react-navigation';
import { HomeNavigator } from './../navigationConfiguration';

import { connect } from 'react-redux';

const mapStateToProps = (props) => {
  return {
    navigationState: state.homeNavigation,
  }
}

class HomeNavigation extends Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./../../../../../icons/home.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  render() {
    const { nNavigationState, dispatch } = this.props;
    return (
      <HomeNavigator
        navigation={
          addNavigationHelpers({
            dispatch,
            state: navigationState,
          })
        }
      />
    );
  }
}

export default connect(mapStateToProps)(HomeNavigation);