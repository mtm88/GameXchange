import React, { Component } from 'react';
import { View } from 'react-native';
import { headerStyle } from './../../../../config/styles';
import { Back } from './../../../../components/navigation';

import { Top, Middle, Bottom } from './../../../../components/offerDetails'

import styles from './styles';

export default class OfferDetails extends Component {

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
    debugger;
    const params = this.props.navigation.state.params;
    return (
      <View style={styles.background}>
        <View style={styles.top}>
          <Top
            image={params.image}
            title={params.title}
            user={params.user}
            added={params.added}
            finish={params.finish}
          />
        </View>
        <View style={styles.middle}>
          <Middle
            exchangeFor={params.exchangeFor}
          />
        </View>
        <View style={styles.bottom}>
          <Bottom />
        </View>
      </View >
    );
  }

};
