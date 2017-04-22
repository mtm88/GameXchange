import { StyleSheet } from 'react-native';
import { defaultStyles } from './../../config/styles';

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
    marginLeft: 5,
  },
  rightPanelTop: {
    flex: 3,
    marginTop: 7,
  },
  rightPanelTopTop: {
    flex: 4,
    flexDirection: 'row',
  },
  rightPanelTopTopPlatform: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5,
  },
  rightPanelTopTopTitle: {
    flex: 9,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightPanelTopBottom: {
    flex: 1,
    flexDirection: 'row',
  },
  rightPanelTopBottomExchange: {
    flex: 9,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightPanelTopBottomMore: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightPanelBottom: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
  },
  rightPanelBottomLeft: {
    flex: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightPanelBottomRight: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightPanelBottomRightUsername: {
    flex: 1,
  },
  rightPanelBottomRightStars: {
    flex: 1,
    flexDirection: 'row',
  },
  titleText: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
  },
  smallText: {
    color: 'white',
    fontSize: 11,
  },
  icons: {
    height: 15,
    width: 15,
  },
  image: {
    flex: 1,
    height: 100,
    width: 70,
  },
  starIcon: {
    height: 10,
    width: 10,
  }
});
