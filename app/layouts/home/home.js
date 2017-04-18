import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import Button from './../../components/button';
import Profile from './../profile';

import styles from './styles';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Home',
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

