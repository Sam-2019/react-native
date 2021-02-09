import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import CryptoItem from './crypto-item'
import axios from 'axios';

const Crypto = () => {
    return (
        <View style={styles.container}>

            <Text style={styles.head}>Cryptocurrencies</Text>

            <View style={styles.list}>

                <View style={styles.name}>
                    <Text> Name</Text>
                </View>

                <View style={styles.symbol}>
                    <Text >Symbol</Text>
                </View>

                <View style={styles.price_usd}>
                    <Text >Price (US$)</Text>
                </View>

            </View>

            <DataFetch />

        </View>
    )
}

export default Crypto

// function DataHardCoded() {
//     return (
//         <View>
//             <FlatList
//                 data={[
//                     { key: '1', name: 'Bitcoin', symbol: 'BTC', price_usd: '16735.96' },
//                     { key: '2', name: 'Bitcoin Cash', symbol: 'BT Cash', price_usd: ' 506.64' },
//                     { key: '3', name: 'Etherium', symbol: 'ETH', price_usd: '0.521819' },
//                     { key: '4', name: 'Ripple', symbol: 'XRP', price_usd: '1.00' },
//                     { key: '5', name: 'DogeCoin', symbol: 'DC', price_usd: '2.0' },
//                 ]}
//                 renderItem={({ item }) => <CryptoItem  {...item} />}
//             />
//         </View>
//     );
// }

function DataFetch() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {

        async function getUser() {
            try {
                const response = await axios({
                    method: 'post',
                    url: 'https://api.coinlore.net/api/tickers/',
                });
                console.log((response.data.data));
                setLoading(false);
                setData((response.data.data));
            } catch (error) {
                console.error(error);
            }
        }; getUser();
    }, []);

    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => <CryptoItem {...item} />} />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'aliceblue',
        flex: 1
    },
    head: {
        paddingVertical: 15,
        textAlign: 'center',
        color: 'black',
        fontWeight: '700',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    list: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 5,

    },
    name: {
        width: 120
    },
    symbol: {
        width: 60
    },
    price_usd: {
        width: 70,
    }
});