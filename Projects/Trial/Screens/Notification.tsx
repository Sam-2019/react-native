
import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { Props } from '../Props'
import { styles } from '../Styles'

const NotificationsScreen: React.FC<Props> = (props) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => props.navigation.goBack()} title="Go back home" />
      </View>
    );
  }

export default NotificationsScreen