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

export default RightPanel;

