import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer ,createSwitchNavigator } from 'react-navigation';
import WelcomeScreen from './screens/welcomeScreen';
import {AppDrawerNavigator} from './components/AppDrawerNavigator';

export default function App() {
  return (
   
    <AppContainer/>
 
  );
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen: {
    screen: WelcomeScreen
  },
  Drawer: {
    screen: AppDrawerNavigator
  }
  
});

const AppContainer= createAppContainer(switchNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

