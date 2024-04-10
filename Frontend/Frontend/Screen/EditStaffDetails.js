//Name: Isaac-Reli Castro
//Student No.: 880942665
//Date: 21/01/24

// This page will primarily focus on the ability to 
// edit or modify the current exisiting profile of a staff/employee

import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView,
         KeyboardAvoidingView, Platform, Image, Dimensions } from 'react-native';

// Get the width of the device's screen
const { width } = Dimensions.get('window');

// Main function for editing employee profile
const EditStaffDetails = ({ route }) => {
    const navigation = useNavigation(); // This helps us navigate between screens
    const StaffDetails = route.params?.StaffDetails; // Get staff/employee details passed from the previous screen

 // declaring the state for storing and updating employee details
 const [details, setDetails] = useState({
    name: '',
    phoneNumber: '',
    department: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });

  // These are the valid department numbers that are allow to be inputed
  const validDepartments = ['0', '1', '2', '3', '4'];


  // This function checks if the entered department number is valid
  const handleDepartmentChange = (text) => {
    if (validDepartments.includes(text)) {
      setDetails({ ...details, department: text });
    } else if (text.trim() !== '') {
      alert('Invalid department. Valid inputs are 0, 1, 2, 3, 4');
    }
  };

  // This function updates the employee profile when you press the update button
  const handleUpdate = async () => {
    const updatedDetails = {
      id: employeeDetails.Id,
      name: details.name || employeeDetails.Name,
      phone: details.phoneNumber || employeeDetails.Phone,
      department: details.department || employeeDetails.Department,
      street: details.street || employeeDetails.Street,
      city: details.city || employeeDetails.City,
      state: details.state || employeeDetails.State,
      zip: details.zip || employeeDetails.Zip,
      country: details.country || employeeDetails.Country,
    };

    // Attempt to send updated details to the server
    try {
      const response = await fetch('http://localhost:44350/helloworldWebService1.asmx/UpdateEmployee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedDetails),
      });
      // Check response and give feedback to the user
      if (response.ok) {
        alert('Update successful');
        navigation.navigate("Staff Directory"); // Go to employee directory page
      } else {
        alert('Update failed');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred');
    }
    console.log(navigation);
  };
 

  // This function is for the cancel button, it just goes back to the previous screen
  const handleCancel = () => {
    navigation.goBack(); // Go back to the previous screen
  };


  // Layout of the edit profile screen
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView}>

          {/* Image at the top of the page */}
          <Image source={require('./assets/images/addProfile.png')} style={styles.logo}/>
          
          <View style={styles.formContainer}>

            {/* Set the placeholders to employee details */}
            <TextInput
              value={details.name}
              onChangeText={(text) => setDetails({ ...details, name: text })}
              style={styles.input}
              placeholder={"Name: " + (StaffDetails.Name || '')} // Placeholder
              placeholderTextColor="grey" // Set placeholder text color to grey
            />

            <TextInput
              value={details.phoneNumber}
              onChangeText={(text) => setDetails({ ...details, phoneNumber: text })}
              style={styles.input}
              placeholder={"Phone: " + (StaffDetails.Phone || '')} 
              placeholderTextColor="grey" 
            />

            <TextInput
              value={details.department}
              onChangeText={handleDepartmentChange}
              style={styles.input}
              placeholder={"Department: " + (StaffDetails.Department && StaffDetails.Department.Name || '0, 1, 2, 3, 4')} // Placeholder
              placeholderTextColor="grey" 
            />

            <TextInput
              value={details.street}
              onChangeText={(text) => setDetails({ ...details, street: text })}
              style={styles.input}
              placeholder={"Street: " + (StaffDetails.Street || '')} 
              placeholderTextColor="grey"   
            />

            <TextInput
              value={details.city}
              onChangeText={(text) => setDetails({ ...details, city: text })}
              style={styles.input}
              placeholder={"City: " + (StaffDetails.City || '')} 
              placeholderTextColor="grey" 
            />

            <TextInput
              value={details.state}
              onChangeText={(text) => setDetails({ ...details, state: text })}
              style={styles.input}
              placeholder={"State: " + (StaffDetails.State || '')} 
              placeholderTextColor="grey" 
            />

            <TextInput
              value={details.zip}
              onChangeText={(text) => setDetails({ ...details, zip: text })}
              style={styles.input}
              placeholder={"Zip: " + (StaffDetails.Zip || '')} 
              placeholderTextColor="grey" 
            />

            <TextInput
              value={details.country}
              onChangeText={(text) => setDetails({ ...details, country: text })}
              style={styles.input}
              placeholder={"Country: " + (StaffDetails.Country || '')} 
              placeholderTextColor="grey" 
            />

        </View>
      </ScrollView>


      {/* A style that wraps around the two buttons */}
      <View style={styles.buttonContainer}>

        {/* UPDATE button */}
        <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
          <Text style={styles.buttonText}>UPDATE</Text>
        </TouchableOpacity>
        
        {/* CANCEL button */}
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.buttonText}>CANCEL</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
};

// Style settings for the layout
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    marginHorizontal: 20,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    padding: 15,
    fontSize: 16,
    color: 'black',
    marginTop: 10,
   },
  logo: {
    width: width * 0.2, // width is from the Dimensions.get('window').width
    height: width * 0.2, // Adjust the size as needed
    resizeMode: 'contain',
    alignSelf: 'center', // This will center the image
    marginTop: 20, // Add a top margin to space it from the top edge
  }, 

  // button styles below
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', // distributes the child elements in such a way that 
                                    // there is equal space around them
    paddingVertical: 10, // Just like padding, but adds cushion to the top and bottom inside a component only
  },
  updateButton: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: '#595959', // ROI Grey according to the provided style guide
    padding: 15,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center', // Center text horizontally
  },
});

export default EditStaffDetails;
