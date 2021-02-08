import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import CryptoItem from './crypto-item'

const Crypto = () => {
    return (
        <View style={styles.container}>
            <Text>
                Hello
  </Text>
            <CryptoItem />
        </View>
    )
}

export default Crypto

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'tomato'
    }
});