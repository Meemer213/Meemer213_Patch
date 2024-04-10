//Name: Isaac-Reli Castro
//Student No.: 880942665
//Date: 21/01/24

// This Page will solely focus on displaying the list of all the current
// staff members within ROI into a list

import { Text, View, Pressable, StyleSheet, FlatList, TouchableOpacity, Dimensions } from "react-native";
import { useState, useEffect } from "react";

// Gets the width of the device's screen ratio
const { width } = Dimensions.get('window');

// The main function of the employee directory screen
export default function ContactList({ navigation }) {
const [employees, setEmployees] = useState([]) // State to store the list of employees

 // Function to fetch employees from the server
 const fetchEmployees = async (setEmployees) => {
    const response = await fetch("http://localhost:44350/helloworldWebService1.asmx/GetEmployees")
    const json = await response.json();
    setEmployees(json)
  }

// Getting the employee data when we first open this part of the app
fetchEmployees(setEmployees)

// A function to render each employee in the list
const showItems = ({item}) => {
    return <View>
      <Pressable style={styles.smallContainer} onPress={()=> 
        navigation.navigate("Staff Details", { employee: item})}>
        <Text style={styles.nametxt}>{item.Name}</Text>
      </Pressable>
    </View>
  }

 // Layout of the employee details screen
 return (
    <View style={styles.container}>

      {/* FlatList are used to easily populate the list and make it scrollable */}
      <FlatList data= {employees} renderItem = {showItems}
        keyExtractor={(item) => item.Id.toString()}
      />

      {/* ADD button */}
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('ADD STAFF')}>
        <Text style={styles.addButtonText}>ADD</Text>
      </TouchableOpacity>

    </View>

  );
  
}

// Style settings for the layout
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  smallContainer: {
    backgroundColor: '#D9D9D9',
    padding: '4%', // Use percentage for padding
    marginVertical: '2%', // Use percentage for vertical margin
    marginHorizontal: '4%', // Use percentage for horizontal margin
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nametxt: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },
  addButton: {
    backgroundColor: 'black',
    padding: '4%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: '4%',
    marginBottom: '2%',
  },
  addButtonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },

});

