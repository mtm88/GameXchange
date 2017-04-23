import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

const GameBox = (props) => {
  return (
    <View style={styles.gameBox}>
      <Image source={boxesMap[props.image]} style={[styles.image, props.style]} />
    </View>
  );
};

GameBox.propTypes = {
  image: React.PropTypes.string,
  style: React.PropTypes.object,
};

GameBox.defaultProps = {
  style: {},
};


export default GameBox;

const boxesMap = {
  'fallout4': require('./../../../img/boxes/fallout4.jpg'),
  'gta5': require('./../../../img/boxes/gta5.jpg'),
  'shadowofmordor': require('./../../../img/boxes/shadowofmordor.jpg'),
};
