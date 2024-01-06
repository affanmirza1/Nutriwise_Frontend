
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';

const CameraComponent = ({ cameraRef, takePicture, closeCamera }) => {
  return (
    <Camera style={styles.camera} type={Camera.Constants.Type.back} ref={cameraRef}>
      <View style={styles.captureButtonContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={closeCamera}>
          <Ionicons name="close" size={30} color="blue" />
        </TouchableOpacity>
        <View style={styles.captureButtonSpacer} />
        <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
          <Ionicons name="ios-camera" size={50} color="white" />
        </TouchableOpacity>
      </View>
    </Camera>
  );
};

const styles = StyleSheet.create({
  camera: {
    width: '100%',
    aspectRatio: 2.65 / 4,
  },
  captureButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 30,
  },
  captureButtonSpacer: {
    height: 20, // Add some space between the close button and the camera button
  },
  captureButton: {
    width: 70,
    height: 70,
    backgroundColor: 'black',
    borderRadius: 35,
    borderWidth: 5,
    borderColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
  },
});

export default CameraComponent;
