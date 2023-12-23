// import React from 'react';
// import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// const CapturedImageComponent = ({ capturedImage, goBack, saveToGallery }) => {
//   return (
//     <View style={styles.imageContainer}>
//       <Image source={{ uri: capturedImage }} style={styles.capturedImage} />
//       <View style={styles.actionsContainer}>
//         <TouchableOpacity onPress={goBack}>
//           <Ionicons name="arrow-back" size={30} color="blue" />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={saveToGallery}>
//           <Ionicons name="save" size={30} color="green" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   imageContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   capturedImage: {
//     width: 400,
//     height: 700,
//     resizeMode: 'contain',
//   },
//   actionsContainer: {
//     flexDirection: 'row',
//     marginTop: 20,
//     justifyContent: 'space-between',
//     width: 150,
//   },
// });

// export default CapturedImageComponent;


// import React from 'react';
// import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// const CapturedImageComponent = ({ capturedImage, goBack, saveToGallery, apiResponse }) => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.imageContainer}>
//         <Image source={{ uri: capturedImage }} style={styles.capturedImage} />
//       </View>
//       <View style={styles.apiResponseContainer}>
//   <Text style={styles.apiResponseText}>Prediction: </Text>
//   <Text style={styles.apiResponsePrediction}>{apiResponse ? apiResponse.prediction : ''}</Text>

//   <Text style={styles.apiResponseText}>Nutrients: </Text>
//   {apiResponse && apiResponse.nutrition_info ? (
//     <View>
//       <Text style={styles.apiResponsePrediction}>
//         Calories: {apiResponse.nutrition_info[0].calories}
//       </Text>
//       <Text style={styles.apiResponsePrediction}>
//         Carbohydrates: {apiResponse.nutrition_info[0].carbohydrates_total_g}
//       </Text>
//       <Text style={styles.apiResponsePrediction}>
//         Fat: {apiResponse.nutrition_info[0].fat_total_g}
//       </Text>
//       <Text style={styles.apiResponsePrediction}>
//         Protein: {apiResponse.nutrition_info[0].protein_g}
//       </Text>
//       <Text style={styles.apiResponsePrediction}>
//         Sugar: {apiResponse.nutrition_info[0].sugar_g}
//       </Text>
//       <Text style={styles.apiResponsePrediction}>
//         Fiber: {apiResponse.nutrition_info[0].fiber_g}
//       </Text>
//     </View>
//   ) : (
//     <Text>No nutrient information available</Text>
//   )}
// </View>

//       <View style={styles.actionsContainer}>
//         <TouchableOpacity onPress={goBack}>
//           <Ionicons name="arrow-back" size={30} color="blue" />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={saveToGallery}>
//           <Ionicons name="save" size={30} color="green" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   imageContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   capturedImage: {
//     width: 400,
//     height: 700,
//     resizeMode: 'contain',
//   },
//   apiResponseContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   apiResponseText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   apiResponsePrediction: {
//     fontSize: 18,
//     marginTop: 13,
//     fontWeight: 'bold',
//     fontStyle: 'italic'
//   },
//   actionsContainer: {
//     flexDirection: 'row',
//     marginBottom: 25,
//     justifyContent: 'space-between',
//     width: 230,
//   },
// });

// export default CapturedImageComponent;

import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity,FlatList, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CapturedImageComponent = ({ capturedImage, goBack, saveToGallery, apiResponse }) => {
  console.log('muAPI', apiResponse)

  return (

    <View style={styles.container}>


      <View style={styles.imageContainer}>
        <Image source={{ uri: capturedImage }} style={styles.capturedImage} />
      </View>
      <View style={styles.apiResponseContainer}>
        <Text style={styles.apiResponseText}>Prediction: {apiResponse?.nutrition_info?.fat_saturated_g} </Text>
        <Text style={styles.apiResponsePrediction}>{apiResponse ? apiResponse.prediction : ''}</Text>

        {
          <Text style={styles.apiResponseText}>Prediction: {apiResponse?.prediction} </Text>
        }

        <FlatList
          data={apiResponse?.nutrition_info}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.nutritionInfoItem}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text>Calories: {item.calories}</Text>
              <Text>Carbohydrates: {item.carbohydrates_total_g}g</Text>
              <Text>Fat: {item.fat_total_g}g</Text>
            </View>
          )}
        />

        <Text style={styles.apiResponseText}>Nutrients: </Text>
        {apiResponse && apiResponse.nutrition_info ? (
          <View>
            <Text style={styles.apiResponsePrediction}>
              Calories: {apiResponse.nutrition_info.calories} |
              Carbohydrates: {apiResponse.nutrition_info[0].carbohydrates_total_g} |
              Fat: {apiResponse.nutrition_info[0].fat_total_g}
            </Text>
            <Text style={styles.apiResponsePrediction}>
              Protein: {apiResponse.nutrition_info[0].protein_g} |
              Sugar: {apiResponse.nutrition_info[0].sugar_g} |
              Fiber: {apiResponse.nutrition_info[0].fiber_g}
            </Text>
          </View>
        ) : (
          <Text>No nutrient information available</Text>
        )}
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity onPress={goBack}>
          <Ionicons name="arrow-back" size={30} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={saveToGallery}>
          <Ionicons name="save" size={30} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  capturedImage: {
    width: 400,
    height: 900,
    top : 300,
    resizeMode: 'cover',
  },
  apiResponseContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  apiResponseText: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#000',
  },
  apiResponsePrediction: {
    fontSize: 18,
    marginTop: 5,
    width: 100,
    backgroundColor: '#000',
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  actionsContainer: {
    flexDirection: 'row',
    marginBottom: 25,
    justifyContent: 'space-between',
    width: 230,
  },
});

export default CapturedImageComponent;
