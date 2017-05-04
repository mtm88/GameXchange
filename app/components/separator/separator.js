import React from 'react';
import { View } from 'react-native';

import { separatorStyle } from './styles';

const Separator = (props) => {
  return (
    <View key={props.rowId} style={[separatorStyle]} />
  );
};

export default Separator;