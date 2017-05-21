import { StyleSheet } from 'react-native';
import { defaultStyles } from './../../../../config/styles';

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  icon: {
    width: defaultStyles.icon.width,
    height: defaultStyles.icon.height,
  },
});