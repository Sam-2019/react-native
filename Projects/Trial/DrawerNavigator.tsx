
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

import TabNavigator from './TabNavigator'
import { SettingStackNavigator } from './Stacks'

interface Props {
    navigation?: any;
    name?: string;
    children?: React.ReactNode;
}

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
                <Drawer.Screen name="Feed" component={Feed} />
         <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="Settings" component={SettingStackNavigator} /> 
        
        </Drawer.Navigator>
    );
}

export default DrawerNavigator


const Feed: React.FC<Props> = (props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Feed Screen</Text>
            <Button
                title="Open drawer"
                onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}
            />
            <Button
                title="Toggle drawer"
                onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
            />
        </View>
    );
}

const CustomDrawerContent: React.FC<Props> = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Close drawer"
                onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
            />
            <DrawerItem
                label="Toggle drawer"
                onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
            />
        </DrawerContentScrollView>
    );
}