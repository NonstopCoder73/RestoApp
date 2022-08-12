import * as React from 'react';
import {View,Text,Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Location from './Location';
import Review from './ReviewScreen';


export default class Restocard extends React.Component{
    render(){
        return(
            <View>
                <TouchableOpacity style = {styles.restocard }>
                    <Text>RestoInfo</Text>
                </TouchableOpacity>
                <View>
                    <TouchableOpacity onPress = {this.props.navigation.navigate(Location)}>
                        <Text>Location</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress = {this.props.navigation.navigate(Review)}>
                        <Text>review</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}