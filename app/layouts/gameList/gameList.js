import React from 'react';

import { Text, View } from 'react-native';
import styles from './styles';
import { header } from './../../config/styles';

export default class GameList extends React.Component {
  constructor(props) {
    super(props);
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
        <Text>Game List</Text>
      </View>
    )
  }
}
