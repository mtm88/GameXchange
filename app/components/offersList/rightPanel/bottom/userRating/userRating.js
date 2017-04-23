import React from 'react';
import { View } from 'react-native';
import Icon from './../../../../icon';
import styles from './styles';

const UserRating = (props) => {
  return (
    <View style={styles.userRating}>
      <Icon icon='user_star_yellow' style={{ width: 10, height: 10 }} />
      <Icon icon='user_star_yellow' style={{ width: 10, height: 10 }} />
      <Icon icon='user_star_yellow' style={{ width: 10, height: 10 }} />
      <Icon icon='user_star_white' style={{ width: 10, height: 10 }} />
      <Icon icon='user_star_white' style={{ width: 10, height: 10 }} />
    </View>
  );
};

export default UserRating;
