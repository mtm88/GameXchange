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

ListRow.propTypes = {
  title: React.PropTypes.string,
  platform: React.PropTypes.string,
  user: React.PropTypes.string,
  exchangeFor: React.PropTypes.string,
};

ListRow.defaultProps = {
  title: 'missing title',
  platform: 'no platform specified',
  user: 'no user supplied',
  exchangeFor: 'no data',
};


export default ListRow;


