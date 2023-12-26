// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet } from 'react-native';

// const Login = ({ onLogin }) => {
//   const [email, setEmail] = useState('');

//   const handleLogin = () => {
//     // Implement your login logic here
//     console.log('Login pressed with email:', email);

//     // Assuming login is successful, trigger the onLogin callback
//     onLogin();
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your email"
//         onChangeText={(text) => setEmail(text)}
//         value={email}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />
//       <Button title="Login" onPress={handleLogin} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   input: {
//     height: 40,
//     width: '100%',
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 16,
//     paddingLeft: 8,
//   },
// });

// export default Login;


// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

// const Login = ({ onLogin }) => {
//   const [email, setEmail] = useState('');

//   const handleLogin = async () => {
//     try {
//       // Check if email is provided
//       if (!email) {
//         Alert.alert('Error', 'Please enter your email');
//         return;
//       }

//       // Send a request to the API
//       const response = await fetch(`http://192.168.18.150:5000/get_user_data?email=${email}`);
//       const data = await response.json();

//       // Check if the API request was successful
//       if (response.ok) {
//         // Assuming your API returns a 'user_data' field
//         const user_data = data.user_data;

//         // Check if user_data is present
//         if (user_data) {
//           // Show a success alert
//           Alert.alert('Success', 'Login successful');

//           // Trigger the onLogin callback with user_data
//           onLogin(user_data);
//         } else {
//           // Show an alert if user_data is not present
//           Alert.alert('Error', 'User not found. Please register first.');
//         }
//       } else {
//         // Show a general error alert for other API errors
//         Alert.alert('Error', data.error || 'An unexpected error occurred');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       Alert.alert('Error', 'An unexpected error occurred');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your email"
//         onChangeText={(text) => setEmail(text)}
//         value={email}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />
//       <Button title="Login" onPress={handleLogin} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   input: {
//     height: 40,
//     width: '100%',
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 16,
//     paddingLeft: 8,
//   },
// });

// export default Login;


import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Log local storage data when the component mounts
    logLocalStorageData();
  }, []);

  const logLocalStorageData = async () => {
    try {
      // Retrieve data from local storage
      const storedUserData = await AsyncStorage.getItem('user_data');

      // Log the data to the console
      if (storedUserData) {
        console.log('User Data in Local Storage:', JSON.parse(storedUserData));
      } else {
        console.log('No user data found in local storage.');
      }
    } catch (error) {
      console.error('Error retrieving data from local storage:', error);
    }
  };

  const handleLogin = async () => {
    try {
      // Check if email is provided
      if (!email) {
        Alert.alert('Error', 'Please enter your email');
        return;
      }

      // Send a request to the API
      const response = await fetch(`http://192.168.80.12:5000/get_user_data?email=${email}`);
      const data = await response.json();

      const user_data = data.user_data;


      // Check if the API request was successful
      if (email === data?.user_data?.email) {
        AsyncStorage.setItem('email', user_data.email)
          .then(() => {
            navigation.navigate('MedicalRecords');
          })
          .catch(error => {
            console.error('Error storing email in AsyncStorage:', error);
          });
      }

      if (response.ok) {
        // Assuming your API returns a 'user_data' field



        // Check if user_data is present
        if (user_data) {
          // Save user_data to local storage
          await AsyncStorage.setItem('user_data', JSON.stringify(user_data));

          // Show a success alert
          Alert.alert('Success', 'Login successful');




          // Trigger the onLogin callback with user_data
          // onLogin(user_data);

          // Log local storage data
          // logLocalStorageData();
        } else {
          // Show an alert if user_data is not present
          Alert.alert('Error', 'User not found. Please register first.');
        }
      } else {
        // Show a general error alert for other API errors
        Alert.alert('Error', data.error || 'An unexpected error occurred');
      }
    } catch (error) {
      console.error('Error during login:', error);
      Alert.alert('Error', 'An unexpected error occurred');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
});

export default Login;
