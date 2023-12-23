// import React, { useState, useEffect, useRef } from 'react';
// import { StyleSheet, View, TouchableOpacity, ActivityIndicator, Text } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { Camera } from 'expo-camera';
// import CameraComponent from './Components/Camera';
// import CapturedImageComponent from './Components/CapturedImage';
// import MacrosComponent from './Components/Macros';
// import NutrientsComponent from './Components/Nutrients';
// import MenuBar from './Components/Togglebutton';
// import EntryPage from './Components/EntryPage';
// import Login from './Components/Login';
// import RegisterPage from './Components/RegisterPage';

// export default function MainApp() {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [showCamera, setShowCamera] = useState(false);
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [showMacros, setShowMacros] = useState(true);
//   const [showNutrients, setShowNutrients] = useState(false);
//   const [apiResponse, setApiResponse] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [showEntryPage, setShowEntryPage] = useState(true);
//   const [showLogin, setShowLogin] = useState(false);
//   const [showRegister, setShowRegister] = useState(false);
//   const cameraRef = useRef(null);

//   const macros = {
//     carbs: 50,
//     protein: 30,
//     fats: 20,
//   };

//   const askForCameraPermission = async () => {
//     const { status } = await Camera.requestCameraPermissionsAsync();
//     setHasPermission(status === 'granted');
//   };

//   useEffect(() => {
//     askForCameraPermission();
//   }, []);

//   const handleEntryPageDismiss = () => {
//     setShowEntryPage(false);
//     setShowLogin(true);
//   };
//   const handleEntryPageDismiss1 = () => {
//     setShowEntryPage(false);
//     setShowRegister(true);
//   };

//   const handleLoginSuccess = () => {
//     setShowLogin(false);
//   };

//   const handleRegisterSuccess = () => {
//     setShowRegister(false);
//   };

//   const takePicture = async () => {
//     if (cameraRef.current) {
//       try {
//         const photo = await cameraRef.current.takePictureAsync();
//         setCapturedImage(photo.uri);
//         setIsLoading(true);

//         const data = new FormData();
//         data.append('image', {
//           uri: photo.uri,
//           type: 'image/jpeg',
//           name: 'image.jpg',
//         });

//         fetch('http://192.168.18.150:5000/upload', {
//           method: 'POST',
//           body: data,
//         })
//           .then((response) => response.json())
//           .then((data) => {
//             setApiResponse(data);
//             setIsLoading(false);
//             console.log('API Response:', data);
//           })
//           .catch((error) => {
//             console.error('API Error:', error);
//             setIsLoading(false);
//           });
//       } catch (error) {
//         console.error('Error taking picture:', error);
//         setIsLoading(false);
//       }
//     }
//   };

//   const saveToGallery = async () => {
//     if (capturedImage) {
//       // Implement your logic to save the image to the gallery here
//     }
//   };

//   const closeCamera = () => {
//     setShowCamera(false);
//   };

//   return (
//     <View style={styles.newContainer}>
//       {showEntryPage ? (
//         <EntryPage onLoginPress={handleEntryPageDismiss} onRegisterPress={handleEntryPageDismiss1} />
//       ) : showLogin ? (
//         <Login onLogin={handleLoginSuccess} />
//       ) : showRegister ? (
//         <RegisterPage onRegister={handleRegisterSuccess} />
//       ) : (
//         <View style={styles.container}>
//           <View style={styles.contentContainer}>
//             {!showCamera && (
//               <MenuBar
//                 showMacros={showMacros}
//                 showNutrients={showNutrients}
//                 setShowMacros={setShowMacros}
//                 setShowNutrients={setShowNutrients}
//               />
//             )}

//             {isLoading ? (
//               <ActivityIndicator size="large" color="#0000ff" />
//             ) : !showCamera && !capturedImage ? (
//               showMacros ? (
//                 <MacrosComponent macros={macros} />
//               ) : (
//                 showNutrients && <NutrientsComponent />
//               )
//             ) : showCamera ? (
//               capturedImage ? (
//                 <CapturedImageComponent
//                   capturedImage={capturedImage}
//                   goBack={() => setCapturedImage(null)}
//                   saveToGallery={saveToGallery}
//                   apiResponse={apiResponse}
//                 />
//               ) : (
//                 <CameraComponent cameraRef={cameraRef} takePicture={takePicture} closeCamera={closeCamera} />
//               )
//             ) : null}

