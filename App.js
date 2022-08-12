import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Homescreen from './screens/HomeScreen';
import Dashboardscreen from './screens/DashboardScreen';
import Loginscreen from './screens/LoginScreen';

 
const AppSwitchNavigator = createSwitchNavigator({
  Homescreen:Homescreen,
  Loginscreen: Loginscreen,
  Dashboardscreen: Dashboardscreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return (
    <View style={styles.container}>
    <AppNavigator/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
