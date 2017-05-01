import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

import styles from './styles';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          onChangeText={(text) => {
            const filteredResults = this.filterRows(text, this.props.dataSet);
            debugger;
            this.props.updateState(filteredResults);
          }}
        />
      </View>
    );
  }

  filterRows(searchText, dataSet) {
    return dataSet.filter((record) => record.title.includes(searchText));
  }
}


export default Header;