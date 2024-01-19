import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  ImageBackground,
} from "react-native";
import {
  Svg,
  Circle,
  Text as SvgText,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";

const calculateColor = (nutrient, value) => {
  switch (nutrient) {
    case "protein":
      return value > 50 ? "#ff7fcc" : "#f48fb1";
    case "carbs":
      return value > 50 ? "#0077cc" : "#4fc3f7";
    case "fats":
      return value > 50 ? "#ffc21a" : "#ffd54f";
    default:
      return "#ffffff";
  }
};

const MacrosComponent = ({ userData }) => {
  const backgroundImage = require("../assets/game_ready_fruit__vegetable_asset_pack/wallpaper.jpg");
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
        const email = await AsyncStorage.getItem("email");

        if (userData && email) {
          const response = await fetch(
            `http://184.72.73.229:5001/get_user_data?email=${email}`
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
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [animatedValue, userData]);

  const isValidPercentage = (value) => {
    const percentage =
      (value / (macros.protein + macros.carbs + macros.fats)) * 100;
    return Number.isFinite(percentage)
      ? Math.max(0, Math.min(percentage, 100))
      : 0;
  };

  const animatedStroke = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["#ff7fcc", "#1affe8"],
  });

  return (
    <ImageBackground
      source={backgroundImage}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
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
              stroke={`url(#gradientAnimated)`}
              strokeWidth="2"
              fill="white"
              strokeDasharray={[
                isNaN(macros.protein) ? 0 : macros.protein,
                isNaN(macros.carbs) ? 0 : macros.carbs,
                isNaN(macros.fats) ? 0 : macros.fats,
                isNaN(
                  bmrCircumference - macros.protein - macros.carbs - macros.fats
                )
                  ? 0
                  : bmrCircumference -
                    macros.protein -
                    macros.carbs -
                    macros.fats,
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
                  stopColor={calculateColor("protein", macros.protein)}
                />
                <Stop
                  offset={`${isValidPercentage(macros.protein) || 0}%`}
                  stopColor={calculateColor("carbs", macros.carbs)}
                />
                <Stop
                  offset={`${
                    isValidPercentage(macros.protein + macros.carbs) || 0
                  }%`}
                  stopColor={calculateColor("fats", macros.fats)}
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

            <SvgText
              x={radius - 10}
              y={radius + 10}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="22"
              fontWeight="bold"
              fill={`url(#gradientAnimated)`}
            >
              {macros.carbs + macros.protein + macros.fats} cal
            </SvgText>
          </Svg>

          <View style={styles.macroValues}>
            <View style={styles.macroValue}>
              <View
                style={[
                  styles.macroIndicator,
                  {
                    backgroundColor: "#ff7fcc",
                    marginBottom: 5,
                    marginRight: 10,
                  },
                ]}
              />
              <Text style={[styles.macroText, { color: "#ff7fcc" }]}>
                Protein: {isNaN(macros.protein) ? 0 : macros.protein} cal
              </Text>
            </View>
            <View style={styles.macroValue}>
              <View
                style={[
                  styles.macroIndicator,
                  {
                    backgroundColor: "#0077cc",
                    marginBottom: 5,
                    marginRight: 10,
                  },
                ]}
              />
              <Text style={[styles.macroText, { color: "#0077cc" }]}>
                Carbs: {isNaN(macros.carbs) ? 0 : macros.carbs} cal
              </Text>
            </View>
            <View style={styles.macroValue}>
              <View
                style={[
                  styles.macroIndicator,
                  {
                    backgroundColor: "#ffc21a",
                    marginBottom: 5,
                    marginRight: 10,
                  },
                ]}
              />
              <Text style={[styles.macroText, { color: "#ffc21a" }]}>
                Fats: {isNaN(macros.fats) ? 0 : macros.fats} cal
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
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
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
    alignItems: "center",
  },
  macroValues: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  macroValue: {
    alignItems: "center",
  },
  macroIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginBottom: 5,
  },
  macroText: {
    color: "#555",
    marginRight: 16,
  },
});

export default MacrosComponent;
