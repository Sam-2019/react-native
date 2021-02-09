
import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { Props } from '../Props'
import { styles } from '../Styles'

const SettingsScreen: React.FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <Text>Settings!</Text>
            <Button
                title="Go to Details"
                onPress={() => props.navigation.navigate('Details')}
            />
        </View>
    );
}

export default SettingsScreen