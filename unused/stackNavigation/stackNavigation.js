'use strict'
import React from 'react'
import { addNavigationHelpers } from 'react-navigation'
import StackNavConfig from './navigationConfiguration'

import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    navigationState: state.stackNav,
  }
}

class StackNavigation extends React.Component {
  render() {
    const { dispatch, navigationState } = this.props
    return (
      <StackNavConfig
        navigation={
          addNavigationHelpers({
            dispatch,
            state: navigationState,
          })
        }
      />
    )
  }
}

export default connect(mapStateToProps)(StackNavigation)