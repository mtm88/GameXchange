import React from 'react';
import { View } from 'react-native';
import Icon from './../../../../icon';
import styles from './styles';

const ExchangeList = (props) => {
  return (
    <View style={styles.exchangeList}>
      <Icon icon="expand_down" />
    </View>
  );
};

export default ExchangeList;
