import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export interface Props {
    name: string;
    symbol?: string;
    price_usd?: string;
}

const CryptoItem: React.FC<Props> = ({ name, symbol, price_usd }) => {
    return (
        <View style={styles.item}>

            <View style={styles.logoXname}>
                <Text style={styles.logo}> Hello </Text>
                <Text style={styles.name}> {name} </Text>
            </View>

            <Text style={styles.symbol}>{symbol}</Text>
            <Text style={styles.price}>${price_usd}</Text>
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
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 7
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