import { StyleSheet } from 'react-native';
import { defaultStyles } from './../../config/styles';

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: defaultStyles.colors.backgroundColor,
    paddingTop: 20,
  },
  top: {
    flex: 6,
  },
  middle: {
    flex: 6,
  },
  bottom: {
    flex: 12,
  }

});