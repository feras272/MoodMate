import {View} from 'react-native';
import React from 'react';

const Seperator = ({height, width, backgroundColor, marginHorizontal, marginVertical}) => {
  return (
    <View
      style={{
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        marginHorizontal: marginHorizontal,
        marginVertical: marginVertical
      }}></View>
  );
};

export default Seperator;
