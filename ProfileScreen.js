import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Post from './Post';
import History from './RestoHis';

export default class Profilescreen extends React.Component {
    render() {
        return (
            <View>
                <View>
                    <TouchableOpacity onPress={this.props.navigation.navigate(Post)}>
                        <Text>
                            Posts/Your posts
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={this.props.navigation.navigate(History)}>
                        <Text>
                            Restaurant history and info
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}