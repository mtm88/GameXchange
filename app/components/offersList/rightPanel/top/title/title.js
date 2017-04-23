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

Title.propTypes = {
  title: React.PropTypes.string,
};

Title.defaultProps = {
  title: 'Title missing',
};


export default Title;
