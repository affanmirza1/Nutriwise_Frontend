import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const CapturedImageComponent = ({ goBack, saveToGallery, apiResponse, capturedImage }) => {
  const renderNutrientRows = () => {
    if (apiResponse?.nutrition_info) {
      return apiResponse.nutrition_info.map((nutrient, index) => (
        <View key={index} style={styles.nutrientRow}>
          <View style={styles.nutrientValues}>
            <Text style={[styles.nutrientValue, styles.highlightedText]}>{nutrient.calories} Calories</Text>
            <Text style={[styles.nutrientValue, styles.highlightedText]}>{nutrient.carbohydrates_total_g}g Carbs</Text>
            <Text style={[styles.nutrientValue, styles.highlightedText]}>{nutrient.fat_total_g}g Fat</Text>
          </View>
          <View style={styles.nutrientValues}>
            <Text style={[styles.nutrientValue, styles.highlightedText]}>{nutrient.protein_g}g Protein</Text>
            <Text style={[styles.nutrientValue, styles.highlightedText]}>{nutrient.sugar_g}g Sugar</Text>
            <Text style={[styles.nutrientValue, styles.highlightedText]}>{nutrient.fiber_g}g Fiber</Text>
          </View>
        </View>
      ));
    } else {
      return <Text>No nutrient information available</Text>;
    }
  };

  return (
    <ImageBackground
      source={require('../assets/game_ready_fruit__vegetable_asset_pack/wallpaper.jpg')}
      style={{ flex: 1, justifyContent: 'center', backgroundColor: '#f5f5f5' }}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: capturedImage }} style={styles.capturedImage} />
        </View>

        <View style={styles.card}>
          <Text style={styles.heading}>
            <Text style={styles.boldText}>Prediction:</Text>{' '}
            <Text style={[styles.heading, styles.predictionHighlight]}>
              {apiResponse?.prediction ? apiResponse.prediction.charAt(0).toUpperCase() + apiResponse.prediction.slice(1) : 'No prediction available'}
            </Text>
          </Text>

          <View style={styles.nutrientsTable}>
            <View style={styles.tableHeader}>
              <Text style={styles.headerText}>Nutrients</Text>
            </View>
            {renderNutrientRows()}
          </View>
        </View>
      </View>

      <View style={styles.actionsContainer}>
      <TouchableOpacity
  style={styles.okButton}
  onPress={goBack}
>
  <View style={styles.okButtonTextContainer}>
    <Text style={styles.okButtonText}>OK</Text>
  </View>
</TouchableOpacity>

      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
  capturedImage: {
    width: 160,
    height: 160,
    borderRadius: 100,
    resizeMode: 'cover',
    marginBottom: 5,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    padding: 20,
    width: '90%',
    alignSelf: 'center',
    marginBottom: 30,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#1c96c5',
  },

  heading: {
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1c96c5',
    borderBottomWidth: 4,
    borderBottomColor: '#1c96c5',
    //borderBottomStyle: 'dashed',
    paddingBottom: 5,
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
    fontSize: 25,
    fontWeight: 'bold',
    color: '#2b5464',
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
    marginBottom: 10,
    marginTop: 5,
  },
  nutrientValue: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 10,
    marginRight: 5,
    

  },

  highlightedText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  okButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  okButtonTextContainer: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    marginBottom:25,
    width:100,
  },
  okButtonText: {
    fontSize: 20,
    color: 'white',
    marginLeft:27,
  },
  
});

export default CapturedImageComponent;
