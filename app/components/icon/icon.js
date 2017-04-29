import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

const Icon = (props) => {
  return (
    <Image source={icons[props.icon]} style={[styles.icon, props.style]} onPress={props.onPress} />
  );
};

Icon.propTypes = {
  icon: React.PropTypes.string,
  style: React.PropTypes.object,
};

Icon.defaultProps = {
  style: {},
  icon: 'missingicon',
};


export default Icon;

const icons = {
  'expand_down': require('./../../icons/expand_down.png'),
  'more': require('./../../icons/more.png'),
  'location_green': require('./../../icons/location_green.png'),
  'user_star_yellow': require('./../../icons/user_star_yellow.png'),
  'user_star_white': require('./../../icons/user_star_white.png'),
  'missingicon': require('./../../icons/missingicon.png'),
  'nav_back': require('./../../icons/nav_back.png'),
  'game': require('./../../icons/game_title.png'),
  'user': require('./../../icons/user_icon.png'),
  'added': require('./../../icons/added_icon.png'),
  'finish': require('./../../icons/finish_icon.png'),
}