import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Crypto = () => {
    return (
        <View style={styles.container}>
            <Text>
                Hello
  </Text>
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