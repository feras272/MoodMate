import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated
} from 'react-native';
import React from 'react';

const {height, width} = Dimensions.get('window');

const EmojiSlideItem = ({item}) => {
  return (
    <Animated.View style={styles.emojiTouchHolder}>
      <TouchableOpacity style={styles.emojiTouch}></TouchableOpacity>
    </Animated.View>
  );
};

export default EmojiSlideItem;

const styles = StyleSheet.create({
  emojiTouch: {
    width: '50%',
    height: '50%',
    backgroundColor: 'green',
  },
  emojiTouchHolder: {
    width: width,
    height: height / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
