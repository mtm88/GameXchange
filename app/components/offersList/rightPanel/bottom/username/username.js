import React from 'react';
import { View } from 'react-native';
import Icon from './../../../../icon';
import AppText from './../../../../appText';

import styles from './styles';

const Username = (props) => {
  return (
    <View style={styles.username}>
      <AppText style={{ fontSize: 11 }} numberOfLines={1}>
        {props.user}
      </AppText>
    </View>
  );
};

export default Username;
