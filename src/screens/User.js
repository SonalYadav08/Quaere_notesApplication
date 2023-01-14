import React from 'react';
import { Text, SafeAreaView,  StyleSheet,useColorScheme} from 'react-native';
import Colors from '../components/Colors';

const UserProfile = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={{...styles.container,backgroundColor:isDarkMode?Colors.black:Colors.white}}>
      <Text style={{fontSize:35,color:Colors.orange,textAlign:'center'}}>User Profile</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
 
    flex: 1,
    justifyContent:'center'
  },
});
export default UserProfile;
