import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import UserProfile from '../screens/User';
import Colors from '../components/Colors';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          position: 'absolute',

          paddingBottom: 7,
        },
        tabBarHideOnKeyboard: true,

        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'UserProfile') {
            iconName = focused ? 'ios-person-add' : 'ios-person-add-outline';
          }
          return <Ionicons name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: Colors.red,
        tabBarInactiveTintColor: '#1D2128',

        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="UserProfile" component={UserProfile} />
    </Tab.Navigator>
  );
};
export default BottomTabs;
