
import * as React from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
import { Props } from '../Props'
import { styles } from '../Styles'

const HomeScreen: React.FC<Props> = (props) => {
    return (
        <ScrollView>
            <View style={styles.container}>
      
                <Button
                    title="Go to Details"
                    onPress={() => props.navigation.navigate('Details')}
                />
            </View>
        </ScrollView>
    );
}

export default HomeScreen