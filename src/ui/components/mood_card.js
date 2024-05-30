import React from 'react';
import {View, Text, Image, StyleSheet, Divider} from 'react-native';
import Seperator from './seperator';

const MoodCard = ({day, month, mood, sentences, imageSource}) => {
  return (
    <View style={styles.cardContainer}>
      {/* Date Container */}
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{day}</Text>
        <Text style={styles.dateText}>{month}</Text>
      </View>

      <Seperator width={1.5} height={'50%'} backgroundColor={'#E3E3E3'} marginVertical={0} marginHorizontal={8}/>

      {/* Mood Container */}
      <View style={styles.moodContainer}>
        <Text style={styles.moodText}>{mood}</Text>
        <Text numberOfLines={3} style={styles.sentencesText}>{sentences}</Text>
      </View>

      <Image source={imageSource} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 16,
    paddingHorizontal: 16,
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateContainer: {
    flexDirection: 'vertical',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  moodContainer: {
    flexDirection: 'vertical',
    justifyContent: 'space-around',
    alignItems: 'start',
    flex: 3,
    marginStart: 12,
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#464646',
  },

  moodText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#464646',
  },

  sentencesText: {
    marginTop: 0,
    fontSize: 12,
    color: '#B4B4B4',
  },
  image: {
    flex: 2,
    width: 80,
    height: 80,
    alignSelf: 'center', // Center the image horizontally
  },
});

export default MoodCard;
