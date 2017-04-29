import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

const AppText = (props) => {
  return (
    <Text style={[styles.font, props.style]} onPress={props.onPress} numberOfLines={props.numberOfLines}>
      {props.children}
    </Text>
  )
};

AppText.propTypes = {
  numberOfLines: React.PropTypes.number,
  style: React.PropTypes.object,
};

AppText.defaultProps = {
  style: {},
  children: 'No data passed',
};


export default AppText;