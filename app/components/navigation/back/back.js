import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import AppText from './../../appText';
import Icon from './../../icon';
import styles from './styles';

const Back = (navigation) => {
  const { goBack } = navigation;
  return (
    <TouchableHighlight onPress={() => goBack()}>
      <View style={styles.container}>
        <Icon icon='nav_back' style={styles.icon} />
        {/*<AppText onPress={() => goBack()} style={styles.text}>Back</AppText>*/}
      </View>
    </TouchableHighlight>
  );
};

export default Back;