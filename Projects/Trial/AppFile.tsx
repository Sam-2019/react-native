
import * as React from 'react';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator'

const Main = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default Main