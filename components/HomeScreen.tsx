
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export interface Props {
    navigation: any;
    route: any
}

const HomeScreen: React.FC<Props> = ({ navigation, route }) => {

    React.useEffect(() => {
        if (route.params?.post) { }
    }, [route.params?.post]);

    return (
        <View style={home.container}>
            <Text>
                Home Screen
        </Text>

            <Button title='Create Post' onPress={() => navigation.navigate('CreatePost')} />
            
            <Button
                title='Go to Details'
                onPress={() => navigation.navigate('Details',
                    {
                        // itemId: 86,
                        otherParam: 'anything you want here'
                    })}>
            </Button>

            <Text style={{ margin: 10 }}>
                Post: {route.params?.post}
            </Text>

        </View>
    )
}

export default HomeScreen

const home = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})