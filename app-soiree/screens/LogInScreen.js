import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import TextInputBox from '../components/TextInputBox.js'

export default class LogInScreen extends Component {

    state = {
        value: ''
    }

    handleChangeValue = e => console.log(e);//this.setState({value: e.target.value})
    
    render() {
        return(
            <View>
                <Text>Bonjour</Text>
                <TextInputBox 
                    value={this.state.value}
                    onChangeValue={this.handleChangeValue}
                />
            </View>
        )
    }
}