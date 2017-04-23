import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

const Icon = (props) => {
  return (
    <Image source={icons[props.icon]} style={[styles.icon, props.style]} />
  );
};

export default Icon;

const icons = {
  'expand_down': require('./../../icons/expand_down.png'),
  'more': require('./../../icons/more.png'),
  'location_green': require('./../../icons/location_green.png'),
  'user_star_yellow': require('./../../icons/user_star_yellow.png'),
  'user_star_white': require('./../../icons/user_star_white.png'),
}