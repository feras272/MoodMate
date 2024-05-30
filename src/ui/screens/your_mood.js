import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Animated,
} from 'react-native';
import React, {useRef, useState} from 'react';
import CarouselContainer from '../components/carousel_container';
import { imageData } from '../../app/data/all_emojis';

const {height, width} = Dimensions.get('window');

const YourMood = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [data, setData] = useState([1, 1, 1, 1, 1]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // return object with the current key
  const scrollX = useRef(new Animated.Value(0)).current;
  const handleOnScroll = event => {
    // in order to map the Animated value of scrollX
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F9F9FB'}}>
      <View style={styles.textContainer}>
        <Text style={styles.howAreYouText}>How are you?</Text>
      </View>
      <View style={styles.listContainer}>
        <CarouselContainer data={imageData} />
      </View>
    </SafeAreaView>
  );
};

export default YourMood;

const styles = StyleSheet.create({
  textContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10%',
  },
  howAreYouText: {
    fontSize: 18,
    color: '#464646',
    alignSelf: 'center',
  },
  listContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#F9F9FB',
  },
  listHolder: {
    height: height / 2,
  },
});

/*
e => {
              const x = e.nativeEvent.contentOffset.x;
              setCurrentIndex((x / width).toFixed(0));
            }
*/
