//Name: Isaac-Reli Castro
//Student No.: 880942665
//Date: 21/01/24

import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import LoginScreen from './Screen/LoginScreen';
import StaffDirectory from './Screen/StaffDirectory';
import StaffDetails from './Screen/StaffDetails';
import AddStaff from './Screen/AddStaff';
import EditStaffDetails from './Screen/EditStaffDetails';

const stack = createNativeStackNavigator();

//Establishes a navigation list to all the avaliable screens that will be used.

const App = () => {
    return (
        <NavigationContainer>

            <StackActions.Navigator
                initialRouteName="Login Screen" //Instructs the app with its initial page
                screenOptions={{
                    headerTitleAlign: 'center', // Positions the text into the center of the screen
                    headerStyle: {
                    backgroundColor: '#941a1d', // Hex Colour for the header to match the ROI logo
                },
                headerTintColor: '#FFFFFF',
                headerTitleStyle: {
                    fontWeight: 'bold', //Makes the text format bold
                    fontSize: 24,
                },
                headerBackTitleVisible: false,
            }}
        >
            <Stack.Screen
                name="Login Screen"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Staff Directory" component={StaffDirectory}/>
            <Stack.Screen name="Staff Details" component={StaffDetails}/>
            <Stack.Screen name="Add Employee" component={AddStaff}/>
            <Stack.Screen name="Edit Details" componet={EditStaffDetails}/>
            
        </StackActions.Navigator>
        </NavigationContainer>
    );
};

export default App;

