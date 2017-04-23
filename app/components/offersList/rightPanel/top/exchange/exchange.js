import React from 'react';
import { View } from 'react-native';
import AppText from './../../../../appText';
import styles from './styles';

const Exchange = (props) => {
  return (
    <View style={styles.exchange}>
      <AppText style={{ fontStyle: 'italic', fontSize: 11 }} numberOfLines={1}>
        Exchange for: {props.exchangeFor}
      </AppText>
    </View>
  );
};

export default Exchange;