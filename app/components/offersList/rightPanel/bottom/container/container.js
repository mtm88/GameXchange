import React from 'react';
import { View } from 'react-native';
import Icon from './../../../../icon';
import Menu from './../menu';
import LocationIcon from './../locationIcon';
import LocationText from './../locationText';
import Username from './../username';
import UserRating from './../userRating';
import styles from './styles';

const Bottom = (props) => {
  return (
    <View style={styles.rightPanelBottom}>

      <View style={styles.subcontainerLeft}>
        <Menu />
        <LocationIcon />
        <LocationText />
      </View>

      <View style={styles.subcontainerRight}>
        <Username user={props.user} />
        <UserRating />
      </View>

    </View >
  );
};

export default Bottom;
