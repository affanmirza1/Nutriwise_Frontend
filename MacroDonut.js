import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

const MacroDonut = () => {
  const carbs = 150;
  const protein = 80;
  const fats = 50;
  const totalCalories = 1500;

  const data = [
    {
      key: 1,
      amount: carbs,
      svg: { fill: '#4CAF50' },
    },
    {
      key: 2,
      amount: protein,
      svg: { fill: '#2196F3' },
    },
    {
      key: 3,
      amount: fats,
      svg: { fill: '#FFC107' },
    },
  ];

  return (
    <View style={styles.container}>
      <PieChart
        style={styles.pieChart}
        data={data}
        innerRadius="60%"
        padAngle={0.03}
      />
      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: '#4CAF50' }]} />
          <Text style={styles.legendText}>{carbs}g Carbs</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: '#2196F3' }]} />
          <Text style={styles.legendText}>{protein}g Protein</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: '#FFC107' }]} />
          <Text style={styles.legendText}>{fats}g Fats</Text>
        </View>
      </View>
      <Text style={styles.caloriesText}>{totalCalories} Calories</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  pieChart: {
    height: 200,
    width: 200,
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendColor: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 5,
  },
  legendText: {
    fontSize: 14,
  },
  caloriesText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default MacroDonut;
