import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'row',
  },
  imageSubContainer: {
    flex: 2,
  },
  rightPanel: {
    flex: 8,
  },
  rightPanelTop: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightPanelBottom: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
  },
  userText: {
    color: 'white',
    fontSize: 13,
  },
  icons: {
    flex: 1,
    color: 'white',
  },
  image: {
    flex: 1,
    height: 100,
    width: 70,
  },
  starIcon: {
    marginLeft: 3,
    marginTop: 2,
    height: 15,
    width: 15,
    backgroundColor: 'yellow',
  }
});
