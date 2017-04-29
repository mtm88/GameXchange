import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import AppText from './../../../../appText';
import Icon from './../../../../icon';

const Title = (props) => {
  return (
    <View style={styles.title}>
      <Icon icon='game' style={{ width: 25, height: 25 }} />
      <AppText style={{ fontWeight: 'bold', fontSize: 15, marginLeft: 5 }}>
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