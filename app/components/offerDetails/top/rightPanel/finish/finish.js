import React from 'react';
import { View } from 'react-native';
import Username from './../../../../username';
import UserRating from './../../../../userRating';
import AppText from './../../../../appText';
import Icon from './../../../../icon';

import styles from './styles';

const Finish = (props) => {
  return (
    <View style={styles.finish}>
      <Icon icon='finish' />
      <AppText style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 5 }}>Ends:</AppText>
      <AppText style={{ fontSize: 12, fontStyle: 'italic', marginLeft: 5 }}>{props.finish}</AppText>
    </View >
  );
};

Finish.propTypes = {
  finish: React.PropTypes.string,
};

Finish.defaultProps = {
  finish: 'Missing date',
};


export default Finish;
