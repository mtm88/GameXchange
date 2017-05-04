import React from 'react';
import { View } from 'react-native';
import AppText from './../appText';

import { SeparatorTextStyle, Container } from './styles';

const SeparatorText = (props) => {
  return (
    <View style={Container}>
      <AppText style={SeparatorTextStyle}>{props.children}</AppText>
    </View>
  );
};

export default SeparatorText;