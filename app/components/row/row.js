import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const Row = (props) => {
  return (
    <View style={styles.container}>

      <View style={styles.imageSubContainer}>
        <Image source={boxesMap[props.image]} style={styles.image} />
      </View>

      <View style={styles.rightPanel}>

        <View style={styles.rightPanelTop}>

          <View style={styles.rightPanelTopTop}>
            <View style={styles.rightPanelTopTopPlatform}>
              <Image source={logos[props.platform]} style={{ height: 25, width: 25 }} />
            </View>
            <View style={styles.rightPanelTopTopTitle}>
              <Text style={styles.titleText}>
                {props.title}
              </Text>
            </View>
          </View>
          <View style={styles.rightPanelTopBottom}>
            <View style={styles.rightPanelTopBottomExchange}>
              <Text style={[styles.smallText, { fontStyle: 'italic' }]}>
                Exchange for: {props.exchangeFor}
              </Text>
            </View>
            <View style={styles.rightPanelTopBottomMore}>
              <Image source={require('./../../icons/expand_down.png')} style={styles.icons} />
            </View>
          </View>

        </View>

        <View style={styles.rightPanelBottom}>

          <View style={styles.rightPanelBottomLeft}>
            <Image source={require('./../../icons/more.png')} style={[styles.icons, { marginRight: 10 }]} />
            <Image source={require('./../../icons/location_green.png')} style={[styles.icons, { marginRight: 3 }]} />
            <Text style={styles.smallText}>12 miles</Text>
          </View>

          <View style={styles.rightPanelBottomRight}>

            <View style={styles.rightPanelBottomRightUsername}>
              <Text style={styles.smallText}>
                {props.user} (15)
              </Text>
            </View>

            <View style={styles.rightPanelBottomRightStars}>
              <Image source={require('./../../icons/user_star_yellow.png')} style={styles.starIcon} />
              <Image source={require('./../../icons/user_star_yellow.png')} style={styles.starIcon} />
              <Image source={require('./../../icons/user_star_yellow.png')} style={styles.starIcon} />
              <Image source={require('./../../icons/user_star_white.png')} style={styles.starIcon} />
              <Image source={require('./../../icons/user_star_white.png')} style={styles.starIcon} />
            </View>

          </View>

        </View>

      </View >

    </View >
  );
}

export default Row;

const boxesMap = {
  'fallout4': require('./../../img/boxes/fallout4.jpg'),
  'gta5': require('./../../img/boxes/gta5.jpg'),
  'shadowofmordor': require('./../../img/boxes/shadowofmordor.jpg'),
};

const logos = {
  'ps4': require(`./../../icons/ps4_logo.png`),
  'xbox': require(`./../../icons/xbox_logo.png`),
};