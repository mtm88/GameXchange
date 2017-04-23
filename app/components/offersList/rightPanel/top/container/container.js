import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import AppText from './../../../../appText';
import Platform from './../platform';
import Title from './../title';
import Exchange from './../exchange';
import ExchangeList from './../exchangeList';

const Top = (props) => {
  return (
    <View style={styles.container}>

      <View style={styles.subcontainerTop}>
        <Platform platform={props.platform} />
        <Title title={props.title} />
      </View>
      <View style={styles.subcontainerBottom}>
        <Exchange exchangeFor={props.exchangeFor} />
        <ExchangeList exchangeFor={props.exchangeFor} />
      </View>
    </View>
  );
};

Top.propTypes = {
  platform: React.PropTypes.string,
  title: React.PropTypes.string,
  exchangeFor: React.PropTypes.string,
};

Top.defaultProps = {
  platform: 'No platform specified',
  title: 'Title missing',
  exchangeFor: 'No data',
};


export default Top;

