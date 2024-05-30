import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import Animated, { Extrapolation, interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import Pagination from './pagination';

const {width, height} = Dimensions.get('window');
const CARD_LINGTH = width * 0.7;
const SPACING = width * 0.02;
const SIDE_CARD_LENGTH = (width * 0.28) / 2;// / 2;

const Item = ({index, length, scrollX, imageSource}) => {

  const size = useSharedValue(0.7);
  
  const inputRange = [
    (index -1) * CARD_LINGTH,
    index * CARD_LINGTH,
    (index + 1) * CARD_LINGTH,
  ];

  // takes input range and use an output
  // then value simulated
  // size of the card at every phase
  size.value = interpolate(
    scrollX, // property
    inputRange, // input
    [0.7, 1, 0.7], // output
    Extrapolation.CLAMP
  )

  const cardStyle = useAnimatedStyle(() => {
    // transform property
    return {
      transform: [{scaleY: size.value}], // style updated with size value
    }
  });

  return (
    // To animate something we use Animated View
    <Animated.View style={[styles.card, cardStyle, {
      marginLeft: index == 0 ? SIDE_CARD_LENGTH : SPACING,
      marginRight: index == length -1 ? SIDE_CARD_LENGTH : SPACING
    }]}>
      <Image
        source={imageSource}
        style={{width: '100%', height: '100%'}}
      />
    </Animated.View>
  )
}


const CarouselContainer = ({data}) => {

  const [scrollX, setScrollX] = useState(0);

  return (
    <Animated.View style={{width: '100%'}}>
      <Animated.FlatList

        contentContainerStyle={{marginTop: 4}}
        
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0.8}
        // snap on every item size
        // snapToInterval={CARD_LINGTH + (SPACING * 1.5)} // snapToInterval / decorationRate
        bounces={false}
        disableIntervalMomentum={true}
        disableScrollViewPanResponder={true}
        snapToAlignment={'center'}
        data={data}
        horizontal={true}
        renderItem={({item, index}) => {
          return(
            <Item key={index} index={index} length={data.length} scrollX={scrollX} imageSource={item.uri} />
          )
        }}
        onScroll={(event)=> {
          setScrollX(event.nativeEvent.contentOffset.x);
        }}
      />
      <Animated.View>
        <Pagination data={data} scrollX={scrollX} />
      </Animated.View>
      
    </Animated.View>
  )
}

export default CarouselContainer

const styles = StyleSheet.create({
  card: {
    width: CARD_LINGTH,
    height: 300,
    overflow: 'hidden',
    //backgroundColor: '#cdcdcd',
    justifyContent: 'center',
    alignItems: 'center',
  }
})