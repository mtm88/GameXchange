import React from 'react';
import { View } from 'react-native';
import Icon from './../../../../icon';
import styles from './styles';

const LocationIcon = (props) => {
  return (
    <View style={styles.rightPanelBottomLeftLocation}>
      <Icon icon='location_green' style={{ marginRight: 3 }} />
    </View>
    // <View style={styles.rightPanelBottomLeftLocationText}>
    //   <Text style={styles.smallText}>12 miles</Text>
    // </View>*/}
  );
};

export default LocationIcon;
