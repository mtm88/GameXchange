import React from 'react';
import { View } from 'react-native';
import Icon from './../../../../icon';
import AppText from './../../../../appText';

import styles from './styles';

const Username = (props) => {
  return (
    <View style={styles.username}>
      <AppText style={{ fontSize: 11 }} numberOfLines={1}>
        {props.user}
      </AppText>
    </View>
  );
};

Username.propTypes = {
  user: React.PropTypes.string,
};

Username.defaultProps = {
  user: 'Username missing',
};


export default Username;
