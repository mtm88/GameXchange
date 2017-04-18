import React from 'react';

import { Text, Image, View } from 'react-native';
import styles from './styles';
import { header } from './../../config/styles';

class MyAccount extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'My Account',
    headerTintColor: header.headerTintColor,
    headerStyle: header.headerStyle,
    headerTitleStyle: header.headerTitleStyle,
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./../../icons/account.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),

  };

  render() {
    return (
      <View style={styles.background}>
        <Text>Profile screen</Text>
      </View>
    )
  }
}

export default MyAccount;