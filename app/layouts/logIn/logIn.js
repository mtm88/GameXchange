import React from 'react';

import { Text, Image, View } from 'react-native';
import { headerStyle } from './../../config/styles';

import FbLogin from './../../components/fbLogin';

import styles from './styles';
class LogIn extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Log In',
    headerTintColor: headerStyle.headerTintColor,
    headerStyle: headerStyle.headerStyle,
    headerTitleStyle: headerStyle.headerTitleStyle,
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
        <Text>Log In</Text>
        <FbLogin />
      </View>
    )
  }
}

export default LogIn;