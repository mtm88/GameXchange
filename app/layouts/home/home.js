import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import Button from './../../components/button';
import MyAccount from './../myAccount';

import styles from './styles';
import { header } from './../../config/styles';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Home',
    headerTintColor: header.headerTintColor,
    headerStyle: header.headerStyle,
    headerTitleStyle: header.headerTitleStyle,
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./../../icons/home.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.background}>
        <Text style={styles.welcomeText}>I would like to:</Text>
        <Button
          text={'Get rid of my game(s)'}
          containerStyles={styles.buttons}
          textStyles={styles.buttonText}
          onPress={() => this.props.navigation.navigate('GameList')}
        />
        <Button
          text={'Browse offers'}
          containerStyles={styles.buttons}
          textStyles={styles.buttonText}
        />
      </View>
    );
  }
}

