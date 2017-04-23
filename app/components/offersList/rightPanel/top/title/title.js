import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import AppText from './../../../../appText';

const Title = (props) => {
  return (
    <View style={styles.title}>
      <AppText style={{ fontWeight: 'bold', fontSize: 13 }}>
        {props.title}
      </AppText>
    </View>
  );
};

export default Title;
