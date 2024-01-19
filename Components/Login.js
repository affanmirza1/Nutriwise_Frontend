import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ImageBackground,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const backgroundImage = require("../assets/game_ready_fruit__vegetable_asset_pack/background.jpg");

  useEffect(() => {
    logLocalStorageData();
  }, []);

  const logLocalStorageData = async () => {
    try {
      const storedUserData = await AsyncStorage.getItem("user_data");

      if (storedUserData) {
        console.log("User Data in Local Storage:", JSON.parse(storedUserData));
      } else {
        console.log("No user data found in local storage.");
      }
    } catch (error) {
      console.error("Error retrieving data from local storage:", error);
    }
  };

  const handleLogin = async () => {
    try {
      if (!email) {
        Alert.alert("Error", "Please enter your email");
        return;
      }

      const response = await fetch(
        `http://184.72.73.229:5001/get_user_data?email=${email}`
      );
      const data = await response.json();

      const user_data = data.user_data;

      if (email === data?.user_data?.email) {
        AsyncStorage.setItem("email", user_data.email)
          .then(() => {
            navigation.navigate("MedicalRecords");
          })
          .catch((error) => {
            console.error("Error storing email in AsyncStorage:", error);
          });
      }

      if (response.ok) {
        if (user_data) {
          await AsyncStorage.setItem("user_data", JSON.stringify(user_data));

          Alert.alert("Success", "Login successful");
        } else {
          Alert.alert("Error", "User not found. Please register first.");
        }
      } else {
        Alert.alert("Error", data.error || "An unexpected error occurred");
      }
    } catch (error) {
      console.error("Error during login:", error);
      Alert.alert("Error", "An unexpected error occurred");
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.customButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 20,
  },
  customButton: {
    backgroundColor: "#197cff",
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Login;
