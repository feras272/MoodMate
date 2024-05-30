import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants/colors';
import FourTouchableBoxes from '../components/four_touchable_boxes';
import MoodCard from '../components/mood_card';

import moodData from '../../app/data/moods';
import {PlusIcon} from '../../../assets/images';

const Home = ({navigation}) => {
  const handlePressMusic = () => {
    console.log('Music Box pressed');
  };

  const handlePressVideo = () => {
    console.log('Video Box pressed');
  };

  const handlePressBook = () => {
    console.log('Book Box pressed');
  };

  const handlePressLike = () => {
    console.log('Like Box pressed');
  };

  function logYourMood() {
    navigation.navigate('YourMood');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Inspirations...</Text>

      <FourTouchableBoxes
        onPressMusic={handlePressMusic}
        onPressVideo={handlePressVideo}
        onPressBook={handlePressBook}
        onPressLike={handlePressLike}
        imageSourceMusic={require('./../../../assets/images/music_notes.png')}
        imageSourceVideo={require('./../../../assets/images/play_circle.png')}
        imageSourceBook={require('./../../../assets/images/book_open_text.png')}
        imageSourceLike={require('./../../../assets/images/hand_heart.png')}
      />

      <Text
        style={{
          fontSize: 32,
          color: '#464646',
          marginStart: 16,
          marginTop: 26,
        }}>
        May 2023
      </Text>
      <View
        style={{
          width: '100%',
          flex: 1,
          margin: 4,
          padding: 4,
        }}>
        <FlatList
          style={{
            margin: 8,
            flex: 1,
            padding: 8,
          }}
          data={moodData}
          keyExtractor={item => item.key}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  marginVertical: 8,
                  width: '100%',
                }}>
                <MoodCard
                  day={item.day}
                  month={item.month}
                  mood={item.mood}
                  sentences={item.phrases}
                  imageSource={item.emoji}
                />
              </View>
            );
          }} // return JSX
        />
      </View>
      <TouchableOpacity style={styles.logYourMoodButton} onPress={logYourMood}>
        <Text style={styles.logYourMoodText}>Log your mood</Text>
        <Image
          style={{tintColor: 'white', width: 20, height: 20}}
          source={require('../../../assets/images/plus_icon.png')}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#F9F9FB',
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 8,
  },

  moodScrollContainer: {
    marginVertical: 16,
    marginBottom: 12,
    backgroundColor: '#123fac',
    width: '100%',
    padding: 16,
  },

  headerText: {
    fontSize: 20,
    color: 'black',
    marginStart: 16,
  },

  boxContainer: {
    width: '100%',
    height: '15%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.splash_background,
  },

  cardContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  divider: {
    marginTop: 10,
    marginBottom: 10,
  },
  moodText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sentencesText: {
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center', // Center the image horizontally
  },
  logYourMoodButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '50%',
    height: '7.5%',
    backgroundColor: '#4C9FC1',
    alignSelf: 'center',
    borderRadius: 16,
  },
  logYourMoodText: {
    color: 'white',
  },
});
