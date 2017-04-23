import React from 'react';
import { Text, View, ListView, StyleSheet } from 'react-native';
import styles from './styles';
import { header } from './../../config/styles';
import ListRow from './../../components/offersList/listRow';

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
          renderRow={(data) => <ListRow {...data} />}
        />
      </View>
    )
  }

  _cloneDataSet() {
    const clonedDataSet = [];

    for (let i = 0; i < 20; i += 1) {
      clonedDataSet.push(dataSet[0]);
      clonedDataSet.push(dataSet[1]);
      clonedDataSet.push(dataSet[2]);
    };
    return clonedDataSet;
  }

}



const dataSet = [
  {
    title: 'Fallout 4',
    image: 'fallout4',
    user: 'User 1',
    exchangeFor: 'Diablo 3, Chronicles, Bloodbourne',
    platform: 'ps4',
  },
  {
    title: 'GTA V',
    image: 'gta5',
    user: 'User 2',
    exchangeFor: 'Diablo 3',
    platform: 'xbox',
  },
  {
    title: 'Middle-earth: Shadow of Mordor',
    image: 'shadowofmordor',
    user: 'ZdzisekKB',
    exchangeFor: 'World of Warcraft, Final Fantasy XXV',
    platform: 'ps4',
  },
]
