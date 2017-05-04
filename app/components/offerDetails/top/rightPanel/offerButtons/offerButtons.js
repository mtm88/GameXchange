import React from 'react';
import { View } from 'react-native';
import Button from './../../../../button';

import {
  container,
  buttonContainer,
  greenButton,
  blueButton,
  redButton,
  buttonText,
} from './styles';

const OfferButtons = (props) => {
  return (
    <View style={container}>
      <View style={[buttonContainer, { flex: 3 }]}>
        <Button text='MAKE AN OFFER'
          containerStyles={greenButton}
          textStyles={buttonText}
        />
      </View>
      <View style={[buttonContainer, { flex: 2 }]}>
        <Button text='NO IDEA?'
          containerStyles={blueButton}
          textStyles={buttonText}
        />
      </View>
      <View style={[buttonContainer, { flex: 2 }]}>
        <Button text='REPORT'
          containerStyles={redButton}
          textStyles={buttonText}
        />
      </View>
    </View>
  );

}

export default OfferButtons;