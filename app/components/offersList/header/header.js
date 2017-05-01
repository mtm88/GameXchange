import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

import styles from './styles';

const Header = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Start typing to filter..."
        onChangeText={(text) => {
          const filteredResults = filterRows(text, props.dataSet);
          props.updateState(filteredResults);
        }}
      />
    </View>
  );
};

function filterRows(searchText, dataSet) {
  return dataSet.filter((record) => record.title.toLowerCase().includes(searchText.toLowerCase()));
}

export default Header;