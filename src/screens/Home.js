import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  Image,
} from 'react-native';
import ImageAssets from '../components/ImageAssets';
const {width} = Dimensions.get('window');
import {addnote} from '../redux/action_reducer';
import {useSelector, useDispatch} from 'react-redux';
import Colors from '../components/Colors';

const Home = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const title = useSelector(state => state);
  const dispatch = useDispatch();

  const addNote = note => {
    dispatch(addnote(note));
  };

  return (
    <SafeAreaView
      style={{
        ...styles.container,
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
      }}>
      <View style={{width: width - 40, flex: 1, alignSelf: 'center'}}>
        <View style={{marginTop: 40, flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 32,
              fontWeight: '800',
              color: isDarkMode ? Colors.pink : Colors.orange,
            }}>
            {'My'}
          </Text>
          <Text
            style={{
              marginStart: 12,
              fontSize: 32,
              fontWeight: '800',
              color: isDarkMode ? Colors.lightblue : Colors.blue,
              // color: 'darkblue',
            }}>
            {'Notes'}
          </Text>
        </View>

        {title.map((item, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => navigation.navigate('NotesDescriptions', {item})}>
            {!item.title == '' && (
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 26,
                    fontWeight: '600',
                    color: isDarkMode ? Colors.lightblue : Colors.blue,
                  }}>
                  {item.title}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        ))}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            position: 'absolute',
            bottom: 55,
            width: width - 40,
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <TouchableOpacity>
            <Image
              source={isDarkMode ? ImageAssets.darkThemeMenu : ImageAssets.menu}
              resizeMode="contain"
              style={{width: 24, height: 24}}
            />
            <Text
              style={{
                color: isDarkMode ? Colors.pink : Colors.orange,
                fontSize: 12,
              }}>
              {'Menu'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('AddTitle', {addNote})}>
            <Image
              source={ImageAssets.plus}
              resizeMode="contain"
              style={{width: 50, height: 50}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
});
export default Home;
