import appleGIF from '../../assets/game_ready_fruit__vegetable_asset_pack/doctor.gif';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Animated, TouchableOpacity, Text, Image, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Food_Banner from '../../assets/game_ready_fruit__vegetable_asset_pack/Food_Banner.gif';
import phy from '../../assets/game_ready_fruit__vegetable_asset_pack/phy.png';
import Food from '../../assets/game_ready_fruit__vegetable_asset_pack/Food.png';

const colorsArray = ['#000'];

const MedicalCard = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [currentSection, setCurrentSection] = useState('');
  const [infoBulletColor, setInfoBulletColor] = useState(colorsArray[0]);
  const navigation = useNavigation();
  const backgroundImage = require('../../assets/game_ready_fruit__vegetable_asset_pack/wallpaper.jpg');

  const [cloudVisible, setCloudVisible] = useState(true);
  const [blinkAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    setTimeout(() => {
      setShowAnimation(true);
      animateText();
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

      setInfoBulletColor(color);

      Animated.sequence([
        Animated.timing(blinkAnimation, {
          toValue: 1,
          duration: 2500,
          useNativeDriver: true,
        }),
        Animated.timing(blinkAnimation, {
          toValue: 0,
          duration: 2500,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setCloudVisible(false);
        setTimeout(() => {
          setCloudVisible(true);
          animateNextSection();
        }, 500);
      });
    };

    animateNextSection();
  };

  return (
    <ImageBackground
      source={backgroundImage}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 0, margin: 0 }}
    >
      <ScrollView contentContainerStyle={{padding: 0, margin: 0 }}>
        <View style={{ alignSelf: 'center' }}>
          <Image
            source={Food}
            style={{
              width: 350,
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
            <Text style={styles.cardHeading}>TRACK YOUR HEALTH</Text>
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
                styles.cloudContainer,
                {
                  opacity: blinkAnimation,
                  display: cloudVisible ? 'flex' : 'none',
                },
              ]}
            >
              <View style={styles.pointer}></View>
              <View style={styles.cloudContent}>
              <Text style={styles.cloudContent}>
  <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Tips:{'\n'}</Text>
  {currentSection}
</Text>


                
              </View>
            </Animated.View>
          )}
        </View>

        <View style={{ alignSelf: 'flex-end', marginRight: -10 }}>
          <Animated.Image
            source={appleGIF}
            style={{
              width: 100,
              height: 200,
              transform: [
                {
                  translateY: blinkAnimation.interpolate({
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
    width: 350,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
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
  cloudContainer: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 30,
    position: 'absolute',
    height: 105,
    marginTop: 30,
    marginLeft: 5,
    
  },
  cloudContent: {
    width: 300,
    height: 120,
  },
  pointer: {
    position: 'absolute',
    bottom: -8,
    left: '50%',
    marginLeft: -12,
    width: 0,
    height: 0,
    borderLeftWidth: 12,
    borderRightWidth: 12,
    borderBottomWidth: 12,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'black',
  },
  infoBulletContainer: {
    overflow: 'hidden',
    width: 300,
    height: 150,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    position: 'absolute',
    marginBottom: 4,
  },
  infoBullet: {
    fontSize: 16,
    marginBottom: 3,
    color: '#000',
  },
});

export default MedicalCard;

