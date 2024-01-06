import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  ImageBackground,
} from 'react-native';
import {
  Svg,
  Circle,
  Line,
  Text as SvgText,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

const calculateColor = (nutrient, value) => {
  switch (nutrient) {
    case 'protein':
      return value > 50 ? '#ff7fcc' : '#f48fb1'; // Pink if high, light pink if low
    case 'carbs':
      return value > 50 ? '#0077cc' : '#4fc3f7'; // Dark blue if high, light blue if low
    case 'fats':
      return value > 50 ? '#ffc21a' : '#ffd54f'; // Yellow if high, light yellow if low
    default:
      return '#ffffff'; // Default to white if unknown nutrient
  }
};

const MacrosComponent = ({ userData }) => {
  const backgroundImage = require('../assets/game_ready_fruit__vegetable_asset_pack/wallpaper.jpg');
  const radius = 80;
  const animationDuration = 1000;

  const [macros, setMacros] = useState({
    carbs: 0,
    protein: 0,
    fats: 0,
  });

  const [bmrCircumference, setBmrCircumference] = useState(0);

  const [animatedValue] = useState(new Animated.Value(0));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = await AsyncStorage.getItem('email');

        if (userData && email) {
          const response = await fetch(
            `http://192.168.18.175:5000/get_user_data?email=${email}`
          );
          const data = await response.json();

          const bmr = data.user_data.bmr_info.bmr;
          const protein = Math.round(
            data.user_data.nutrients_intake[0][0].protein_g * 4
          );
          const carbs = Math.round(
            data.user_data.nutrients_intake[0][0].carbohydrates_total_g * 4
          );
          const fats = Math.round(
            data.user_data.nutrients_intake[0][0].fat_total_g * 9
          );

          setMacros({
            carbs,
            protein,
            fats,
          });

          setBmrCircumference(bmr);

          // Trigger animation
          Animated.timing(animatedValue, {
            toValue: 1,
            duration: animationDuration,
            easing: Easing.out(Easing.ease),
            useNativeDriver: false,
          }).start();
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [animatedValue, userData]);

  const animatedStroke = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['#ff7fcc', '#1affe8'],
  });

  return (
    <ImageBackground
      source={backgroundImage}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View style={styles.cardContainer}>
        <View style={styles.iconContainer}>
          <Svg width={radius * 2} height={radius * 2}>
            <Defs>
              <LinearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <Stop offset="0%" stopColor="#ff7fcc" />
                <Stop offset="100%" stopColor="#1affe8" />
              </LinearGradient>
            </Defs>

            <Circle
              cx={radius}
              cy={radius}
              r={radius - 10}
              stroke="url(#gradientBackground)"
              strokeWidth="12"
              fill="transparent"
            />

            <Circle
              cx={radius}
              cy={radius}
              r={radius - 16}
              stroke={animatedStroke}
              strokeWidth="2"
              fill="white"
              strokeDasharray={[
                macros.protein,
                macros.carbs, // Adjusted to prevent color mixing
                macros.fats, // Adjusted to prevent color mixing
                bmrCircumference - macros.protein - macros.carbs - macros.fats,
              ]}
              strokeLinecap="round"
            />

            <Defs>
              <LinearGradient
                id="gradientBackground"
                x1="0%"
                y1="60%"
                x2="60%"
                y2="100%"
              >
                <Stop
                  offset="100%"
                  stopColor={calculateColor('protein', macros.protein)}
                />
                <Stop
                  offset={`${
                    (macros.protein /
                      (macros.protein + macros.carbs + macros.fats)) *
                    100
                  }%`}
                  stopColor={calculateColor('carbs', macros.carbs)}
                />
                <Stop
                  offset={`${
                    ((macros.protein + macros.carbs) /
                      (macros.protein + macros.carbs + macros.fats)) *
                    100
                  }%`}
                  stopColor={calculateColor('fats', macros.fats)}
                />
              </LinearGradient>

              <LinearGradient
                id="gradientAnimated"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <Stop offset="0%" stopColor="#ff7fcc" />
                <Stop offset="100%" stopColor="#1affe8" />
              </LinearGradient>
            </Defs>

            <Line
              x1={radius}
              y1={radius}
              x2={radius + (radius - 16) * Math.cos((macros.protein / bmrCircumference) * 2 * Math.PI)}
              y2={radius + (radius - 16) * Math.sin((macros.protein / bmrCircumference) * 2 * Math.PI)}
              stroke="pink"
              strokeWidth="2"
            />

            <Line
              x1={radius}
              y1={radius}
              x2={
                radius +
                (radius - 16) *
                  Math.cos(
                    ((macros.protein + macros.carbs) / bmrCircumference) *
                      2 *
                      Math.PI
                  )
              }
              y2={
                radius +
                (radius - 16) *
                  Math.sin(
                    ((macros.protein + macros.carbs) / bmrCircumference) *
                      2 *
                      Math.PI
                  )
              }
              stroke="#0077cc"
              strokeWidth="3"
            />

            <Line
              x1={radius}
              y1={radius}
              x2={
                radius +
                (radius - 16) *
                  Math.cos(
                    ((macros.protein + macros.carbs + macros.fats) /
                      bmrCircumference) *
                      2 *
                      Math.PI
                  )
              }
              y2={
                radius +
                (radius - 16) *
                  Math.sin(
                    ((macros.protein + macros.carbs + macros.fats) /
                      bmrCircumference) *
                      2 *
                      Math.PI
                  )
              }
              stroke="#ffc21a"
              strokeWidth="3"
            />

            <SvgText
              x={radius - 10}
              y={radius + 10}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="22"
              fontWeight="bold"
              fill="url(#gradientAnimated)"
            >
              {macros.carbs + macros.protein + macros.fats} cal
            </SvgText>
          </Svg>

          <View style={styles.macroValues}>
            <View style={styles.macroValue}>
              <View
                style={[
                  styles.macroIndicator,
                  { backgroundColor: '#ff7fcc', marginBottom: 5, marginRight: 10 },
                ]}
              />
              <Text style={[styles.macroText, { color: '#ff7fcc' }]}>
                Protein: {macros.protein} cal
              </Text>
            </View>
            <View style={styles.macroValue}>
              <View
                style={[
                  styles.macroIndicator,
                  { backgroundColor: '#0077cc', marginBottom: 5, marginRight: 10 },
                ]}
              />
              <Text style={[styles.macroText, { color: '#0077cc' }]}>
                Carbs: {macros.carbs} cal
              </Text>
            </View>
            <View style={styles.macroValue}>
              <View
                style={[
                  styles.macroIndicator,
                  { backgroundColor: '#ffc21a', marginBottom: 5, marginRight: 10 },
                ]}
              />
              <Text style={[styles.macroText, { color: '#ffc21a' }]}>
                Fats: {macros.fats} cal
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconContainer: {
    padding: 20,
    alignItems: 'center',
  },
  macroValues: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  macroValue: {
    alignItems: 'center',
  },
  macroIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginBottom: 5,
  },
  macroText: {
    color: '#555',
    marginRight: 16,
  },
});

export default MacrosComponent;
