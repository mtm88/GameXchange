import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Title from './../title';
import Owner from './../owner';
import Added from './../added';
import Finish from './../finish';
import OfferButtons from './../offerButtons';
import Button from './../../../../button';

const RightPanel = (props) => {
  return (
    <View style={styles.container}>
      <Title title={props.title} />
      <Owner user={props.user} />
      <Added added={props.added} />
      <Finish finish={props.finish} />
      <OfferButtons />
    </View >
  );
};

RightPanel.propTypes = {
};

RightPanel.defaultProps = {
};


export default RightPanel;