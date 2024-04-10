//Name: Isaac-Reli Castro
//Student No.: 880942665
//Date: 21/01/24

// This page will primarily focus on displaying the
// selected staff's details

import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';

// Getting the width of the device's screen
const { width } = Dimensions.get('window');

// The main function of viewing the staff's details
const EmployeeDetails = ({ route, navigation }) => {
    const employee = route.params.employee; // Gets the employee data passed from the previous screen

 // a function to navigate to the edit profile screen with the current employee details
 const navigateToEdit = () => {
    navigation.navigate("dit Details", { EmployeeDetails: employee });
  };

// A function to handle the deletion of an employee
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this profile?");
    if (!confirmDelete) {
      return; // If the user select cancels, the application won't do anything
}

// Try to send a request to the server to delete the employee
try {
    const response = await fetch('http://localhost:44350/helloworldWebService1.asmx?op=DeleteEmployee', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: employee.Id }), // Send employee ID for deletion
});

// Check if the deletion was successful
if (response.ok) {
    alert('Employee deleted successfully');
    navigation.navigate("Staff Directory"); // Navigate back to the staff directory
  } else {
    alert('Failed to delete employee');
  }
} catch (error) {
  console.error(error);
  alert('An error occurred while trying to delete the employee');
}
};


// This function is for the cancel button, it just goes back to the previous screen
const handleCancel = () => {
navigation.goBack(); // Go back to the previous screen
};  


// Layout of the employee details screen
return (
<View style={styles.container}>
  <View style={styles.content}>
    <Image source={require('./assets/images/profile.png')} style={styles.logo}/>
    <Text style={styles.name}>{employee.Name}</Text>
    <Text style={styles.Departmentname}>{employee.Department.Name}</Text>
    <View style={styles.detailsContainer}>
      <Text style={styles.detailsText}>Phone: {employee.Phone}</Text>
      <Text style={styles.detailsText}>Street: {employee.Street}</Text>
      <Text style={styles.detailsText}>City: {employee.City}</Text>
      <Text style={styles.detailsText}>State: {employee.State}</Text>
      <Text style={styles.detailsText}>Zip: {employee.Zip}</Text>
      <Text style={styles.detailsText}>Country: {employee.Country}</Text>
    </View>
  </View>


  <View style={styles.buttonContainer}>

    {/* A style that wraps around the two buttons */}        
    <View style={styles.buttonRow}>
              
      {/* EDIT button */}
      <TouchableOpacity style={[styles.button, styles.editButton]} onPress={navigateToEdit}>
        <Text style={styles.buttonText}>EDIT</Text>
      </TouchableOpacity>
              
      {/* DELETE button */}
      <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={handleDelete}>
        <Text style={styles.buttonText}>DELETE</Text>
      </TouchableOpacity>

    </View>


    {/* CANCEL button */}
    <TouchableOpacity
      style={[styles.button, styles.cancelButton]} onPress={handleCancel}>
      <Text style={styles.buttonText}>CANCEL</Text>
    </TouchableOpacity>

  </View>

</View>
);
};

// Style settings for the layout
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
content: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
paddingHorizontal: 20,
},
logo: {
width: width * 0.3,
height: width * 0.3,
// resizeMode: 'contain',
},
name: {
fontSize: 28,
fontWeight: 'bold',
marginTop: 10,
},
Departmentname: {
fontSize: 22,
marginTop: 10,
},
detailsContainer: {
alignItems: 'left', // Center align details
marginTop: 20,
},  
detailsText: {
fontSize: 22,
color: '#000',
marginTop: 5,
},
buttonContainer: {
width: '100%',
paddingHorizontal: 20,
paddingBottom: 20,
},
buttonRow: {
flexDirection: 'row',
justifyContent: 'space-between',
},
button: {
flex: 1,
paddingVertical: 15,
borderRadius: 5,
alignItems: 'center',
justifyContent: 'center',
},
editButton: {
backgroundColor: 'black',
borderBottomColor: '#02c47d',
borderBottomWidth: 7,
marginRight: 10, // Add some spaces between the buttons
},
deleteButton: {
backgroundColor: 'black',
borderBottomColor: 'red',
borderBottomWidth: 7,
marginLeft: 10, // Add some spaces between the buttons
},
cancelButton: {
backgroundColor: '#595959',
paddingVertical: 15,
borderRadius: 5,
marginTop: 10,
width: '100%', // Takes the full width of the container
},
buttonText: {
color: 'white',
fontSize: 18,
fontWeight: 'bold',
},
});

export default StaffDetails;

