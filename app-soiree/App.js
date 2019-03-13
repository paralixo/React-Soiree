import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import LogInScreen from './screens/LogInScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import * as firebase from 'firebase';

import { createStackNavigator, createAppContainer } from 'react-navigation';

const MainNavigator = createStackNavigator({
  LogIn: {screen: LogInScreen },
  Home: {screen: HomeScreen }
});

const App = createAppContainer(MainNavigator);

export default App;
/*export default class Appp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('LogIn')}
        />
        <LogInScreen />
      </View>
    );
  }
}*/

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB5ox1KH01qfi3fggOupFzUQqJP0suCbFE",
  authDomain: "app-soiree.firebaseapp.com",
  databaseURL: "https://app-soiree.firebaseio.com",
  projectId: "app-soiree",
  storageBucket: "app-soiree.appspot.com",
  messagingSenderId: "533024028719"
};
firebase.initializeApp(firebaseConfig);
