import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';
import PlatformLogo from './../../../../platformLogo';

const Platform = (props) => {
  return (
    <View style={styles.platform}>
      <PlatformLogo platform={props.platform} />
    </View>
  );
};

export default Platform;

