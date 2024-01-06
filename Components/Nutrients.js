import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NutrientGraph = ({ nutrientName, value, color, totalValue }) => {
  const barHeight = 11;
  const barWidth = 356;

  let filledWidth = value && totalValue ? (value / totalValue) * barWidth : 0;

  // Check if filledWidth exceeds the total value
  if (filledWidth > barWidth) {
    filledWidth = barWidth;
  }

  const animatedWidth = useState(new Animated.Value(0))[0];

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: filledWidth,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [filledWidth, animatedWidth]);

  const displayValue = value !== undefined ? value.toFixed(2) : 0;
  const displayTotalValue = totalValue !== undefined ? totalValue.toFixed(2) : 0;
  const exceededTotalValue = value > totalValue;

  // Display only the first word of the nutrient name
  const firstWordOfNutrientName = nutrientName.split('_')[0];

  return (
    <View style={styles.nutrientGraph}>
      <View style={styles.nutrientNameContainer}>
        <Text style={[styles.nutrientName, { color: 'black' }]}>{firstWordOfNutrientName}</Text>
        <Text style={[styles.nutrientValueText, { color: 'black' }]}>
          {displayValue}g/{displayTotalValue}g
          {exceededTotalValue && (
            <Text style={{ color: 'red', marginLeft: 5, fontWeight: 'bold', fontSize: 22 }}> !</Text>
          )}
        </Text>
      </View>
      <View style={[styles.nutrientBarContainer, { height: barHeight }]}>
        <View style={[styles.nutrientBarBackground, { width: barWidth }]}>
          <Animated.View
            style={[
              styles.nutrientBar,
              { backgroundColor: color, width: animatedWidth, height: '68%' },
            ]}
          />
          <View
            style={[
              styles.nutrientBarEmpty,
              { width: `${100 - (value / totalValue) * 100}%`, height: '75%' },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

const NutrientsComponent = ({ userData }) => {
  const backgroundImage = require('../assets/game_ready_fruit__vegetable_asset_pack/wallpaper.jpg');
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = await AsyncStorage.getItem('email');

        fetch(`http://192.168.18.175:5000/get_user_data?email=${email}`)
          .then((response) => response.json())
          .then((data) => {
            setApiData(data.user_data);
          })
          .catch((error) => console.error('Error fetching data from API:', error));
      } catch (error) {
        console.error('Error extracting email from local storage:', error);
      }
    };

    fetchData();
  }, []);

  if (!apiData) {
    return <Text>Loading...</Text>;
  }

  const { nutrients_intake, bmr_info } = apiData;

  const nutrientsIntake = nutrients_intake.length > 0 ? nutrients_intake[0][0] : {};

  const mappedNutrientsIntake = {
    calories: nutrientsIntake.calories,
    carbohydrates_total_g: nutrientsIntake.carbohydrates_total_g,
    fat_total_g: nutrientsIntake.fat_total_g,
    fiber_g: nutrientsIntake.fiber_g,
    protein_g: nutrientsIntake.protein_g,
    sodium_mg: nutrientsIntake.sodium_mg,
    sugar_g: nutrientsIntake.sugar_g,
  };

  const mappedTotalNutrients = {
    calories: bmr_info.bmr,
    carbohydrates_total_g: bmr_info.carbohydrate_g,
    fat_total_g: bmr_info.fat_g,
    protein_g: bmr_info.protein_g,
    sugar_g: 100,
    fiber_g: 100,
    sodium_mg: 100,
  };

  const nutrientOrder = [
    'calories',
    'carbohydrates_total_g',
    'fat_total_g',
    'fiber_g',
    'protein_g',
    'sodium_mg',
    'sugar_g',
  ];

  const mappedNutrients = nutrientOrder.map((nutrientName, index) => ({
    nutrientName,
    value: mappedNutrientsIntake[nutrientName],
    color: getNutrientColor(nutrientName),
    totalValue: mappedTotalNutrients[nutrientName],
    key: index,
  }));

  return (
    <ImageBackground
      source={backgroundImage}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View style={styles.container}>
        <Text style={[styles.cardTitle, { color: 'black', }]}>NUTRIENTS</Text>
        <View style={styles.cardContent}>
          {mappedNutrients.map(({ nutrientName, value, color, totalValue, key }) => (
            <NutrientGraph
              key={key}
              nutrientName={nutrientName}
              value={value}
              color={color}
              totalValue={totalValue}
            />
          ))}
        </View>
      </View>
    </ImageBackground>
  );
};

const getNutrientColor = (nutrientName) => {
  const colorMap = {
    calories: '#ffffff',
    carbohydrates_total_g: '#ff7fcc',
    fat_total_g: 'yellow',
    fiber_g: '#ffc21a',
    protein_g: '#1affe8',
    sodium_mg: '#27ae60',
    sugar_g: '#ff5733',
  };

  return colorMap[nutrientName] || '#3498db';
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  cardContent: {
    marginTop: 10,
    alignItems: 'center',
  },
  nutrientGraph: {
    marginBottom: 5,
  },
  nutrientNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nutrientName: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize', // Capitalize the first letter
  },
  nutrientValueText: {
    fontSize: 14,
  },
  nutrientBarContainer: {
    borderRadius: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    marginTop: 5,
  },
  nutrientBar: {
    borderRadius: 5,
  },
  nutrientBarEmpty: {
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
});

export default NutrientsComponent;
