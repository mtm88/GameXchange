import React from 'react';
import { Text, View, Image } from 'react-native';
import Top from './../top';
import Bottom from './../bottom';
import styles from './styles';

const RightPanel = (props) => {
  return (
    <View style={styles.container}>
      <Top title={props.title} exchangeFor={props.exchangeFor} platform={props.platform} />
      <Bottom user={props.user} />
    </View >
  )
};

RightPanel.propTypes = {
  title: React.PropTypes.string,
  exchangeFor: React.PropTypes.array,
  platform: React.PropTypes.string,
  user: React.PropTypes.string,
};

RightPanel.defaultProps = {
  title: 'Title missing',
  exchangeFor: [],
  platform: 'No platform specified',
  user: 'Username missing',
};


export default RightPanel;

