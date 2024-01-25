import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";

const EntryPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/Animation - 1697478526157.json")}
        autoPlay
        loop
      />
      <TouchableOpacity
        style={styles.button1}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Register");
        }}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#eaf7fe",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: "#3498db",
    borderRadius: 5,
  },
  button1: {
    marginTop: 570,
    padding: 10,
    backgroundColor: "#3498db",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default EntryPage;
