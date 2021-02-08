
import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Crypto from './Projects/Crypto/Crypto'


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Cryptocurrencies</Text>

      <Crypto />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
