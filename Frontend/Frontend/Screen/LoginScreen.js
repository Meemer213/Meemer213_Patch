//Name: Isaac-Reli Castro
//Student No.: 880942665
//Date: 21/01/24

//This page solely focus on the login screen when the app first boots up to

import React from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text } from 'react-native';

//These lines of code will serve as the function of the login Screen
const LoginScreen = ({ navigation }) => { 

 // A function to handle what happens when the login button is pressed
 const handlePress = () => {
    navigation.navigate("Staff Directory"); 
    };

// The main layout of the Login Screen
return (
    <View style={styles.container}>

    <Image source={PlaceholderImage} style={styles.logo}/>   {/* Placing the logo */}

    <TextInput placeholder="Username" style={styles.input}
               placeholderTextColor="grey" />  {/* Placing the username text field */}

    <TextInput placeholder="Password" secureTextEntry={true} 
               placeholderTextColor="grey" style={styles.input}/>  {/* Placing the password text field */}

    {/* LOGIN button */}
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>LOGIN</Text>
    </TouchableOpacity>

  </View>
);
};

// percentages are used so the component will scale dynamically to the screensize
const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
},
logo: {
  width: '80%', // Set the width to match the input fields
  height: 120, // You can adjust the height as needed
  resizeMode: 'contain', // This ensures the image scales within the given dimensions
  marginBottom: 30,
},
input: {
  width: '80%',
  height: '7%',
  padding: '5%',
  borderWidth: 2,
  borderColor: 'black',
  marginBottom: 10,
  fontWeight: 'bold',
  color: 'black',
},

button: {      //The various components involved in relation to buttons
  width: '80%',
  height: '8%',
  backgroundColor: 'black',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '2%',
  marginBottom: '2%',
},
buttonText: { //Button texts sizes, colour, and formatting
  fontSize: 18,
  color: 'white',
  fontWeight: 'bold',
  
},
});

export default LoginScreen;






