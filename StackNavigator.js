import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Dashboardscreen from '../screens/DashboardScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="Dashboardscreen" component={StoryScreen} />
      </Stack.Navigator>
    );
  };