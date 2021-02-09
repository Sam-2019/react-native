import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export interface Props {
    name: string;
    symbol: string;
    price_usd: string;
}

const CryptoItem: React.FC<Props> = ({ name, symbol, price_usd }) => {
    return (
        <View style={styles.item}>

            <View style={styles.logoXname}>
                <Text style={styles.logo}></Text>
                <Text style={styles.name}> {name}</Text>
            </View>

            <View style={styles.symbol}>
                <Text>{symbol}</Text>
            </View>

            <View style={styles.price}>
                <Text>${price_usd} </Text>
            </View>



        </View>
    )
}

export default CryptoItem

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 7,
    },
    logoXname: {
        flexDirection: 'row',
        width: 120,
    },
    logo: {
    },
    name: {
    },
    symbol: {
        width: 60,
    },
    price: {
        width: 70,
        alignItems: 'flex-end',
    }
});