import React from 'react';
import { View } from 'react-native';
import Icon from './../../../../icon';
import styles from './styles';

const LocationIcon = (props) => {
  return (
    <View style={styles.rightPanelBottomLeftLocation}>
      <Icon icon='location_green' style={{ marginRight: 3 }} />
    </View>
  );
};

export default LocationIcon;
