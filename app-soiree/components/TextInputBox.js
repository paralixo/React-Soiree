import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class TextInputBox extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return(
            <TextInput 
                style={styles.input}
                autoCorrect = {false}
                onChangeValue = {this.props.onChangeValue}
                value = {this.props.value} 
            />
        )
    }
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#aaa'
    }
})