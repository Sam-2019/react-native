
import * as React from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
import { Props } from '../Props'
import { styles } from '../Styles'

const HomeScreen: React.FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <Text>Home!</Text>
            
            <Button
                title="Go to Details"
                onPress={() => props.navigation.navigate('Details')}
            />

            <Button
                onPress={() => props.navigation.navigate('Notification')}
                title="Go to notifications"
            />
            
        </View>
    );
}

export default HomeScreen