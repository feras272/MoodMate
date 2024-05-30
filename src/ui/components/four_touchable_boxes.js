import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { COLORS } from '../../../constants/colors';

const FourTouchableBoxes = ({
  onPressMusic,
  onPressVideo,
  onPressBook,
  onPressLike,
  imageSourceMusic,
  imageSourceVideo,
  imageSourceBook,
  imageSourceLike,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box} onPress={onPressMusic}>
        <Image source={imageSourceMusic} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPress={onPressVideo}>
        <Image source={imageSourceVideo} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPress={onPressBook}>
        <Image source={imageSourceBook} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPress={onPressLike}>
        <Image source={imageSourceLike} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', 
    height: '12%',
    paddingStart:8,
    paddingEnd:8,
    marginTop: 16,
  },
  box: {
    flex: 1, // Divide available space equally among boxes
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    backgroundColor: COLORS.white,
    borderRadius: 16,
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default FourTouchableBoxes;
