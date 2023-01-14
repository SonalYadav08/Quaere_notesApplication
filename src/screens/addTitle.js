import React, {useState} from 'react';
import {
  View,
  TextInput,
  SafeAreaView,
  Dimensions,
  useColorScheme,
} from 'react-native';
import HeaderBar from '../components/headerBar';
import MyButton from '../components/mybutton';
import Colors from '../components/Colors';
const {width} = Dimensions.get('window');

const AddTitle = ({navigation, route}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const [noteTitle, setNoteTitle] = useState('');

  const onSaveNote = () => {
    route.params.addNote(noteTitle);
    navigation.goBack();
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
      }}>
      <HeaderBar
        onPress={() => navigation.goBack()}
        headerTitle={'Add Title'}
      />
      <View
        style={{
          marginTop: 20,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <TextInput
          placeholder="Add Note Title here"
          value={noteTitle}
          mode="outlined"
          onChangeText={setNoteTitle}
          style={{
            borderColor: Colors.gray,
            borderWidth: 0.6,
            borderRadius: 8,
            paddingStart: 15,
            height: 40,
            width: width - 40,
            alignSelf: 'center',
          }}
        />
        <MyButton onPress={() => onSaveNote()} titlebutton={'Save'} />
      </View>
    </SafeAreaView>
  );
};

export default AddTitle;
