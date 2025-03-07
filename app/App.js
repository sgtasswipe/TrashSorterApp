import 'react-native-gesture-handler'; // This must be at the top!
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import Screens (Ensure these paths are correct)
import HomeScreen from './HomeScreen';
import SettingsScreen from './settings';
import AboutWaste from './about';
import ImagePickerComponent from './imagePickerComponent';
import SearchComponent from './searchComponent';
import TextUploadScreen from './textinput';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Search" component={SearchComponent} />
        <Tab.Screen name="About Waste" component={AboutWaste} />
        <Tab.Screen name="Upload Image" component={ImagePickerComponent} />
        <Tab.Screen name="Text Input" component={TextUploadScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
