import React, { Component } from 'react';

import { Text, Image, View } from 'react-native';
import styles from './styles';
import { headerStyle } from './../../../../config/styles';

class MyAccountView extends Component {
  render() {
    return (
      <View style={styles.background}>
        <Text>Profile screen</Text>
      </View>
    )
  }
}

export default MyAccountView;