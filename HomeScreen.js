import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import Loginscreen from './LoginScreen';
import Account from './CreateAcc';
import Explore from './Explore';
import Feedback from './FeedBackScreen';

export default class Homescreen extends React.Component {
    render() {
        return (
            <View>
                <View>
                    <Text style={styles.appTitleText}>RestoApp</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={this.props.navigation.navigate(Loginscreen)}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {this.props.navigation.navigate(Account)}>
                        <Text>Create Account</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress = {this.props.navigation.navigate(Explore)}>
                        <Text>Explore</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {this.props.navigation.navigato(Feedback)}>
                        <Text>Feedback</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}