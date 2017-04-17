import React from 'react';

import { Text, Image } from 'react-native';
import styles from './styles';
class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'My Account',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./../../icons/account.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),

  };

  render() {
    return <Text>Profile screen</Text>;
  }
}

export default Profile;