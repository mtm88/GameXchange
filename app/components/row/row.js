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
          <Text style={styles.titleText}>
            {props.title}
          </Text>

          <View>
            <Text style={styles.userText}>
              {props.user}
              (15<Image source={require('./../../icons/user_star.png')} style={styles.starIcon} />)
            </Text>
          </View>

        </View>

        <View style={styles.rightPanelBottom}>
          <Text style={styles.icons}>
            icons
          </Text>
        </View>

      </View>

    </View>
  );
}

export default Row;

const boxesMap = {
  'fallout4': require('./../../img/boxes/fallout4.jpg'),
  'gta5': require('./../../img/boxes/gta5.jpg'),
};