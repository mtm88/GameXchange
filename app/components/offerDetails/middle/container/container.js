import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import Separator from './../../../../components/separator';
import SeparatorText from './../../../../components/separatorText';
import ExchangeListRow from './../exchangeListRow';

import styles from './styles';


export default class Middle extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  componentWillMount() {
    this.setState({
      dataSource: this.ds.cloneWithRows(this.props.exchangeFor),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {/*<Separator />*/}
        <SeparatorText>EXCHANGE LIST</SeparatorText>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={data => <ExchangeListRow row={data} />}
        />
      </View>
    );
  }

}

Middle.propTypes = {
};

Middle.defaultProps = {
};
