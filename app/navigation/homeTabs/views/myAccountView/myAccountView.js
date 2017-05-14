import React, { Component } from 'react';

import { Text, Image, View } from 'react-native';
import styles from './styles';
import { headerStyle } from './../../../../config/styles';
import Button from './../../../../components/button';

class MyAccountView extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'My Account',
    headerTintColor: headerStyle.headerTintColor,
    headerStyle: headerStyle.headerStyle,
    headerTitleStyle: headerStyle.headerTitleStyle,
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./../../../../icons/account.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),

  };

  render() {
    return (
      <View style={styles.background}>
        <Text style={styles.welcomeText}>dupa</Text>
        <Button
          text={'Get rid of my game(s)'}
          containerStyles={styles.buttons}
          textStyles={styles.buttonText}
        />
        <Button
          text={'Browse offers'}
          containerStyles={styles.buttons}
          textStyles={styles.buttonText}
          onPress={() => navigate('GameList')}
        />
      </View>
    );
  }
}

export default MyAccountView;