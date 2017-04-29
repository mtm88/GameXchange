import React from 'react';
import { View } from 'react-native';
import Username from './../../../../username';
import UserRating from './../../../../userRating';
import AppText from './../../../../appText';
import Icon from './../../../../icon';

import styles from './styles';

const Added = (props) => {
  return (
    <View style={styles.added}>
      <Icon icon='added' />
      <AppText style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 5 }}>Added:</AppText>
      <AppText style={{ fontSize: 12, fontStyle: 'italic', marginLeft: 5 }}>{props.added}</AppText>
    </View >
  );
};

Added.propTypes = {
  added: React.PropTypes.string,
};

Added.defaultProps = {
  added: 'Missing date',
};


export default Added;
