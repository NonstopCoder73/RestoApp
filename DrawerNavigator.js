import * as React from 'react';
import {View, Text, Button} from 'react-native';
import Logout from '../screens/Logout';
import Homescreen from '../screens/HomeScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen
                name = "Restofood"
                component = {Logout}
            />
            <Drawer.Screen
                name = "Feedback"
                component = {Homescreen}
            />
            {/* <Drawer.Screen
                name = "Logout"
                component = {StackNavigator}
            />
            <Drawer.Screen
                name = "help"
                component = {StackNavigator}
            /> */}
        </Drawer.Navigator>
    )
}
export default DrawerNavigator;