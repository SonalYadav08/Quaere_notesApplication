import React, {useState} from 'react';
import {View, TextInput, SafeAreaView, StyleSheet,useColorScheme} from 'react-native';
import MyButton from '../components/mybutton';
import Colors from '../components/Colors';
const AddDescriptions = ({navigation, route}) => {
  const [Description, setDescription] = useState('');

  const title = route.params.notesTitle;

  const onSaveNote = () => {
    route.params.addnotesDescription(Description, title);
    navigation.goBack();
  };
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{flex: 1, backgroundColor:isDarkMode?Colors.black: Colors.white}}>
      <HeaderBar
        onPress={() => navigation.goBack()}
        headerTitle={'Add Description'}
      />
      <View
        style={{
          marginTop: 20,
        }}>
        <View style={styles.inputview}>
          <TextInput
            value={Description}
            multiline={true}
            onChangeText={setDescription}
            placeholder={'write a description here'}
          />
        </View>
        <MyButton titlebutton={'Save'} onPress={() => onSaveNote()} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  inputview: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignSelf: 'center',
    borderWidth: 1,
    height: 145,
    width: '90%',
    borderRadius: 10,
    marginTop: 8,
    borderColor: Colors.gray,
  },
});
export default AddDescriptions;
