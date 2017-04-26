import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import AppText from './../../appText';

const Details = (props) => {
  return (
    <View style={styles.details}>
      <View style={styles.title}>
        <AppText style={{ fontWeight: 'bold', fontSize: 13 }}>
          {props.title}
        </AppText>
      </View>
    </View>
  );
};

Details.propTypes = {
};

Details.defaultProps = {
};


export default Details;