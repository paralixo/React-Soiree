import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button , Image} from 'react-native';
import TextInputBox from '../components/TextInputBox.js';
import './logobiere.png'
export default class LogInScreen extends Component {

    state = {
        valueMail: 'Entrez votre email',
        valuePassword: 'Entrez votre mot de passe'
    }

    handleChangeValue = e => console.log(e); //this.setState({value: e.target.value})
    
    _onPressButton(){
        alert('')
    }

    render() {
        return(
            <View>
               <Image 
                source={require('./logobiere.png')}
                />
                <Text>Email ou pseudo</Text>
                <TextInputBox 
                    valueMail={this.state.valueMail}
                    onChangeValue={this.handleChangeValue}
                />
                <Text>Mot de passe</Text>
                <TextInputBox
                    valuePassword={this.state.valuePassword}
                    onChangeValue={this.handleChangeValue}
                />   
                <Button
                title="Connexion"
                onPress={this._onPressButton}
                />
                <Text style={{color: 'blue'}}>Inscrit toi !</Text>
            </View>
        )
    }
}