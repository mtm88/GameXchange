import React from 'react';
import { View } from 'react-native';

import { separator } from './styles';

const Separator = (props) => {
  return (
    <View key={props.rowId} style={separator} />
  );
};

export default Separator;