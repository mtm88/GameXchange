import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Title from './../title';
import Owner from './../owner';
import Added from './../added';
import Finish from './../finish';

const RightPanel = (props) => {
  return (
    <View style={styles.container}>
      <Title title={props.title} />
      <Owner user={props.user} />
      <Added added={props.added} />
      <Finish finish={props.finish} />
    </View>
  );
};

RightPanel.propTypes = {
};

RightPanel.defaultProps = {
};


export default RightPanel;