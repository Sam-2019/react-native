
import * as React from 'react';
import {  View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Props } from '../Props'

const NotificationsScreen: React.FC<Props> = () => {
  const navigation = useNavigation()
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }

export default NotificationsScreen