import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import CryptoItem from './crypto-item'




const Crypto = () => {
    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <Text style={styles.name}>Name</Text>
                <Text style={styles.symbol}>Symbol</Text>
                <Text style={styles.price}>Price (US$)</Text>
            </View>
            <FlatListBasics2 />

        </View>


    )
}

export default Crypto

const FlatListBasics = () => {
    return (
        <View>
            <FlatList
                data={[
                    { key: 1, name: 'Bitcoin', symbol: 'BTC', price: 16735.96 },
                    { key: 2, name: 'Bitcoin Cash', symbol: 'BT Cash', price: 506.64 },
                    { key: 3, name: 'Etherium', symbol: 'ETH', price: 0.521819 },
                    { key: 4, name: 'Ripple', symbol: 'XRP', price: 1.00 },
                    { key: 5, name: 'DogeCoin', symbol: 'DC', price: 2.0 },
                ]}
                renderItem={({ item }) => <CryptoItem  {...item} />}
            />
        </View>
    );
}

export interface Props {
    id?: number;
    title?: string;
    releaseYear?: string;
}

const FlatListBasics2: React.FC<Props> = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://reactnative.dev/movies.json')
            .then((response) => response.json())
            .then((json) => setData(json.movies))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);


    return (
        <View style={{ flex: 1, padding: 24 }}>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <Text>{item.title}, {item.releaseYear}</Text>
                    )}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        padding: 10,
        borderWidth: 1,
        borderColor: 'yellow',
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