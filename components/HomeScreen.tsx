
import React from 'react';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';


export interface Props {
    navigation: any;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <View style={{
            flex: 1, alignItems: 'center', justifyContent: 'center'
        }}>
            <Text>
                Home Screen
        </Text>
            <Button
                title='Go to Details'
                onPress={() => navigation.navigate('Details')}/>

        </View>
    )
}


export default HomeScreen