import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  TextInput,
  useColorScheme,
} from 'react-native';
import MyButton from '../components/mybutton';
import Colors from '../components/Colors';
const {width, height} = Dimensions.get('window');
const ViewMoreNotes = ({navigation, route}) => {
  const description = route.params.item.description;
  const [des, setDes] = useState(description);
  const [editable, setEditable] = useState(false);

  const isDarkMode = useColorScheme() === 'dark';

  const editNote = () => {
    setDes(des);
    setEditable(true);
  };
  console.log('hjhdw', route.params.date);
  return (
    <SafeAreaView
      style={{
        ...styles.container,
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
      }}>
      <View style={{width: width - 40, flex: 1, alignSelf: 'center'}}>
        <View
          style={{
            marginTop: 30,
            padding: 12,
            borderRadius: 5,
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            shadowColor: isDarkMode ? Colors.white : Colors.black,
            elevation: 5,
            height: 'auto',
          }}>
          <Text style={{fontSize: 10, color: Colors.orange}}>
            {route.params.date}
          </Text>

          <View>
            <TextInput
              style={{
                fontSize: 12,
                fontWeight: '500',
                marginTop: 10,
                textAlign: 'justify',
                color: isDarkMode ? Colors.white : Colors.black,
              }}
              multiline={true}
              editable={editable}
              value={des}
              onChangeText={setDes}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <MyButton
            titlebutton="Save"
            buttonstyle={{marginBottom: 10, height: 30, width: 60}}
          />
          <MyButton
            titlebutton="Edit"
            buttonstyle={{marginBottom: 10, height: 30, width: 60}}
            onPress={editNote}
          />
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
export default ViewMoreNotes;
