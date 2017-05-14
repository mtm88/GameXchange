'use strict';

import React, { Component } from 'react';

import { addNavigationHelpers } from 'react-navigation';
import HomeTabs from './../navigationConfiguration';
import { headerStyle } from './../../../config/styles';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    navigationState: state.homeTabs,
  }
}

class HomeTabsNavigation extends Component {
  render() {
    const { navigationState, dispatch } = this.props;
    return (
      <HomeTabs
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

export default connect(mapStateToProps)(HomeTabsNavigation);