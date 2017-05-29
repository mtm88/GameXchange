import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import GameBox from './../gameBox';
import RightPanel from './../rightPanel';
import styles from './styles';

const ListRow = (props) => {
  return (
    <TouchableHighlight onPress={() => props.onPress(props)}>
      <View style={styles.container}>
        <GameBox image={props.image} />
        <RightPanel title={props.title} platform={props.platform} user={props.user} exchangeFor={props.exchangeFor} />
      </View >
    </TouchableHighlight>
  );
}

ListRow.propTypes = {
  title: React.PropTypes.string,
  platform: React.PropTypes.string,
  user: React.PropTypes.string,
  exchangeFor: React.PropTypes.array,
};

ListRow.defaultProps = {
  title: 'missing title',
  platform: 'no platform specified',
  user: 'no user supplied',
  exchangeFor: [],
};


export default ListRow;


