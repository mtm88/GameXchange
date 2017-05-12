import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Text, View, Image } from 'react-native';

import Button from './../../components/button';
import MyAccount from './../myAccount';

import styles from './styles';
import { headerStyle } from './../../config/styles';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Home',
    headerTintColor: headerStyle.headerTintColor,
    headerStyle: headerStyle.headerStyle,
    headerTitleStyle: headerStyle.headerTitleStyle,
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
      <Provider store={store}>
        <View style={styles.background}>
          <Text style={styles.welcomeText}>I would like to:</Text>
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
      </Provider>
    );
  }
}

