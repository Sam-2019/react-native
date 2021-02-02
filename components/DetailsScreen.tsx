import React from "react";
import { Platform, StyleSheet, View, Text, Button } from 'react-native';

export interface Props {
    navigation: any;
}

const DetailsScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <View style={{
            flex: 1, alignItems: 'center', justifyContent: 'center'
        }}>
            <Text>
                Details Screen
        </Text>
            <Button title='Go to Home' onPress={
                () => {
                    navigation.navigate('Home')
                }
            } />
        </View>
    )
}

export default DetailsScreen