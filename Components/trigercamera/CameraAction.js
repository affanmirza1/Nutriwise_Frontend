import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MenuBar from '../Togglebutton';
import CameraComponent from '../Camera';
import CapturedImageComponent from '../CapturedImage';
import MacrosComponent from '../Macros';
import NutrientsComponent from '../Nutrients';

const CameraAction = ({ userData: propUserData }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [showCamera, setShowCamera] = useState(false);
    const [capturedImage, setCapturedImage] = useState(null);
    const [showMacros, setShowMacros] = useState(true);
    const [showNutrients, setShowNutrients] = useState(false);
    const [apiResponse, setApiResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const cameraRef = useRef(null);

    useEffect(() => {
        askForCameraPermission();
    }, []);

    const askForCameraPermission = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
    };

    const takePicture = async () => {
        if (cameraRef.current) {
            try {
                await cameraRef.current.stopRecording(); // Stop the camera before taking another picture
                const photo = await cameraRef.current.takePictureAsync();
                setCapturedImage(photo.uri);
                setIsLoading(true);

                const storedUserData = await AsyncStorage.getItem('user_data');
                const userData = JSON.parse(storedUserData);
                const email = userData.email;

                const data = new FormData();
                data.append('image', {
                    uri: photo.uri,
                    type: 'image/jpeg',
                    name: 'image.jpg',
                });
                data.append('email', email);

                fetch('http://192.168.18.211:5000/upload', {
                    method: 'POST',
                    body: data,
                })
                    .then((response) => response.json())
                    .then((responseData) => {
                        setApiResponse(responseData);
                        setIsLoading(false);
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

    const getUserData = async () => {
        return await AsyncStorage.getItem('user_data');
    };

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                {!showCamera && (
                    <MenuBar
                        showMacros={showMacros}
                        showNutrients={showNutrients}
                        setShowMacros={setShowMacros}
                        setShowNutrients={setShowNutrients}
                        userData={getUserData}
                    />
                )}

                {isLoading ? (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                ) : !showCamera && !capturedImage ? (
                    showMacros ? (
                        <MacrosComponent userData={getUserData} />
                    ) : (
                        showNutrients && <NutrientsComponent userData={getUserData} />
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
                    <View style={styles.cameraIconBg}>
                        <TouchableOpacity style={styles.cameraIcon} onPress={() => setShowCamera(true)}>
                            <Ionicons name="camera" size={30} color="#fff" />
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
    },
    cameraIcon: {
        position: 'absolute',
        bottom: 45,
        width: 75,
        height: 75,
        right: 15,
        backgroundColor: 'black',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cameraIconBg: {
        backgroundColor: '#11B3CF33',
        padding: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CameraAction;
