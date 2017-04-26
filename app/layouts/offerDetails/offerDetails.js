import React, { Component } from 'react';
import { View } from 'react-native';
import { header } from './../../config/styles';
import { Back } from './../../components/navigation';

import { GameBox, Details } from './../../components/offerDetails'

import styles from './styles';

export default class OfferDetails extends Component {
  constructor({ navigation }) {
    super();
    this.params = navigation.state.params;
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Offer Details',
      headerTintColor: header.headerTintColor,
      headerStyle: header.headerStyle,
      headerTitleStyle: header.headerTitleStyle,
      headerLeft: Back(navigation),
    }
  };

  render() {
    return (
      <View style={styles.background}>
        <View style={styles.top}>
          <GameBox image={this.params.image} />
          <Details />
        </View>
      </View>
    );
  }

};