//             {!showCamera && !capturedImage && (
//               <TouchableOpacity style={styles.cameraIcon} onPress={() => setShowCamera(true)}>
//                 <Ionicons name="camera" size={50} color="#fff" />
//               </TouchableOpacity>
//             )}
//           </View>
//         </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   newContainer: {
//     flex: 1,
//     backgroundColor: '#eaf7fe',
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#eaf7fe',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingTop: 20,
//   },
//   contentContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cameraIcon: {
//     position: 'absolute',
//     bottom: 20,
//     right: 10,
//     width: 60,
//     height: 60,
//     backgroundColor: 'black',
//     borderRadius: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   // Add other styles as needed
// });


// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import EntryPage from './Components/EntryPage'; // Update the path to the EntryPage component

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <EntryPage />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#eaf7fe',
//   },
// });

// export default App;

import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, ActivityIndicator, Text, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import CameraComponent from './Components/Camera';
// import CapturedImageComponent from './Components/CapturedImage';
// import MacrosComponent from './Components/Macros';
// import NutrientsComponent from './Components/Nutrients';
import MenuBar from './Components/Togglebutton';
import EntryPage from './Components/EntryPage';
import Login from './Components/Login';
import RegisterPage from './Components/RegisterPage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MedicalRecords from './Components/medicalrecords/medicalRecords';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraAction from './Components/trigercamera/CameraAction';

