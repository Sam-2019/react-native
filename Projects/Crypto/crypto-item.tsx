import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const CryptoItem = () => {
    return (
        <View style={styles.item}>

            <View style={styles.logoXname}>
                <Text style={styles.logo}> Hello </Text>
                <Text style={styles.name}> Bitcoin </Text>
            </View>

            <Text style={styles.symbol}>BTC</Text>
            <Text style={styles.price}>$16,735.96</Text>
        </View>
    )
}

export default CryptoItem

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 5
    },
    logoXname: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logo: {

    },
    name: {
        fontWeight: '600'
    },
    symbol: {
        borderColor: 'red',
        borderWidth: 1,
    },
    price: {
        fontWeight: '600'
    }
});