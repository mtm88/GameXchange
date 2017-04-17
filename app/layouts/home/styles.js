import { StyleSheet } from 'react-native';
import { defaultStyles } from './../../config/styles';

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  buttons: {
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '500',
  },
  welcomeText: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 15,
    marginLeft: 30,
    fontFamily: defaultStyles.fontFamily,
  },
  icon: {
    width: defaultStyles.icon.width,
    height: defaultStyles.icon.height,
  },
});