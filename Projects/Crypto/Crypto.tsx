import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import CryptoItem from './crypto-item'

const Crypto = () => {
    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <Text style={styles.name}>Name</Text>
                <Text style={styles.symbol}>Symbol</Text>
                <Text style={styles.price}>Price (US$)</Text>
            </View>
            <CryptoItem />
            <CryptoItem />
        </View>


    )
}

export default Crypto

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        padding: 10
    },
    list: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
    },
    logoXname: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name: {
        borderColor: 'red',
        borderWidth: 1,
    },
    symbol: {
        borderColor: 'red',
        borderWidth: 1,
    },
    price: {
        borderColor: 'red',
        borderWidth: 1,
    }
});