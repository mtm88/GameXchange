import React from 'react';
import { View } from 'react-native';
import Username from './../../../../username';
import UserRating from './../../../../userRating';
import AppText from './../../../../appText';
import Icon from './../../../../icon';

import styles from './styles';

const Owner = (props) => {
  return (
    <View style={styles.owner}>
      <Icon icon='user' />
      <AppText style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 5 }}>Owner:</AppText>
      <Username user={props.user} style={{ flex: 0, marginRight: 5, marginLeft: 5 }} textStyle={{ fontSize: 12, fontStyle: 'italic' }} />
      <UserRating style={{ flex: 0 }} />
    </View >
  );
};

Owner.propTypes = {
  user: React.PropTypes.string,
};

Owner.defaultProps = {
  user: 'Username missing',
};


export default Owner;
