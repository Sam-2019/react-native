import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const CryptoItem = () => {
    return (
        <View style={styles.item}>
            <Text>
                Hello
  </Text>
        </View>
    )
}

export default CryptoItem

const styles = StyleSheet.create({
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'tomato'
    }
});