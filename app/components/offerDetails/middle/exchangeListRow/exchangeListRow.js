import React from 'react';
import { View } from 'react-native';
import AppText from './../../../appText';
import { container, rowText } from './styles';

const ExchangeListRow = (props) => {
  return (
    <View style={container}>
      <AppText style={rowText}>{props.row}</AppText>
    </View>
  );
};

export default ExchangeListRow;