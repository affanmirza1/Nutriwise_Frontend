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
import { StyleSheet, View, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CapturedImageComponent = ({ goBack, saveToGallery, apiResponse, capturedImage }) => {
  const renderNutrientRows = () => {
    if (apiResponse?.nutrition_info) {
      return apiResponse.nutrition_info.map((nutrient, index) => (
        <View key={index} style={styles.nutrientRow}>
          <Text style={styles.nutrientLabel}>{nutrient.name}</Text>
          <View style={styles.nutrientValues}>
          <Text style={styles.boldText}>{nutrient.calories} Calories</Text>
          <Text style={styles.boldText}>{nutrient.carbohydrates_total_g}g Carbs</Text>
          <Text style={styles.boldText}>{nutrient.fat_total_g}g Fat</Text>
        </View>
        <View style={styles.nutrientValues}>
          <Text style={styles.boldText}>{nutrient.protein_g}g Protein</Text>
          <Text style={styles.boldText}>{nutrient.sugar_g}g Sugar</Text>
          <Text style={styles.boldText}>{nutrient.fiber_g}g Fiber</Text>
        </View>

        </View>
      ));
    } else {
      return <Text>No nutrient information available</Text>;
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: capturedImage }} style={styles.capturedImage} />
        </View>

        <View style={styles.card}>
        <Text style={styles.heading}>Prediction: {apiResponse?.prediction || 'No prediction available'}</Text>

          <View style={styles.nutrientsTable}>
            <View style={styles.tableHeader}>
              <Text style={styles.headerText}>Nutrient</Text>
              {/* <Text style={styles.headerText}>Values</Text> */}
            </View>
            {renderNutrientRows()}
          </View>
        </View>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity onPress={goBack}>
          <Ionicons name="arrow-back" size={30} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={saveToGallery}>
          <Ionicons name="save" size={30} color="green" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  capturedImage: {
    width: 130,
    height: 130,
    borderRadius: 70,
    resizeMode: 'cover',
    marginBottom: 3,
  },
  card: {
    backgroundColor: '#11B3CF33',
    borderRadius: 10,
    elevation: 5,
    padding: 20,
    width: '90%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  nutrientsTable: {
    marginTop: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  nutrientRow: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingBottom: 10,
  },
  nutrientLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  nutrientValues: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default CapturedImageComponent;
