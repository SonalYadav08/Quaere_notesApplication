import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ViewMoreNotes from '../screens/viewMoreNotes';
import BottomTabs from './bottomTabs';
import AddDescriptions from '../screens/addDescriptions';
import AddTitle from '../screens/addTitle';
import NotesDescriptions from '../screens/NotesDescriptions';
import UserProfile from '../screens/User';


const Stack = createNativeStackNavigator();

function MainStackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={BottomTabs} />
        <Stack.Screen name="NotesDescriptions" component={NotesDescriptions} />
        <Stack.Screen name="ViewMoreNotes" component={ViewMoreNotes} />
        <Stack.Screen name="AddTitle" component={AddTitle} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="AddDescriptions" component={AddDescriptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigation;
