import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-svg-charts'; // You might need to install this package

const MacroDonut = () => {
  // Replace these values with your actual macro values
  const carbs = 150;
  const protein = 80;
  const fats = 50;
  const totalCalories = 1500;

  const data = [
    {
      key: 1,
      amount: carbs,
      svg: { fill: '#00aaff' }, // Light blue for carbs
    },
    {
      key: 2,
      amount: protein,
      svg: { fill: '#ff69b4' }, // Pink for protein
    },
    {
      key: 3,
      amount: fats,
      svg: { fill: '#ffd700' }, // Yellow for fats
    },
  ];

  return (
    <View style={styles.container}>
      <PieChart
        style={styles.pieChart}
        data={data}
        innerRadius="50%"
        padAngle={0.03}
      />
      <View style={styles.macroValues}>
        <Text style={styles.macroText}>{carbs}g Carbs</Text>
        <Text style={styles.macroText}>{protein}g Protein</Text>
        <Text style={styles.macroText}>{fats}g Fats</Text>
        <Text style={styles.caloriesText}>{totalCalories} Calories</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  pieChart: {
    height: 150,
    width: 150,
  },
  macroValues: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  macroText: {
    marginHorizontal: 10,
    color: 'white',
  },
  caloriesText: {
    marginTop: 5,
    color: 'white',
  },
});

export default MacroDonut;
