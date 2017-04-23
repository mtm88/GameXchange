import React from 'react';
import { View, Text, Image } from 'react-native';
import GameBox from './../gameBox';
import RightPanel from './../rightPanel';
import styles from './styles';

const ListRow = (props) => {
  return (
    <View style={styles.container}>
      <GameBox image={props.image} />
      <RightPanel title={props.title} platform={props.platform} user={props.user} exchangeFor={props.exchangeFor} />
    </View >
  );
}

export default ListRow;


