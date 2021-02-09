
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Screens/Home'
import SettingsScreen from './Screens/Settings'
import DetailsScreen from './Screens/Details'

// const HomeStack = createStackNavigator();
// const SettingsStack = createStackNavigator();

// export function HomeStackScreen() {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen name="Home" component={HomeScreen}  />
//       <HomeStack.Screen name="Details" component={DetailsScreen} />
//     </HomeStack.Navigator>
//   );
// }

// export function SettingsStackScreen() {
//   return (
//     <SettingsStack.Navigator>
//       <SettingsStack.Screen name="Settings" component={SettingsScreen} />
//       <SettingsStack.Screen name="Details" component={DetailsScreen} />
//     </SettingsStack.Navigator>
//   );
// }

const Stack = createStackNavigator();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export const SettingStackNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}