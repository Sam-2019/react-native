
import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Crypto from './Projects/Crypto/Crypto'


export default function App() {

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.head}>Cryptocurrencies</Text>

        <View><Crypto /></View>

      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue'
  },
  head: {
    padding: 10,
    textAlign: 'center',
    backgroundColor: 'aliceblue',
    color: 'black',
    fontWeight: '700',
  }
});
