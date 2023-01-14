import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
  useColorScheme,
} from 'react-native';

import MyButton from '../components/mybutton';
import {useSelector, useDispatch} from 'react-redux';
import {addDescription} from '../redux/action_reducer';
import ImageAssets from '../components/ImageAssets';
import Share from 'react-native-share';
import HeaderBar from '../components/headerBar';
import Colors from '../components/Colors';
const {width} = Dimensions.get('window');

const NotesDescriptions = ({navigation, route}) => {
  const notesTitle = route.params.item.title;

  const descriptions = useSelector(state => state);

  const dispatch = useDispatch();
  const isDarkMode = useColorScheme() === 'dark';

  const addnotesDescription = (description, noteTitle) => {
    dispatch(addDescription(description, noteTitle));
  };

  //Sharing Link to Social Media
  const mycustomShare = async () => {
    const shareoptions = {
      message: 'This is a test message',
    };
    try {
      const ShareResponse = await Share.open(shareoptions);
    } catch (error) {
      console.log('error', error);
    }
  };

  const date = new Date().toDateString();

  return (
    <SafeAreaView
      style={{
        ...styles.container,
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
      }}>
      <HeaderBar
        onPress={() => navigation.goBack()}
        headerTitle={'Notes Description'}
      />
      <View style={{width: width - 40, flex: 1, alignSelf: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text style={{fontSize: 32, fontWeight: '800', color: Colors.orange}}>
            {notesTitle}
          </Text>
        </View>
        <View style={{borderBottomWidth: 0.5, width: '100%'}}>
          <MyButton
            titlebutton={'Add Notes'}
            buttonstyle={{marginBottom: 10, height: 30}}
            onPress={() =>
              navigation.navigate('AddDescriptions', {
                addnotesDescription,
                notesTitle,
              })
            }
          />
        </View>
        {descriptions.map((item, i) => (
          <View key={i}>
            {notesTitle == item.titleNote && !item.description == '' && (
              <View
                style={{
                  alignSelf: 'center',
                  width: '99%',
                  marginTop: 10,
                  borderWidth: 1,
                  borderColor: Colors.white,
                  padding: 12,
                  borderRadius: 12,
                  backgroundColor: isDarkMode ? Colors.black : Colors.white,
                  elevation: 2,
                }}>
                <Text style={{fontSize: 10, color: Colors.orange}}>{date}</Text>
                <Text
                  numberOfLines={2}
                  style={{fontSize: 12, fontWeight: '500', marginTop: 10}}>
                  {item.description}
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
                  }}>
                  <TouchableOpacity
                    style={{marginTop: 10}}
                    onPress={mycustomShare}>
                    <Image
                      source={ImageAssets.share}
                      resizeMode="center"
                      style={{width: 18, height: 18}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{marginTop: 10}}
                    onPress={() =>
                      navigation.navigate('ViewMoreNotes', {item, date})
                    }>
                    <Text
                      style={{
                        fontSize: 12,
                        color: Colors.orange,
                        fontWeight: '600',
                      }}>
                      {'View note...'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        ))}
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
export default NotesDescriptions;
