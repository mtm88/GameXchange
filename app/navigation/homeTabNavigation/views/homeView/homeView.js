import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import Button from './../../../../components/button';

import styles from './styles';
import { headerStyle } from './../../../../config/styles';

const mapStateToProps = (state) => {
  return {
    navigationState: state.tabOne
  }
}
export default class HomeView extends Component {
  static navigationOptions = {
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
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
    );
  }
}

