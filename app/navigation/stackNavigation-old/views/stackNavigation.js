import React, { Component } from 'react';

import { addNavigationHelpers } from 'react-navigation';
import { StackNav } from './../navigationConfiguration';

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
      <StackNav navigation={
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