import React, { Component } from 'react';
import { View } from 'react-native';
import { headerStyle } from './../../config/styles';
import { Back } from './../../components/navigation';

import { Top, Middle, Bottom } from './../../components/offerDetails'

import styles from './styles';

export default class OfferDetails extends Component {
  constructor({ navigation }) {
    super();
    this.params = navigation.state.params;
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Offer Details',
      headerTintColor: headerStyle.headerTintColor,
      headerStyle: headerStyle.headerStyle,
      headerTitleStyle: headerStyle.headerTitleStyle,
      headerLeft: Back(navigation),
    }
  };

  render() {
    return (
      <View style={styles.background}>
        <View style={styles.top}>
          <Top
            image={this.params.image}
            title={this.params.title}
            user={this.params.user}
            added={this.params.added}
            finish={this.params.finish}
          />
        </View>
        <View style={styles.middle}>
          <Middle
            exchangeFor={this.params.exchangeFor}
          />
        </View>
        <View style={styles.bottom}>
          <Bottom />
        </View>
      </View >
    );
  }

};
