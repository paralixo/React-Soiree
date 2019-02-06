import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LogInScreen from './screens/LogInScreen.js'
import * as firebase from 'firebase';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <LogInScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

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
