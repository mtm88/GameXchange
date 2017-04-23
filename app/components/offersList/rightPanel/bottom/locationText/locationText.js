import React from 'react';
import { View } from 'react-native';
import Icon from './../../../../icon';
import AppText from './../../../../appText';
import styles from './styles';


const LocationText = (props) => {
  return (
    <View style={styles.locationText}>
      <AppText style={{ fontSize: 11 }}>12 miles</AppText>
    </View>
  );
};

export default LocationText;
