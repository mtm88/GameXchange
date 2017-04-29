import React from 'react';
import { View } from 'react-native';
import Menu from './../menu';
import LocationIcon from './../locationIcon';
import LocationText from './../locationText';
import Username from './../../../../username';
import UserRating from './../../../../userRating';
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
        <Username user={props.user} textStyle={{ fontSize: 12 }} />
        <UserRating />
      </View>

    </View >
  );
};

Bottom.propTypes = {
  user: React.PropTypes.string,
};

Bottom.defaultProps = {
  user: 'Username missing',
};


export default Bottom;
