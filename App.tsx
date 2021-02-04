import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import DetailsScreen from './components/DetailsScreen'
import CreatePost from './components/CreatePost'
import HomeScreen from './components/HomeScreen'


const Stack = createStackNavigator()

// function LogoTitle() {
//   return(
//     <Image style={{width:50, height:50}} source
//     />
//   )
// }

// function Title() {
//   return (
//     <Text style={{ width: 50, height: 50 }}>  Hello </Text>
//   )
// }

export default function App() {

  if (Platform.Version === 25) {
    console.log('Running on Nougat')
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerStyle: {
          backgroundColor: 'tomato'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}
      >
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name='Details' component={DetailsScreen} options={{ title: 'Details' }} initialParams={{ itemId: 42 }} />
        <Stack.Screen name='CreatePost' component={CreatePost} options={{ title: 'Create Post' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

