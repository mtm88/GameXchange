import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Separator from './../../../../components/separator';
import SeparatorText from './../../../../components/separatorText';

import styles from './styles';

import { GiftedChat, Bubble } from 'react-native-gifted-chat';

class Bottom extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.onSend = this.onSend.bind(this);
    this.renderBubble = this.renderBubble.bind(this);
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
      ],
    });
  }
  onSend(messages = []) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {/*<Separator />*/}
        <SeparatorText>CHAT</SeparatorText>
        <GiftedChat
          messages={this.state.messages}
          onSend={this.onSend}
          user={{
            _id: 1,
          }}
          renderBubble={this.renderBubble}
        />
      </View>
    );
  }

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#f0f0f0',
          }
        }}
      />
    );
  }

};

Bottom.propTypes = {
};

Bottom.defaultProps = {
};


export default Bottom;