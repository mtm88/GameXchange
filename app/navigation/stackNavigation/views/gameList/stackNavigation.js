'use strict'
import React from 'react'
import { addNavigationHelpers } from 'react-navigation'
import GameListNavigation from './navigationConfiguration'

import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    navigationState: state.gameList,
  }
}

class GameList extends React.Component {
  render() {
    const { dispatch, navigationState } = this.props
    return (
      <GameListNavigation
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

export default connect(mapStateToProps)(GameList)