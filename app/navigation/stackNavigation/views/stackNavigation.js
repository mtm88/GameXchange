import React, { Component } from 'react';

import { addNavigationHelpers } from 'react-navigation';
import { HomeTabs } from './../navigationConfiguration';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    navigationState: state.homeTabs,
  }
}

class StackNavigation extends Component {
  render() {
    const { dispatch, navigationState } = this.props;
    return (
      <HomeTabs navigation={
        addNavigationHelpers({
          dispatch,
          state: navigationState,
        })
      }
      />
    );
  }
}

export default connect(mapStateToProps)(StackNavigation);