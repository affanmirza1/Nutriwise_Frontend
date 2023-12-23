import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity, ScrollView, ActivityIndicator, Alert } from 'react-native';
import MenuBar from '../Togglebutton';
import CameraComponent from '../Camera';
import CapturedImageComponent from '../CapturedImage';
import MacrosComponent from '../Macros';
import NutrientsComponent from '../Nutrients';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';



const CameraAction = ({ userData }) => {

    const [hasPermission, setHasPermission] = useState(null);
    const [showCamera, setShowCamera] = useState(false);
    const [capturedImage, setCapturedImage] = useState(null);
    const [showMacros, setShowMacros] = useState(true);
    const [showNutrients, setShowNutrients] = useState(false);
    const [apiResponse, setApiResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const cameraRef = useRef(null);

    const askForCameraPermission = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
    };


    const takePicture = async () => {
        if (cameraRef.current) {
            try {
                const photo = await cameraRef.current.takePictureAsync();
                setCapturedImage(photo.uri);
                setIsLoading(true);

                // Retrieve user data from local storage
                const storedUserData = await AsyncStorage.getItem('user_data');

                // Parse the JSON data
                const userData = JSON.parse(storedUserData);

                // Extract user's email
                const userEmail = userData.email;
                const email = await AsyncStorage.getItem('email')

                const data = new FormData();
                data.append('image', {
                    uri: photo.uri,
                    type: 'image/jpeg',
                    name: 'image.jpg',
                });

                // Include user's email in the API request
                data.append('email', email);

                fetch('http://192.168.0.100:5000/upload', {
                    method: 'POST',
                    body: data,
                })
                    .then((response) => response.json())
                    .then((data) => {
                        setApiResponse(data);
                        setIsLoading(false);
                        // console.log('API Response:', data);
                    })
                    .catch((error) => {
                        console.error('API Error:', error);
                        setIsLoading(false);
                    });
            } catch (error) {
                console.error('Error taking picture:', error);
                setIsLoading(false);
            }
        }
    };

    const saveToGallery = async () => {
        if (capturedImage) {
            // Implement your logic to save the image to the gallery here
            console.log('Image saved to gallery');
        }
    };

    const closeCamera = () => {
        setShowCamera(false);
    };


    userData = async () => {

        return await AsyncStorage.getItem('user_data')
    }

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                {!showCamera && (
                    <MenuBar
                        showMacros={showMacros}
                        showNutrients={showNutrients}
                        setShowMacros={setShowMacros}
                        setShowNutrients={setShowNutrients}
                        userData={userData}
                    />
                )}

                {isLoading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : !showCamera && !capturedImage ? (
                    showMacros ? (
                        <MacrosComponent userData={userData} />
                    ) : (
                        showNutrients && <NutrientsComponent userData={userData} />
                    )
                ) : showCamera ? (
                    capturedImage ? (
                        <CapturedImageComponent
                            capturedImage={capturedImage}
                            goBack={() => setCapturedImage(null)}
                            saveToGallery={saveToGallery}
                            apiResponse={apiResponse}
                        />
                    ) : (
                        <CameraComponent cameraRef={cameraRef} takePicture={takePicture} closeCamera={closeCamera} />
                    )
                ) : null}

                {!showCamera && !capturedImage && (
                    <View style={styles.CameraIconBg}>
                        <TouchableOpacity style={styles.cameraIcon} onPress={() => setShowCamera(true)}>
                            <Ionicons name="camera" size={30} color="#fff" />
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </View>



    )


}

const styles = StyleSheet.create({
    cameraIcon: {
        position: 'relative',
        bottom: 45,
        width: 75,
        height: 75,
        right : 15,
        marginLeft : 'auto',
        backgroundColor: 'black',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },

    CameraIconBg: {
        backgroundColor: '#11B3CF33',
        padding: 10,
    }
})



export default CameraAction;