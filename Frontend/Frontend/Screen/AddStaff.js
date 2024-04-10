//Name: Isaac-Reli Castro
//Student No.: 880942665
//Date: 21/01/24

// This page will primarily focus on the ability for ROI's
// HR Administrator to add a new staff member into the directory

import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

// Lines of codes that will be able to allow the user to add a brand new staff member
const AddStaff = ({ navigation }) => {

// This is where we can monitor and record all the details of the staff member being entered in
// as it is being filled out,
    const [employee, setEmployee] = useState({
      name: '',
      phoneNumber: '',
      department: '',
      streetAddress: '',
      city: '',
      state: '',
      zip: '',
      country: '',
    });

// These are the valid department numbers that are allow to be inputed
// 0:
// 1:
// 2:
// 3:
// 4:
  const validDepartments = ['0', '1', '2', '3', '4'];

   // This function checks if the entered department number is valid
const handleDepartmentChange = (text) => {
    if (validDepartments.includes(text)) {
      setEmployee({ ...employee, department: text });
    } else if (text.trim() !== '') {
      alert('Invalid department. Valid inputs are 0, 1, 2, 3, 4');
    }
};

 // This function saves the new employee profile when you press the save button
 const handleSave = async () => {
  // First we need to make sure all the fields are filled in
  if (!employee.name || !employee.phoneNumber || !employee.department || !employee.streetAddress || !employee.city || !employee.state || !employee.zip || !employee.country) {
    alert('Please fill out all fields');
    return; // Stop here if any field is not filled out
  }


  // Here we prepare the data to send to the server
  const formData = new URLSearchParams();
  formData.append('id', employee.Id);
  formData.append('name', employee.name);
  formData.append('phone', employee.phoneNumber);
  formData.append('department', employee.department);
  formData.append('street', employee.streetAddress);
  formData.append('city', employee.city);
  formData.append('state', employee.state);
  formData.append('zip', employee.zip);
  formData.append('country', employee.country);


  // Now we send the data to the server
  try {
    const response = await fetch('http://localhost:44350/helloworldWebService1.asmx/AddEmployee', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });
    // Handle the server's response
    if (response.ok) {
      alert('Employee added successfully');
      navigation.navigate("EMPLOYEE DIRECTORY"); // Go to the employee directory screen
    } else {
      const responseText = await response.text();
      console.error('Failed to add employee:', responseText);
      alert('Failed to add employee');
    }
  // If something goes wrong, show an error message
  } catch (error) {
    console.error(error);
    alert('An error occurred');
  }
};


// This function is for the cancel button, it just goes back to the previous screen
const handleCancel = () => {
  navigation.goBack(); // Navigates back to the previous screen
};


// This part is where the screen layout is defined
return (
  // SafeAreaView is a component used in React Native that automatically adjusts 
  // its child components to sit within the safe area boundaries of a screen. 
  <SafeAreaView style={styles.safeArea}> 
    <ScrollView style={styles.container}> {/* creates a scrollable field */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          placeholderTextColor="grey" // Set placeholder text color to grey
          value={employee.name}
          onChangeText={(text) => setEmployee({ ...employee, name: text })}
          style={styles.input}
        />
        <TextInput
          placeholder="Phone Number"
          placeholderTextColor="grey"  
          value={employee.phoneNumber}
          onChangeText={(text) => setEmployee({ ...employee, phoneNumber: text })}
          style={styles.input}
          keyboardType="phone-pad" // Brings up the phone pad when typing in this field
        />
        <TextInput
          placeholder="Department"
          placeholderTextColor="grey" 
          value={employee.department}
          // Calls the function that restricts the input to only allow 0, 1, 2, 3, or 4
          onChangeText={handleDepartmentChange} 
          style={styles.input}
        />
        <TextInput
          placeholder="Street Address"
          placeholderTextColor="grey" 
          value={employee.streetAddress}
          onChangeText={(text) => setEmployee({...employee, streetAddress: text })}
          style={styles.input}
        />
        <TextInput
          placeholder="City"
          placeholderTextColor="grey" 
          value={employee.city}
          onChangeText={(text) => setEmployee({...employee, city: text })}
          style={styles.input}
        />
        <TextInput
          placeholder="State"
          placeholderTextColor="grey" 
          value={employee.state}
          onChangeText={(text) => setEmployee({...employee, state: text })}
          style={styles.input}
        />
        <TextInput
          placeholder="Zip"
          placeholderTextColor="grey" 
          value={employee.zip}
          onChangeText={(text) => setEmployee({...employee, zip: text })}
          style={styles.input}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Country"
          placeholderTextColor="grey"
          value={employee.country}
          onChangeText={(text) => setEmployee({...employee, country: text })}
          style={styles.input}
        />
      </View>
    </ScrollView>


    {/* A style that wraps around the two buttons */}
    <View style={styles.buttonContainer}> 

      {/* SAVE button */}
      <TouchableOpacity style={styles.buttonSave} onPress={handleSave}>
        <Text style={styles.buttonText}>SAVE</Text>
      </TouchableOpacity>

      {/* CANCEL button */}
      <TouchableOpacity style={styles.buttonCancel} onPress={handleCancel}>
        <Text style={styles.buttonText}>CANCEL</Text>
      </TouchableOpacity>

    </View>


  </SafeAreaView>
);
};


// Stylesheet settings for the layout
const styles = StyleSheet.create({
safeArea: {
  flex: 1,
},
container: {
  flex: 1, // Tell the component to take up available space (grow) or shrink down if there's not enough room
  padding: 20, // Creates extra space inside the borders of a component, around the content.
},
inputContainer: {
  marginBottom: 30, // Adds space below the component
},
input: {
  borderWidth: 2, // Set a border of 2 pixels around the component
  borderColor: 'black',
  borderRadius: 5, // Making the corners curve with radius of 5 DIP (Density Independent Pixel)
  padding: 15,
  fontSize: 16,
  color: 'black',
  marginTop: 10, // Adds space above the component
 },
buttonContainer: {
  flexDirection: 'row', // Makes the child element be laid out in a row style instead of columns
  justifyContent: 'space-around', // Places equal space around each item in a row or column.
  paddingVertical: 10,
  backgroundColor: 'white',
},
buttonSave: {
  backgroundColor: 'black',
  padding: 15,
  borderRadius: 5,
  flex: 1,
  marginHorizontal: 5, // An space pushing away from the left and right side of the component
},
buttonCancel: {
  backgroundColor: '#595959', // ROI Grey according to the provided style guide
  padding: 15,
  borderRadius: 5,
  flex: 1,
  marginHorizontal: 5,
},
buttonText: {
  color: 'white',
  textAlign: 'center', // If you center it, the text will sit right in the middle.
  fontSize: 18,
  fontWeight: 'bold',
},
});

export default AddStaff; 


