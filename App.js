import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Text,
  Alert,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MenuBar from "./Components/Togglebutton";
import EntryPage from "./Components/EntryPage";
import Login from "./Components/Login";
import RegisterPage from "./Components/RegisterPage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MedicalRecords from "./Components/medicalrecords/medicalRecords";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CameraAction from "./Components/trigercamera/CameraAction";

export default function MainApp() {
  const [hasPermission, setHasPermission] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [showMacros, setShowMacros] = useState(true);
  const [showNutrients, setShowNutrients] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const Stack = createNativeStackNavigator();

  const askForCameraPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === "granted");
  };

  useEffect(() => {
    askForCameraPermission();

    try {
      // Remove the 'user_data' item from AsyncStorage
      AsyncStorage.removeItem("user_data");
      console.log("Item removed successfully.");
    } catch (error) {
      console.error("Error removing item from AsyncStorage:", error);
    }
  }, []);

  const [userData, setUserData] = useState(null); // Add state to hold user data

  return (
    <View style={styles.newContainer}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="EntryPage"
            component={EntryPage}
            options={{ title: "Nutriwise" }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterPage}
            options={{ title: "Register" }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Log In" }}
          />
          <Stack.Screen
            name="MedicalRecords"
            component={MedicalRecords}
            options={{ title: "Nutriwise" }}
          />
          <Stack.Screen
            name="CameraAction"
            component={CameraAction}
            userData={userData}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  newContainer: {
    flex: 1,
    backgroundColor: "#eaf7fe",
  },
  container: {
    flex: 1,
    backgroundColor: "#eaf7fe",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cameraIcon: {
    position: "absolute",
    bottom: 20,
    right: 10,
    width: 60,
    height: 60,
    backgroundColor: "black",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  // Add other styles as needed
});
