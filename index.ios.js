import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import store from './app/store';
import TabBar from './app/navigation/tabBar/navigationConfiguration';

// import PouchDB from 'pouchdb-react-native';

class GameXChange extends Component {
  render() {
    return (
      <Provider store={store}>
        <TabBar />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('gameXchange', () => GameXChange);
