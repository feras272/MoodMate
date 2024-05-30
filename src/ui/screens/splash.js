import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS} from '../../../constants/colors';
import { HappyFace } from '../../../assets/images';

const Splash = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, []);

  return (
    <View style={styles.splashContainer}>

      <Image source={HappyFace} />

      <Text style={styles.splashText}>MoodMate</Text>

    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  splashContainer: {
    backgroundColor: COLORS.splash_background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    fontSize: 32,
    color: 'white',
    marginTop: 18,
  },
});
