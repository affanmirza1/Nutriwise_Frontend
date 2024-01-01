import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Animated, TouchableOpacity, Text, Image, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import fruitsAndVeggiesGIF from '../../assets/game_ready_fruit__vegetable_asset_pack/fruits-and-veggies.gif';
import appleGIF from '../../assets/game_ready_fruit__vegetable_asset_pack/doctor.gif';
import phy from '../../assets/game_ready_fruit__vegetable_asset_pack/phy.png';

const colorsArray = ['#FF5733', '#33FF57', '#5733FF', '#FF5733', '#33FF57', '#5733FF', '#FF5733', '#33FF57', '#5733FF', '#FF5733'];

const MedicalCard = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [currentSection, setCurrentSection] = useState("");
  const [animatedSection] = useState(new Animated.Value(1));
  const [animatedDoctor] = useState(new Animated.Value(0));
  const [infoBulletColor, setInfoBulletColor] = useState(colorsArray[0]);
  const navigation = useNavigation();
  const backgroundImage = require('../../assets/game_ready_fruit__vegetable_asset_pack/wallpaper.jpg');

  useEffect(() => {
    const medRec = async () => {
      const email = await AsyncStorage.getItem('email');

      try {
        const response = await fetch(`http://192.168.18.211:5000/get_medical_records?email=${email}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    medRec();

    setTimeout(() => {
      setShowAnimation(true);
      animateText();
      animateDoctor();
    }, 2500);
  }, []);

  const animateText = () => {
    const sectionsArray = [
      "Hydration Elevation: Sip with Style! Elevate your day with hydrating sips. Water isn't just a drink; it's your body's best accessory. Cheers to wellness!",
      "Plate Palette: Craft a culinary masterpiece! Your plate is your canvas. Splash it with vibrant colors - a symphony of veggies, fruits, and proteins. Taste the rainbow!",
      "Portion Prowess: Master the art of portions. Your body is a canvas, not a buffet. Paint it with perfect portions for a masterpiece physique.",
      "Chew, Don't Rush: Savor every bite, let flavors dance on your palate. Mindful eating is an art. Be present, be nourished. Your taste buds will thank you!",
      "Unbox Nature's Candy: Snack smart, snack colorful! Nature’s candy aisle is stocked with fruits. Skip the vending machine, and indulge in vibrant sweetness.",
      "Unprocess Your Plate: Upgrade your plate – say no to food impostors! Choose whole foods. Your body knows the difference. Real food, real you!",
      "Fiber Fusion: Fuel your fiber fancy. Say hello to happy digestion! Whole grains, fruits, and veggies – the fiber trio for a gut symphony.",
      "Snack Couture: Snack in style, snack with substance. Nuts, seeds, yogurt – your snack runway. Because your body deserves a VIP snack experience.",
      "Avocado Elegance: Embrace avocado elegance. Healthy fats, radiant vibes. Your body deserves the haute couture of nutrition.",
      "Move in Vogue: Nutrition meets movement in a chic rendezvous. Strut with style - dance, walk, run. Your NutriWise journey, a stylish symphony of health!",
    ];

    let sectionIndex = 0;

    const animateNextSection = () => {
      const colorIndex = sectionIndex % colorsArray.length;
      const color = colorsArray[colorIndex];

      setCurrentSection(sectionsArray[sectionIndex]);
      sectionIndex = (sectionIndex + 1) % sectionsArray.length;

      Animated.sequence([
        Animated.timing(animatedSection, {
          toValue: 1,
          duration: 0,
          useNativeDriver: false,
        }),
        Animated.timing(animatedSection, {
          toValue: 0,
          duration: 2500,
          useNativeDriver: false,
        }),
      ]).start(({ finished }) => {
        if (finished) {
          animateNextSection();
        }
      });

      Animated.timing(animatedSection, {
        toValue: 1,
        duration: 0,
        useNativeDriver: false,
      }).start();

      setInfoBulletColor(color);
    };

    animateNextSection();

    const intervalId = setInterval(() => {
      animateNextSection();
    }, 4000);

    return () => clearInterval(intervalId);
  };

  const animateDoctor = () => {
    Animated.timing(animatedDoctor, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ImageBackground
      source={backgroundImage}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      
        <ScrollView contentContainerStyle={{}}>
          <View style={{ alignSelf: 'center' }}>
            <Animated.Image
              source={fruitsAndVeggiesGIF}
              style={{
                width: 300,
                height: 300,
                resizeMode: 'contain',
                alignSelf: 'center',
              }}
            />
          </View>

          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Image source={phy} style={styles.cardImage} />
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardHeading}>Nutrient Calculation</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('CameraAction')}
                style={styles.cardButton}
              >
                <Text style={styles.cardButtonText}>Calculate Nutrients</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            {showAnimation && (
              <Animated.View
                style={[
                  styles.infoContainer,
                  {
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 2,
                  },
                ]}
              >
                <View style={styles.pointer}></View>
                <Animated.Text
                  style={[
                    styles.infoHeading,
                    {
                      color: infoBulletColor,
                    },
                  ]}
                >
                  Tips:
                </Animated.Text>
                <View style={styles.infoBulletContainer}>
                  <Animated.Text
                    style={[
                      styles.infoBullet,
                      {
                        marginLeft: 15,
                        color: infoBulletColor,
                      },
                    ]}
                  >
                    {currentSection}
                  </Animated.Text>
                </View>
              </Animated.View>
            )}
          </View>

          <View style={{ alignSelf: 'center' }}>
            <Animated.Image
              source={appleGIF}
              style={{
                width: 100,
                height: 200,
                opacity: animatedDoctor,
                transform: [
                  {
                    translateY: animatedDoctor.interpolate({
                      inputRange: [0, 1],
                      outputRange: [50, 0],
                    }),
                  },
                ],
              }}
            />
          </View>
        </ScrollView>
      
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 2,
    color: 'white',
  },
  infoContainer: {
    marginTop: 4,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    position: 'relative',
    marginBottom: 4,
  },
  pointer: {
    position: 'absolute',
    bottom: -8,
    left: '50%',
    marginLeft: -8,
    width: 0,
    height: 0,
    borderLeftWidth: 12,
    borderRightWidth: 12,
    borderBottomWidth: 12,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'black',
  },
  infoHeading: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 4,
    color: 'black',
  },
  infoBulletContainer: {
    overflow: 'hidden',
  },
  infoBullet: {
    fontSize: 16,
    marginBottom: 3,
    color: '#000',
  },
  cardContainer: {
    flexDirection: 'row',
    marginBottom: 12,
    borderRadius: 10,
    marginLeft: 8,
    marginRight: 8,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 18,
  },
  cardImageContainer: {
    flex: 1,
  },
  cardImage: {
    width: '110%',
    height: 150,
  },
  cardTextContainer: {
    flex: 1,
    padding: 20,
  },
  cardHeading: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 40,
    color: 'black',
  },
  cardButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  cardButtonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default MedicalCard;
