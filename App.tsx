import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import WelcomePage from './components/WelcomePage'

export default function App() {

  if (Platform.Version === 25) {
    console.log('Running on Nougat')
  }

  return (
    <View style={styles.container}>
      <WelcomePage />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'red'
      }, android: {
        backgroundColor: 'green'
      },
      default: {
        backgroundColor: 'blue',
      }
    })
  },
});
