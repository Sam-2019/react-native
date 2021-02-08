
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Crypto from './Projects/Crypto/Crypto'


export default function App() {

  return (
    <View style={styles.container}>
      <Text>
        Hello
</Text>
      <Crypto />
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato'
  }
});