export default function MainApp() {
  const [hasPermission, setHasPermission] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [showMacros, setShowMacros] = useState(true);
  const [showNutrients, setShowNutrients] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // const [showEntryPage, setShowEntryPage] = useState(true);
  // const [showLogin, setShowLogin] = useState(false);
  // const [showRegister, setShowRegister] = useState(false);
  // const cameraRef = useRef(null);

  // const macros = {
  //   carbs: 50,
  //   protein: 30,
  //   fats: 20,
  // };

  const Stack = createNativeStackNavigator();

  const askForCameraPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  useEffect(() => {
    askForCameraPermission();
    // checkLoginStatus(); 
    try {
      // Remove the 'user_data' item from AsyncStorage
      AsyncStorage.removeItem('user_data');
      console.log('Item removed successfully.');
    } catch (error) {
      console.error('Error removing item from AsyncStorage:', error);
    }
  }, []);

  const [userData, setUserData] = useState(null); // Add state to hold user data

  // const checkLoginStatus = async () => {
  //   try {
  //     const storedUserData = await AsyncStorage.getItem('user_data');
  //     if (storedUserData) {
  //       const parsedUserData = JSON.parse(storedUserData);
  //       console.log('User Data in Local Storage:', parsedUserData);
  //       setUserData(parsedUserData); // Set user data in state
  //       // You can perform actions based on stored user data
  //     } else {
  //       console.log('No user data found in local storage.');


  //     }
  //   } catch (error) {
  //     console.error('Error checking login status:', error);
  //   }
  // };

  // const handleEntryPageDismiss1 = () => {
  //   setShowEntryPage(false);
  //   setShowRegister(true);
  // };

  const handleLoginSuccess = async (user_data) => {
    // setShowLogin(false);
    // saveUserDataToStorage(user_data);
    // Handle other logic after successful login
  };

  // const handleRegisterSuccess = () => {
  //   setShowRegister(false);
  // };

  // const saveUserDataToStorage = async (user_data) => {
  //   try {
  //     await AsyncStorage.setItem('user_data', JSON.stringify(user_data));
  //   } catch (error) {
  //     console.error('Error saving user data to local storage:', error);
  //   }
  // };

  // const takePicture = async () => {
  //   if (cameraRef.current) {
  //     try {
  //       const photo = await cameraRef.current.takePictureAsync();
  //       setCapturedImage(photo.uri);
  //       setIsLoading(true);

  //       // Retrieve user data from local storage
  //       const storedUserData = await AsyncStorage.getItem('user_data');

  //       // Parse the JSON data
  //       const userData = JSON.parse(storedUserData);

  //       // Extract user's email
  //       const userEmail = userData.email;

  //       const data = new FormData();
  //       data.append('image', {
  //         uri: photo.uri,
  //         type: 'image/jpeg',
  //         name: 'image.jpg',
  //       });

  //       // Include user's email in the API request
  //       data.append('email', userEmail);

  //       fetch('http://192.168.0.100:5000/upload', {
  //         method: 'POST',
  //         body: data,
  //       })
  //         .then((response) => response.json())
  //         .then((data) => {
  //           setApiResponse(data);
  //           setIsLoading(false);
  //           console.log('API Response:', data);
  //         })
  //         .catch((error) => {
  //           console.error('API Error:', error);
  //           setIsLoading(false);
  //         });
  //     } catch (error) {
  //       console.error('Error taking picture:', error);
  //       setIsLoading(false);
  //     }
  //   }
  // };

  // const saveToGallery = async () => {
  //   if (capturedImage) {
  //     // Implement your logic to save the image to the gallery here
  //     console.log('Image saved to gallery');
  //   }
  // };

  // const closeCamera = () => {
  //   setShowCamera(false);
  // };

  return (
    <View style={styles.newContainer}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="EntryPage" component={EntryPage} options={{ title: 'Nutrienest' }} />
          <Stack.Screen name="Register" component={RegisterPage} options={{ title: 'Register' }} />
          <Stack.Screen name="Login" component={Login} options={{ title: 'Log In' }} />
          <Stack.Screen name="MedicalRecords" component={MedicalRecords} options={{ title: 'Medical Records' }} />
          <Stack.Screen name='CameraAction' component={CameraAction} userData={userData} />
        </Stack.Navigator>
      </NavigationContainer >


      {
        // showEntryPage ? (
        //   <EntryPage />
        // ) :
        // showLogin ? (
        //   <Login onLogin={handleLoginSuccess} />
        // ) 
        // : 
        // showRegister ? (
        //   <RegisterPage onRegister={handleRegisterSuccess} />
        // ) 
        // : 
        (<></>
          // <View style={styles.container}>
          //   <View style={styles.contentContainer}>
          //     {!showCamera && (
          //       <MenuBar
          //         showMacros={showMacros}
          //         showNutrients={showNutrients}
          //         setShowMacros={setShowMacros}
          //         setShowNutrients={setShowNutrients}
          //         userData={userData}
          //       />
          //     )}

          //     {isLoading ? (
          //       <ActivityIndicator size="large" color="#0000ff" />
          //     ) : !showCamera && !capturedImage ? (
          //       showMacros ? (
          //         <MacrosComponent userData={userData} />
          //       ) : (
          //         showNutrients && <NutrientsComponent userData={userData} />
          //       )
          //     ) : showCamera ? (
          //       capturedImage ? (
          //         <CapturedImageComponent
          //           capturedImage={capturedImage}
          //           goBack={() => setCapturedImage(null)}
          //           saveToGallery={saveToGallery}
          //           apiResponse={apiResponse}
          //         />
          //       ) : (
          //         <CameraComponent cameraRef={cameraRef} takePicture={takePicture} closeCamera={closeCamera} />
          //       )
          //     ) : null}

          //     {!showCamera && !capturedImage && (
          //       <TouchableOpacity style={styles.cameraIcon} onPress={() => setShowCamera(true)}>
          //         <Ionicons name="camera" size={50} color="#fff" />
          //       </TouchableOpacity>
          //     )}
          //   </View>
          // </View>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  newContainer: {
    flex: 1,
    backgroundColor: '#eaf7fe',
  },
  container: {
    flex: 1,
    backgroundColor: '#eaf7fe',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 20,
    right: 10,
    width: 60,
    height: 60,
    backgroundColor: 'black',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Add other styles as needed
});
