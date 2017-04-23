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

Platform.propTypes = {
  platform: React.PropTypes.string,
};

Platform.defaultProps = {
  platform: 'No data',
};


export default Platform;

