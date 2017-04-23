import React from 'react';
import { View } from 'react-native';
import Icon from './../../../../icon';
import styles from './styles';

const Menu = (props) => {
  return (
    <View style={styles.menu}>
      <Icon icon='more' style={{ marginRight: 10 }} />
    </View>
  );
};

export default Menu;
