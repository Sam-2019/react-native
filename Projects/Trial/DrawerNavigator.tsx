
import * as React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from './TabNavigator'
import { SettingStackNavigator } from './Stacks'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="Settings" component={SettingStackNavigator} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator