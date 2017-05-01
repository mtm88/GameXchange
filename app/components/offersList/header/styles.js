import { StyleSheet } from 'react-native';
import { defaultStyles } from './../../../config/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: defaultStyles.colors.backgroundColor,
  },
  input: {
    height: 25,
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 15,
    backgroundColor: '#FFF',
  },
});