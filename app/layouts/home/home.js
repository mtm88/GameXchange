import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import Button from './../../components/button';

class Home extends Component {
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
        <Button text={'Get rid of my game(s)'} containerStyles={styles.buttons} textStyles={styles.buttonText} />
        <Button text={'Browse offers'} containerStyles={styles.buttons} textStyles={styles.buttonText} />
      </View>
    );
  }
}

export default Home;