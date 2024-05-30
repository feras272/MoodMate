import {Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const {width} = Dimensions.get('window');

const Pagination = ({data, scrollX}) => {
  return (
    <Animated.View style={styles.dotsPagination}>
      {data.map((item, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];
        const size = useSharedValue(0.7);

        // takes input range and use an output
        // then value simulated
        // size of the card at every phase
        size.value = interpolate(
          scrollX, // property
          inputRange, // input
          [0.7, 1.4, 0.7], // output
          Extrapolation.CLAMP,
        );
        const cardStyle = useAnimatedStyle(() => {
          // transform property
          return {
            transform: [{scaleY: size.value}], // style updated with size value
          };
        });
        return (
          <Animated.View
            key={index}
            style={[styles.dots, cardStyle]}></Animated.View>
        );
      })}
    </Animated.View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  dotsPagination: {
    flexDirection: 'row',
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dots: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#CCCCDD',
    marginLeft: 5,
  },
});
