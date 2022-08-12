    import * as React from 'react';
import {View,Text,Button} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "../navigation/DrawerNavigator";
import Restocard from '../screens/RestoCard';

export default class Dashboardscreen extends React.Component{
    render(){
        return(
            <View>
            <NavigationContainer>
            <DrawerNavigator />
          </NavigationContainer>
          <TouchableOpacity style = {styles.card}onPress = {this.props.navigation.navigate(Restocard)}>
            <Text>
                RestoCard
            </Text>
          </TouchableOpacity>   
          <Text placeholder = "Search"></Text>
          </View>
        )
    }
}

const styles = Stylesheet.create({
    card:{
        
    }
})
// need to create navigation folder
