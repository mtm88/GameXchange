import React from 'react';
import { View } from 'react-native';
import AppText from './../../../../appText';
import Icon from './../../../../icon';
import styles from './styles';
import ModalDropdown from 'react-native-modal-dropdown';

const ExchangeList = (props) => {
  return (
    <View style={styles.exchangeList}>
      <ModalDropdown
        options={props.exchangeFor}
        animated={false}
        dropdownStyle={{ width: 200, backgroundColor: '#000', borderColor: '#000' }}
        renderRow={(text) => {
          return (
            <View style={{ paddingTop: 6, paddingLeft: 3 }}>
              <AppText style={{ fontSize: 11 }}>{text}</AppText>
            </View>
          )
        }}
        renderSeparator={() => null}
      >
        <Icon icon="expand_down" />
      </ModalDropdown>
    </View >
  );
};

export default ExchangeList;
