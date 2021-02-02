import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import DetailsScreen from './components/DetailsScreen'

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
        onPress={() => navigation.navigate('Details')}>
      </Button>

    </View>
  )
}


const Stack = createStackNavigator()

export default function App() {

  if (Platform.Version === 25) {
    console.log('Running on Nougat')
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name='Details' component={DetailsScreen} options={{ title: 'Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})