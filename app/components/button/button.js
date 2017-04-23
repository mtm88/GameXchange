import React from 'react';
import Button from 'react-native-button';
import styles from './styles';

const rButton = (props) => {
  const { text, onPress } = props;
  return (
    <Button
      containerStyle={[styles.containerStyle, props.containerStyles]}
      style={[styles.buttonText, props.textStyles]}
      onPress={onPress}>
      {text}
    </Button>
  );
};

rButton.propTypes = {
  text: React.PropTypes.string,
  onPress: React.PropTypes.func,
};

rButton.defaultProps = {
  text: 'Button Text',
  // eslint-disable-next-line no-console
  onPress: () => console.log('Button Pressed'),
};

export default rButton;