import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import GameBox from './../gameBox';
import RightPanel from './../rightPanel';

const Top = (props) => {
  return (
    <View style={styles.container}>
      <GameBox image={props.image} />
      <RightPanel
        title={props.title}
        user={props.user}
        added={props.added}
        finish={props.finish}
      />
    </View>
  );
};

Top.propTypes = {
};

Top.defaultProps = {
};


export default Top;