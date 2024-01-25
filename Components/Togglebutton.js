import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ToggleButtons({
  showMacros,
  showNutrients,
  setShowMacros,
  setShowNutrients,
}) {
  return (
    <View style={styles.toggleButtonContainer}>
      <TouchableOpacity
        style={[
          styles.toggleButton,
          showMacros ? styles.activeToggleButton : null,
        ]}
        onPress={() => {
          setShowMacros(true);
          setShowNutrients(false);
        }}
      >
        <Text
          style={showMacros ? styles.activeButtonText : styles.toggleButtonText}
        >
          Macros
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.toggleButton,
          showNutrients ? styles.activeToggleButton : null,
        ]}
        onPress={() => {
          setShowMacros(false);
          setShowNutrients(true);
        }}
      >
        <Text
          style={
            showNutrients ? styles.activeButtonText : styles.toggleButtonText
          }
        >
          Nutrients
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  toggleButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  toggleButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#197cff",
    marginBottom: 10,
    marginRight: 10,
  },
  activeToggleButton: {
    backgroundColor: "#197cff",
  },
  toggleButtonText: {
    color: "black",
    fontWeight: "bold",
  },
  activeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
