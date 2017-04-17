import { StyleSheet } from 'react-native';
import { defaultStyles } from './../../config/styles';

export default StyleSheet.create({
  containerStyle: {
    backgroundColor: defaultStyles.colors.buttonBackground,
    padding: 10,
    overflow: 'hidden',
    borderRadius: 7,
  },
  buttonText: {
    fontFamily: defaultStyles.fontFamily,
    fontSize: 11
  }
});
