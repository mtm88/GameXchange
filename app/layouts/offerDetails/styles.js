import { StyleSheet } from 'react-native';
import { defaultStyles } from './../../config/styles';

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: defaultStyles.colors.backgroundColor,
    paddingTop: 20,
  },
  top: {
    flex: 3,
  },
  middle: {
    flex: 4,
  },
  bottom: {
    flex: 7,
  }

});