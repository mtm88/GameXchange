
import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

const PlatformLogo = (props) => {
  return (
    <Image source={logos[props.platform]} style={[styles.logo, props.style]} />
  );
};

PlatformLogo.propTypes = {
  platform: React.PropTypes.string,
  style: React.PropTypes.object,
};

PlatformLogo.defaultProps = {
  platform: 'No platform specified',
  style: {},
};


export default PlatformLogo;

const logos = {
  'ps4': require(`./../../icons/ps4_logo.png`),
  'xbox': require(`./../../icons/xbox_logo.png`),
};