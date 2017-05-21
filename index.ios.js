import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import store from './app/store';
import StackNavigation from './app/navigation/stackNavigation/stackNavigation';

// import PouchDB from 'pouchdb-react-native';

class GameXChange extends Component {
  render() {
    return (
      <Provider store={store}>
        <StackNavigation />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('gameXchange', () => GameXChange);
