
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const RegisterPage = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [heightCm, setHeightCm] = useState('');
  const [weightKg, setWeightKg] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [activityLevel, setActivityLevel] = useState(null);
  const [open, setOpen] = useState(false);

  const activityLevels = [
    { label: 'Sedentary', value: 'sedentary' },
    { label: 'Light Activity', value: 'light activity' },
    { label: 'Moderate Activity', value: 'moderate activity' },
    { label: 'Very Active', value: 'very active' },
  ];

  const handleRegister = async () => {
    try {
      if (!name || !email || !heightCm || !weightKg || !age || !gender || !activityLevel) {
        Alert.alert('Error', 'Please fill in all fields');
        return;
      }

      const data = {
        name,
        email,
        height_cm: parseFloat(heightCm), // Convert to float
        weight_kg: parseFloat(weightKg), // Convert to float
        age: parseFloat(age), // Convert to float
        gender,
        activity_level: activityLevel.trim(),
      };

      const response = await fetch('http://192.168.18.175:5000/calculate_bmr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('API Response:', JSON.stringify(result));

        navigation.navigate('Login');
      } else {
        Alert.alert('Error', 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      Alert.alert('Error', 'An unexpected error occurred. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
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
        onChangeText={(text) => setHeightCm(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        onChangeText={(text) => setWeightKg(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        onChangeText={(text) => setAge(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        onChangeText={(text) => setGender(text)}
      />
      <TouchableOpacity style={styles.input} onPress={() => setOpen(!open)}>
        <Text>{activityLevel ? activityLevel : "Select Activity Level"}</Text>
      </TouchableOpacity>
      {open && (
        <View style={styles.dropdown}>
          {activityLevels.map((item) => (
            <TouchableOpacity
              key={item.value}
              onPress={() => {
                setActivityLevel(item.value);
                setOpen(false);
              }}
            >
              <Text>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    padding: 10,
  },
  dropdown: {
    marginTop: 2,
    width: '80%',
    borderColor: '#3498db',
    borderWidth: 1,
    borderRadius: 5,
    position: 'relative',
    backgroundColor: '#dcecfa',
    zIndex: 1,
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
