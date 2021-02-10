
import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Props } from '../Props'
import { styles } from '../Styles'

const SettingsScreen: React.FC<Props> = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text>Settings!</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />

            <Button
                onPress={() => navigation.navigate('Feed')}
                title="Go to feed"
            />
        </View>
    );
}

export default SettingsScreen