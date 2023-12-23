// import React, { useState } from 'react';
// import { View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

// const RegisterPage = ({ onRegister }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleRegister = () => {
//     // Implement your registration logic here
//     console.log('Register pressed with email:', email);

//     // Assuming registration is successful, trigger the onRegister callback
//     onRegister();
//   };
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.heading}>Register</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         onChangeText={(text) => setName(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         onChangeText={(text) => setEmail(text)}
//         keyboardType="email-address"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Height (cm)"
//         onChangeText={(text) => setHeightCm(text)}
//         keyboardType="numeric"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Weight (kg)"
//         onChangeText={(text) => setWeightKg(text)}
//         keyboardType="numeric"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Age"
//         onChangeText={(text) => setAge(text)}
//         keyboardType="numeric"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Gender"
//         onChangeText={(text) => setGender(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Activity Level"
//         onChangeText={(text) => setActivityLevel(text)}
//       />
//       <TouchableOpacity style={styles.button} onPress={handleRegister}>
//         <Text style={styles.buttonText}>Register</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: '#eaf7fe',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     width: '80%',
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 15,
//     padding: 10,
//   },
//   button: {
//     marginTop: 20,
//     padding: 10,
//     backgroundColor: '#3498db',
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default RegisterPage;


import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';

const RegisterPage = ({ onRegister ,navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [heightCm, setHeightCm] = useState('');
  const [weightKg, setWeightKg] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [activityLevel, setActivityLevel] = useState('');

  const handleRegister = async () => {
    try {
      // Check if any of the required fields are empty
      if (!name || !email || !heightCm || !weightKg || !age || !gender || !activityLevel) {
        Alert.alert('Error', 'Please fill in all fields');
        return;
      }

      // Prepare the data object to send to the API
      const data = {
        name,
        email,
        height_cm: heightCm,
        weight_kg: weightKg,
        age,
        gender,
        activity_level: activityLevel.trim(),
      };

      // Send a POST request to the API endpoint
      const response = await fetch('http://192.168.0.100:5000/calculate_bmr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Check if the request was successful (status code 200)
      if (response.ok) {
        const result = await response.json();
        navigation.navigate('Login')

        // Assuming registration is successful, trigger the onRegister callback
        // onRegister();
        console.log('API Response:', JSON.stringify(result));

        // You can use the result if needed (e.g., displaying BMR info)
        console.log('BMR Info:', result.bmr_info);
      } else {
        // Handle error cases
        Alert.alert('Error', 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      Alert.alert('Error', 'An unexpected error occurred. Please try again.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Height (cm)"
        onChangeText={(text) => setHeightCm(parseFloat(text))}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        onChangeText={(text) => setWeightKg(parseFloat(text))}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        onChangeText={(text) => setAge(parseFloat(text))}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        onChangeText={(text) => setGender(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Activity Level"
        onChangeText={(text) => setActivityLevel(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#eaf7fe',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    padding: 10,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegisterPage;
