import React, { Component } from 'react';
import { Text, View, ListView, StyleSheet } from 'react-native';
import ListRow from './../../components/offersList/listRow';
import Header from './../../components/offersList/header';
import { Back } from './../../components/navigation';

import styles from './styles';
import { headerStyle } from './../../config/styles';

const { fetchOffersList } = require('./../../services/couch');

const separator = StyleSheet.create({
  /*
   * Removed for brevity
   */
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});

export default class GameList extends Component {
  constructor({ navigation }) {
    super();
    this.navigation = navigation;
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      test: 0,
    }
  };

  static navigationOptions = ({ navigation }) => ({
    title: 'Offers',
    headerTintColor: headerStyle.headerTintColor,
    headerStyle: headerStyle.headerStyle,
    headerTitleStyle: headerStyle.headerTitleStyle,
    headerLeft: Back(navigation),
  });

  componentWillMount() {
    this.dataSet = fetchOffersList();
    this.setState({
      dataSource: this.ds.cloneWithRows(this.dataSet),
    });
  }

  updateState = (filteredResults) => {
    this.setState((prevState) => ({
      dataSource: this.ds.cloneWithRows(filteredResults),
    }));
  }
  render() {
    return (
      <View style={styles.background}>
        <Header updateState={this.updateState} dataSet={this.dataSet} />
        <View style={{ flex: 15 }}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(data) => (
              <ListRow
                {...data}
                navigation={this.navigation}
              />
            )}
            renderSeparator={(sectionId, rowId) => (
              <View key={rowId} style={separator.separator} />
            )
            }
          />
        </View>
      </View >
    )
  }

  _cloneDataSet(dataSet) {
    const clonedDataSet = [];

    for (let i = 0; i < 20; i += 1) {
      clonedDataSet.push(dataSet[0]);
      clonedDataSet.push(dataSet[1]);
      clonedDataSet.push(dataSet[2]);
    };
    return clonedDataSet;
  }

}

