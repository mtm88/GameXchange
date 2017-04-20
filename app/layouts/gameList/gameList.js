import React from 'react';
import { Text, View, ListView, StyleSheet } from 'react-native';
import styles from './styles';
import { header } from './../../config/styles';
import Row from './../../components/row';

export default class GameList extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(this._cloneDataSet()),
    };
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Offer Browser',
    headerTintColor: header.headerTintColor,
    headerStyle: header.headerStyle,
    headerTitleStyle: header.headerTitleStyle,
  });

  render() {
    return (
      <View style={styles.background}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(data) => <Row {...data} />}
        />
      </View>
    )
  }

  _cloneDataSet() {
    const clonedDataSet = [];

    for (let i = 0; i < 20; i += 1) {
      clonedDataSet.push(dataSet[0]);
      clonedDataSet.push(dataSet[1]);
    };
    return clonedDataSet;
  }

}



const dataSet = [
  {
    title: 'Fallout 4',
    image: 'fallout4',
    user: 'User 1',
  },
  {
    title: 'GTA V',
    image: 'gta5',
    user: 'User 2',
  },
]
