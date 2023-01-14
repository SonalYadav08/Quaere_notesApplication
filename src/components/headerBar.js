import React from 'react';
import {
  Image,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import Colors from './Colors';
import ImageAssets from './ImageAssets';

export default HeaderBar = props => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View
      style={{
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
        width: width,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: height / 14,
      }}>
      <TouchableOpacity onPress={() => props.onPress()}>
        <Image
          source={isDarkMode ? ImageAssets.darkThemeBack : ImageAssets.back}
          resizeMode="center"
          style={{width: isDarkMode ? 20 : 30, height: isDarkMode ? 15 : 30}}
        />
      </TouchableOpacity>
      <Text
        style={{
          color: isDarkMode ? Colors.white : Colors.black,
          fontSize: 16,
          marginStart: 12,
        }}>
        {props.headerTitle}{' '}
      </Text>
    </View>
  );
};

export const {width, height} = Dimensions.get('window');
