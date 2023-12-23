// // import React from 'react';
// // import { View, Text, StyleSheet } from 'react-native';

// // const NutrientGraph = ({ nutrientName, value, color, totalValue }) => {
// //   const barWidth = 200;

// //   return (
// //     <View style={styles.nutrientGraph}>
// //       <Text style={styles.nutrientName}>{nutrientName}</Text>
// //       <View style={styles.nutrientBarContainer}>
// //         <View style={[styles.nutrientBarBackground, { width: barWidth }]} />
// //         <View style={[styles.nutrientBar, { backgroundColor: color, width: `${(value / totalValue) * barWidth}px` }]} />
// //       </View>
// //       <Text style={styles.nutrientValue}>
// //         {nutrientName} ({value}g/{totalValue}g)
// //       </Text>
// //     </View>
// //   );
// // };

// // const NutrientsComponent = ({ nutrients }) => {
// //   const totalNutrients = Object.values(nutrients).reduce((total, value) => total + value, 0);

// //   return (
// //     <View style={styles.nutrientContainer}>
// //       <NutrientGraph nutrientName="Protein" value={nutrients.protein} color="#1affe8" totalValue={totalNutrients} />
// //       <NutrientGraph nutrientName="Carbs" value={nutrients.carbohydrates} color="#ff7fcc" totalValue={totalNutrients} />
// //       <NutrientGraph nutrientName="Fiber" value={nutrients.fiber} color="#ffc21a" totalValue={totalNutrients} />
// //       <NutrientGraph nutrientName="Sugar" value={nutrients.sugar} color="#ff5733" totalValue={totalNutrients} />
// //       <NutrientGraph nutrientName="Fat" value={nutrients.fat} color="#3498db" totalValue={totalNutrients} />
// //       <NutrientGraph nutrientName="Sodium" value={nutrients.sodium} color="#27ae60" totalValue={totalNutrients} />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   nutrientContainer: {
// //     //flex: 1,
// //     //justifyContent: 'center',
// //    // alignItems: 'center',
// //    // padding: 20,
// //     marginTop:50,

// //   },
// //   nutrientGraph: {
// //     alignItems: 'center',
// //     marginBottom: 20,
// //   },
// //   nutrientName: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     marginBottom: 5,
// //   },
// //   nutrientBarContainer: {
// //     width: '100%',
// //     height: 10,
// //     borderRadius: 5,
// //     backgroundColor: 'rgba(0, 0, 0, 0.3)',
// //   },
// //   nutrientBar: {
// //     height: '100%',
// //     borderRadius: 5,
// //   },
// //   nutrientValue: {
// //     marginTop: 5,
// //     fontSize: 16,
// //   },
// // });

// // export default NutrientsComponent;

// // import React from 'react';
// // import { View, Text, StyleSheet } from 'react-native';

// // const NutrientGraph = ({ nutrientName, value, color, totalValue }) => {
// //   const barWidth = 200;
// //   const filledWidth = (value / totalValue) * barWidth;
// //   const emptyWidth = barWidth - filledWidth;

// //   return (
// //     <View style={styles.nutrientGraph}>
// //       <Text style={styles.nutrientName}>{nutrientName}</Text>
// //       <View style={styles.nutrientBarContainer}>
// //         <View style={[styles.nutrientBarBackground, { width: barWidth }]}>
// //           <View style={[styles.nutrientBar, { backgroundColor: color, width: filledWidth }]} />
// //           <View style={[styles.nutrientBarEmpty, { width: emptyWidth }]} />
// //         </View>
// //       </View>
// //       <Text style={styles.nutrientValue}>
// //         {nutrientName} ({value}g/{totalValue}g)
// //       </Text>
// //     </View>
// //   );
// // };

// // const NutrientsComponent = ({ nutrients }) => {
// //   const totalNutrients = Object.values(nutrients).reduce((total, value) => total + value, 0);

// //   return (
// //     <View style={styles.nutrientContainer}>
// //       <NutrientGraph nutrientName="Protein" value={nutrients.protein} color="#1affe8" totalValue={totalNutrients} />
// //       <NutrientGraph nutrientName="Carbs" value={nutrients.carbohydrates} color="#ff7fcc" totalValue={totalNutrients} />
// //       <NutrientGraph nutrientName="Fiber" value={nutrients.fiber} color="#ffc21a" totalValue={totalNutrients} />
// //       <NutrientGraph nutrientName="Sugar" value={nutrients.sugar} color="#ff5733" totalValue={totalNutrients} />
// //       <NutrientGraph nutrientName="Fat" value={nutrients.fat} color="#3498db" totalValue={totalNutrients} />
// //       <NutrientGraph nutrientName="Sodium" value={nutrients.sodium} color="#27ae60" totalValue={totalNutrients} />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   nutrientContainer: {
// //     marginTop: 50,
// //   },
// //   nutrientGraph: {
// //     alignItems: 'center',
// //     marginBottom: 20,
// //   },
// //   nutrientName: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     marginBottom: 5,
// //   },
// //   nutrientBarContainer: {
// //     width: '100%',
// //     height: 10,
// //     borderRadius: 5,
// //     backgroundColor: 'rgba(0, 0, 0, 0.1)', // Adjusted background color to match empty side
// //   },
// //   nutrientBar: {
// //     height: '60%',
// //     borderRadius: 5, // Adjust this value to control the thickness of the colorful lines
// //   },
// //   nutrientBarEmpty: {
// //     height: '100%', // Adjust the height as needed to control the thickness
// //     borderRadius: 5,
// //     backgroundColor: 'transparent', // Empty bar should have a transparent background
// //   },
// //   nutrientValue: {
// //     marginTop: 5,
// //     fontSize: 16,
// //   },
// // });

// // export default NutrientsComponent;


// // import React from 'react';
// // import { View, Text, StyleSheet } from 'react-native';

// // const NutrientGraph = ({ nutrientName, value, color, totalValue }) => {
// //   const barHeight = 12;
// //   const barWidth = 300;

// //   const filledWidth = (value / totalValue) * barWidth;
// //   const emptyWidth = barWidth - filledWidth;

// //   return (
// //     <View style={styles.nutrientGraph}>
// //       <View style={styles.nutrientNameContainer}>
// //         <Text style={styles.nutrientName}>{nutrientName}</Text>
// //         <Text style={styles.nutrientValueText}>{value}g/{totalValue}g</Text>
// //       </View>
// //       <View style={[styles.nutrientBarContainer, { height: barHeight }]}>
// //         <View style={[styles.nutrientBarBackground, { width: barWidth }]}>
// //           <View style={[styles.nutrientBar, { backgroundColor: color, width: filledWidth, height: '70%' }]} />
// //           <View style={[styles.nutrientBarEmpty, { width: emptyWidth, height: '75%', marginLeft: -emptyWidth }]} />
// //         </View>
// //       </View>
// //     </View>
// //   );
// // };

// // const NutrientsComponent = ({ nutrients }) => {
// //   const totalNutrients = Object.values(nutrients).reduce((total, value) => total + value, 0);

// //   return (
// //     <View style={styles.nutrientContainer}>
// //       <NutrientGraph nutrientName="Protein" value={nutrients.protein} color="#1affe8" totalValue={totalNutrients} />
// //       <NutrientGraph nutrientName="Carbs" value={nutrients.carbohydrates} color="#ff7fcc" totalValue={totalNutrients} />
// //       <NutrientGraph nutrientName="Fiber" value={nutrients.fiber} color="#ffc21a" totalValue={totalNutrients} />
// //       <NutrientGraph nutrientName="Sugar" value={nutrients.sugar} color="#ff5733" totalValue={totalNutrients} />
// //       <NutrientGraph nutrientName="Fat" value={nutrients.fat} color="#3498db" totalValue={totalNutrients} />
// //       <NutrientGraph nutrientName="Sodium" value={nutrients.sodium} color="#27ae60" totalValue={totalNutrients} />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   nutrientContainer: {
// //     marginTop: 50,
// //     alignItems: 'center',
// //   },
// //   nutrientGraph: {
// //     marginBottom: 10,
// //   },
// //   nutrientNameContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //   },
// //   nutrientName: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //   },
// //   nutrientValueText: {
// //     fontSize: 14,
// //   },
// //   nutrientBarContainer: {
// //     //width: '100%',
// //     borderRadius: 5,
// //     backgroundColor: 'rgba(0, 0, 0, 0.1)',
// //     marginTop: 5,
// //   },
// //   nutrientBar: {
// //     borderRadius: 5,
// //   },

// //   nutrientBarEmpty: {
// //     borderRadius: 5,
// //     backgroundColor: 'transparent',
// //   },
// // });

// // export default NutrientsComponent;


// // import React from 'react';
// // import { View, Text, StyleSheet } from 'react-native';

// // const NutrientGraph = ({ nutrientName, value, color, totalValue }) => {
// //   const barHeight = 12;
// //   const barWidth = 300;

// //   const filledWidth = (value / totalValue) * barWidth;
// //   const emptyWidth = barWidth - filledWidth;

// //   return (
// //     <View style={styles.nutrientGraph}>
// //       <View style={styles.nutrientNameContainer}>
// //         <Text style={styles.nutrientName}>{nutrientName}</Text>
// //         <Text style={styles.nutrientValueText}>{value}g/{totalValue}g</Text>
// //       </View>
// //       <View style={[styles.nutrientBarContainer, { height: barHeight }]}>
// //         <View style={[styles.nutrientBarBackground, { width: barWidth }]}>
// //           <View style={[styles.nutrientBar, { backgroundColor: color, width: filledWidth, height: '70%' }]} />
// //           <View style={[styles.nutrientBarEmpty, { width: emptyWidth, height: '75%', marginLeft: -emptyWidth }]} />
// //         </View>
// //       </View>
// //     </View>
// //   );
// // };

// // const NutrientsComponent = ({ nutrients }) => {
// //   const totalNutrients = Object.values(nutrients).reduce((total, value) => total + value, 0);

// //   return (
// //     <View style={styles.card}>
// //       <Text style={styles.cardTitle}>Nutrients</Text>
// //       <View style={styles.cardContent}>
// //         <NutrientGraph nutrientName="Protein" value={nutrients.protein} color="#1affe8" totalValue={totalNutrients} />
// //         <NutrientGraph nutrientName="Carbs" value={nutrients.carbohydrates} color="#ff7fcc" totalValue={totalNutrients} />
// //         <NutrientGraph nutrientName="Fiber" value={nutrients.fiber} color="#ffc21a" totalValue={totalNutrients} />
// //         <NutrientGraph nutrientName="Sugar" value={nutrients.sugar} color="#ff5733" totalValue={totalNutrients} />
// //         <NutrientGraph nutrientName="Fat" value={nutrients.fat} color="#3498db" totalValue={totalNutrients} />
// //         <NutrientGraph nutrientName="Sodium" value={nutrients.sodium} color="#27ae60" totalValue={totalNutrients} />
// //       </View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   card: {
// //     backgroundColor: 'rgba(25, 124, 255, 0.8)',
// //     borderRadius: 10,
// //     padding: 20,
// //     marginVertical: 10,
// //   },
// //   cardTitle: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     marginBottom: 10,
// //   },
// //   cardContent: {
// //     marginTop: 10,
// //     alignItems: 'center',
// //   },
// //   nutrientGraph: {
// //     marginBottom: 10,
// //   },
// //   nutrientNameContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //   },
// //   nutrientName: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //   },
// //   nutrientValueText: {
// //     fontSize: 14,
// //   },
// //   nutrientBarContainer: {
// //     borderRadius: 5,
// //     backgroundColor: 'rgba(0, 0, 0, 0.1)',
// //     marginTop: 5,
// //   },
// //   nutrientBar: {
// //     borderRadius: 5,
// //   },
// //   nutrientBarEmpty: {
// //     borderRadius: 5,
// //     backgroundColor: 'transparent',
// //   },
// // });

// // export default NutrientsComponent;

// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const NutrientGraph = ({ nutrientName, value, color, totalValue }) => {
//   const barHeight = 11;
//   const barWidth = 356;

//   const filledWidth = (value / totalValue) * barWidth;
//   const emptyWidth = barWidth - filledWidth;

//   return (
//     <View style={styles.nutrientGraph}>
//       <View style={styles.nutrientNameContainer}>
//         <Text style={[styles.nutrientName, { color: 'white' }]}>{nutrientName}</Text>
//         <Text style={[styles.nutrientValueText, { color: 'white' }]}>
//           {value}g/{totalValue}g
//         </Text>
//       </View>
//       <View style={[styles.nutrientBarContainer, { height: barHeight }]}>
//         <View style={[styles.nutrientBarBackground, { width: barWidth }]}>
//           <View style={[styles.nutrientBar, { backgroundColor: color, width: filledWidth, height: '68%' }]} />
//           <View style={[styles.nutrientBarEmpty, { width: emptyWidth, height: '75%', marginLeft: -emptyWidth }]} />
//         </View>
//       </View>
//     </View>
//   );
// };

// const NutrientsComponent = ({ nutrients }) => {
//   const totalNutrients = Object.values(nutrients).reduce((total, value) => total + value, 0);

//   return (
//     <View style={styles.card}>
//       <Text style={[styles.cardTitle, { color: 'white' }]}>Nutrients</Text>
//       <View style={styles.cardContent}>
//         <NutrientGraph nutrientName="Protein" value={nutrients.protein} color="#1affe8" totalValue={totalNutrients} />
//         <NutrientGraph nutrientName="Carbs" value={nutrients.carbohydrates} color="#ff7fcc" totalValue={totalNutrients} />
//         <NutrientGraph nutrientName="Fiber" value={nutrients.fiber} color="#ffc21a" totalValue={totalNutrients} />
//         <NutrientGraph nutrientName="Sugar" value={nutrients.sugar} color="#ff5733" totalValue={totalNutrients} />
//         <NutrientGraph nutrientName="Fat" value={nutrients.fat} color="yellow" totalValue={totalNutrients} />
//         <NutrientGraph nutrientName="Sodium" value={nutrients.sodium} color="#27ae60" totalValue={totalNutrients} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: 'rgba(25, 124, 255, 0.8)',
//     borderRadius: 20,
//     padding: 20,
//     marginVertical: 50,
//     marginBottom:230,
//   },
//   cardTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   cardContent: {
//     marginTop: 10,
//     alignItems: 'center',
//   },
//   nutrientGraph: {
//     marginBottom: 5,
//   },
//   nutrientNameContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   nutrientName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   nutrientValueText: {
//     fontSize: 14,
//   },
//   nutrientBarContainer: {
//     borderRadius: 5,
//     backgroundColor: 'rgba(0, 0, 0, 0.1)',
//     marginTop: 5,
//   },
//   nutrientBar: {
//     borderRadius: 5,
//   },
//   nutrientBarEmpty: {
//     borderRadius: 5,
//     backgroundColor: 'transparent',
//   },
// });

// export default NutrientsComponent;
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const NutrientGraph = ({ nutrientName, value, color, totalValue }) => {
//   const barHeight = 11;
//   const barWidth = 356;

//   const filledWidth = (value / totalValue) * barWidth;
//   const emptyWidth = barWidth - filledWidth;

//   return (
//     <View style={styles.nutrientGraph}>
//       <View style={styles.nutrientNameContainer}>
//         <Text style={[styles.nutrientName, { color: 'white' }]}>{nutrientName}</Text>
//         <Text style={[styles.nutrientValueText, { color: 'white' }]}>
//           {value.toFixed(2)}g/{totalValue.toFixed(2)}g
//         </Text>
//       </View>
//       <View style={[styles.nutrientBarContainer, { height: barHeight }]}>
//         <View style={[styles.nutrientBarBackground, { width: barWidth }]}>
//           <View style={[styles.nutrientBar, { backgroundColor: color, width: `${(value / totalValue) * 100}%`, height: '68%' }]} />
//           <View style={[styles.nutrientBarEmpty, { width: `${(100 - value / totalValue * 100)}%`, height: '75%' }]} />
//         </View>
//       </View>
//     </View>
//   );
// };

// const NutrientsComponent = () => {
//   const nutrients = {
//     protein: 50,
//     carbohydrates: 80,
//     fiber: 25,
//     sugar: 30,
//     fat: 70,
//     sodium: 200,
//   };
//   const totalNutrients = 200; // Static total value

//   return (
//     <View style={styles.card}>
//       <Text style={[styles.cardTitle, { color: 'white' }]}>Nutrients</Text>
//       <View style={styles.cardContent}>
//         {Object.entries(nutrients).map(([nutrientName, value], index) => (
//           <NutrientGraph
//             key={index}
//             nutrientName={nutrientName}
//             value={value}
//             color={getNutrientColor(nutrientName)}
//             totalValue={totalNutrients}
//           />
//         ))}
//       </View>
//     </View>
//   );
// };

// const getNutrientColor = (nutrientName) => {
//   const colorMap = {
//     protein: '#1affe8',
//     carbohydrates: '#ff7fcc',
//     fiber: '#ffc21a',
//     sugar: '#ff5733',
//     fat: 'yellow',
//     sodium: '#27ae60',
//   };

//   return colorMap[nutrientName] || '#3498db';
// };

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: 'rgba(25, 124, 255, 0.8)',
//     borderRadius: 20,
//     padding: 20,
//     marginVertical: 50,
//     marginBottom: 230,
//   },
//   cardTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   cardContent: {
//     marginTop: 10,
//     alignItems: 'center',
//   },
//   nutrientGraph: {
//     marginBottom: 5,
//   },
//   nutrientNameContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   nutrientName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   nutrientValueText: {
//     fontSize: 14,
//   },
//   nutrientBarContainer: {
//     borderRadius: 5,
//     backgroundColor: 'rgba(0, 0, 0, 0.1)',
//     marginTop: 5,
//   },
//   nutrientBar: {
//     borderRadius: 5,
//   },
//   nutrientBarEmpty: {
//     borderRadius: 5,
//     backgroundColor: 'transparent',
//   },
// });

// export default NutrientsComponent;


// import React, { useEffect } from 'react';
// import { View, Text, StyleSheet, Animated } from 'react-native';

// const NutrientGraph = ({ nutrientName, value, color, totalValue }) => {
//   const barHeight = 11;
//   const barWidth = 356;

//   const filledWidth = (value / totalValue) * barWidth;
//   const emptyWidth = barWidth - filledWidth;

//   const animatedWidth = new Animated.Value(0);

//   useEffect(() => {
//     // Animate the width change when the component mounts
//     Animated.timing(animatedWidth, {
//       toValue: filledWidth,
//       duration: 1000, // Animation duration in milliseconds
//       useNativeDriver: false, // Non-native driver used for layout animation
//     }).start();
//   }, []);

//   return (
//     <View style={styles.nutrientGraph}>
//       <View style={styles.nutrientNameContainer}>
//         <Text style={[styles.nutrientName, { color: 'white' }]}>{nutrientName}</Text>
//         <Text style={[styles.nutrientValueText, { color: 'white' }]}>
//           {value.toFixed(2)}g/{totalValue.toFixed(2)}g
//         </Text>
//       </View>
//       <View style={[styles.nutrientBarContainer, { height: barHeight }]}>
//         <View style={[styles.nutrientBarBackground, { width: barWidth }]}>
//           <Animated.View
//             style={[
//               styles.nutrientBar,
//               { backgroundColor: color, width: animatedWidth, height: '68%' },
//             ]}
//           />
//           <View
//             style={[
//               styles.nutrientBarEmpty,
//               { width: `${100 - (value / totalValue) * 100}%`, height: '75%' },
//             ]}
//           />
//         </View>
//       </View>
//     </View>
//   );
// };

// const NutrientsComponent = (userData={userData} ) => {
//   const nutrients = {
//     protein: 50,
//     carbohydrates: 80,
//     fat: 70,
//     fiber: 25,
//     sugar: 30,
//     sodium: 200,
//   };
//   const totalNutrients = 200; // Static total value

//   return (
//     <View style={styles.card}>
//       <Text style={[styles.cardTitle, { color: 'white' }]}>Nutrients</Text>
//       <View style={styles.cardContent}>
//         {Object.entries(nutrients).map(([nutrientName, value], index) => (
//           <NutrientGraph
//             key={index}
//             nutrientName={nutrientName}
//             value={value}
//             color={getNutrientColor(nutrientName)}
//             totalValue={totalNutrients}
//           />
//         ))}
//       </View>
//     </View>
//   );
// };

// const getNutrientColor = (nutrientName) => {
//   const colorMap = {
//     protein: '#1affe8',
//     carbohydrates: '#ff7fcc',
//     fiber: '#ffc21a',
//     sugar: '#ff5733',
//     fat: 'yellow',
//     sodium: '#27ae60',
//   };

//   return colorMap[nutrientName] || '#3498db';
// };

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: 'rgba(25, 124, 255, 0.8)',
//     borderRadius: 20,
//     padding: 20,
//     marginVertical: 50,
//     marginBottom: 230,
//   },
//   cardTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   cardContent: {
//     marginTop: 10,
//     alignItems: 'center',
//   },
//   nutrientGraph: {
//     marginBottom: 5,
//   },
//   nutrientNameContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   nutrientName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   nutrientValueText: {
//     fontSize: 14,
//   },
//   nutrientBarContainer: {
//     borderRadius: 5,
//     backgroundColor: 'rgba(0, 0, 0, 0.1)',
//     marginTop: 5,
//   },
//   nutrientBar: {
//     borderRadius: 5,
//   },
//   nutrientBarEmpty: {
//     borderRadius: 5,
//     backgroundColor: 'transparent',
//   },
// });

// export default NutrientsComponent;
// import React, { useEffect, useRef } from 'react';
// import { View, Text, StyleSheet, Animated } from 'react-native';

// const NutrientGraph = ({ nutrientName, value, color, totalValue }) => {
//   const barHeight = 11;
//   const barWidth = 356;

//   const filledWidth = (value / totalValue) * barWidth;

//   const animatedWidth = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.timing(animatedWidth, {
//       toValue: filledWidth,
//       duration: 1000,
//       useNativeDriver: false,
//     }).start();
//   }, [filledWidth, animatedWidth]);

//   return (
//     <View style={styles.nutrientGraph}>
//       <View style={styles.nutrientNameContainer}>
//         <Text style={[styles.nutrientName, { color: 'white' }]}>{nutrientName}</Text>
//         <Text style={[styles.nutrientValueText, { color: 'white' }]}>
//           {value.toFixed(2)}g/{totalValue.toFixed(2)}g
//         </Text>
//       </View>
//       <View style={[styles.nutrientBarContainer, { height: barHeight }]}>
//         <View style={[styles.nutrientBarBackground, { width: barWidth }]}>
//           <Animated.View
//             style={[
//               styles.nutrientBar,
//               { backgroundColor: color, width: animatedWidth, height: '68%' },
//             ]}
//           />
//           <View
//             style={[
//               styles.nutrientBarEmpty,
//               { width: `${100 - (value / totalValue) * 100}%`, height: '75%' },
//             ]}
//           />
//         </View>
//       </View>
//     </View>
//   );
// };

// const NutrientsComponent = ({ userData }) => {
//   const nutrients = {
//     protein: 50,
//     carbohydrates: 80,
//     fat: 70,
//     fiber: 25,
//     sugar: 30,
//     sodium: 200,
//   };

//   const totalNutrients = {
//     protein: 100,
//     carbohydrates: 150,
//     fat: 120,
//     fiber: 50,
//     sugar: 60,
//     sodium: 300,
//   };

//   return (
//     <View style={styles.card}>
//       <Text style={[styles.cardTitle, { color: 'white' }]}>Nutrients</Text>
//       <View style={styles.cardContent}>
//         {Object.entries(nutrients).map(([nutrientName, value], index) => (
//           <NutrientGraph
//             key={index}
//             nutrientName={nutrientName}
//             value={value}
//             color={getNutrientColor(nutrientName)}
//             totalValue={totalNutrients[nutrientName]}
//           />
//         ))}
//       </View>
//     </View>
//   );
// };

// const getNutrientColor = (nutrientName) => {
//   const colorMap = {
//     protein: '#1affe8',
//     carbohydrates: '#ff7fcc',
//     fiber: '#ffc21a',
//     sugar: '#ff5733',
//     fat: 'yellow',
//     sodium: '#27ae60',
//   };

//   return colorMap[nutrientName] || '#3498db';
// };

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: 'rgba(25, 124, 255, 0.8)',
//     borderRadius: 20,
//     padding: 20,
//     marginVertical: 50,
//     marginBottom: 230,
//   },
//   cardTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   cardContent: {
//     marginTop: 10,
//     alignItems: 'center',
//   },
//   nutrientGraph: {
//     marginBottom: 5,
//   },
//   nutrientNameContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   nutrientName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   nutrientValueText: {
//     fontSize: 14,
//   },
//   nutrientBarContainer: {
//     borderRadius: 5,
//     backgroundColor: 'rgba(0, 0, 0, 0.1)',
//     marginTop: 5,
//   },
//   nutrientBar: {
//     borderRadius: 5,
//   },
//   nutrientBarEmpty: {
//     borderRadius: 5,
//     backgroundColor: 'transparent',
//   },
// });

// export default NutrientsComponent;
// import React, { useEffect, useState } from 'react';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NutrientGraph = ({ nutrientName, value, color, totalValue }) => {
  const barHeight = 11;
  const barWidth = 356;

  const filledWidth = value && totalValue ? (value / totalValue) * barWidth : 0;

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

  return (
    <View style={styles.nutrientGraph}>
      <View style={styles.nutrientNameContainer}>
        <Text style={[styles.nutrientName, { color: 'white' }]}>{nutrientName}</Text>
        <Text style={[styles.nutrientValueText, { color: 'white' }]}>
          {displayValue}g/{displayTotalValue}g
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
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    // Extract email from local storage or wherever you have it stored in your userData
    const fetchData = async () => {
      try {
        // Extract email from local storage or wherever you have it stored in your userData
        const email = await AsyncStorage.getItem('email');
        
        // Make a request to the API
        fetch(`http://192.168.0.100:5000/get_user_data?email=${email}`)
          .then((response) => response.json())
          .then((data) => {
            // Handle the API response here
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
    // API data is not yet available
    return <Text>Loading...</Text>;
  }

  // Destructure the necessary information from the API response
  const { nutrients_intake, bmr_info } = apiData;

  // Check if nutrients_intake array is not empty and extract the first element
  const nutrientsIntake = nutrients_intake.length > 0 ? nutrients_intake[0][0] : {};

  // Map the keys from nutrientsIntake to match the keys in totalNutrients
  const mappedNutrientsIntake = {
    calories: nutrientsIntake.calories,
    carbohydrates_total_g: nutrientsIntake.carbohydrates_total_g,
    fat_total_g: nutrientsIntake.fat_total_g,
    fiber_g: nutrientsIntake.fiber_g,
    protein_g: nutrientsIntake.protein_g,
    sodium_mg: nutrientsIntake.sodium_mg,
    sugar_g: nutrientsIntake.sugar_g,
  };

  // Map the keys from bmr_info and set constant values for sugar, fiber, sodium
  const mappedTotalNutrients = {
    calories: bmr_info.bmr,
    carbohydrates_total_g: bmr_info.carbohydrate_g,
    fat_total_g: bmr_info.fat_g,
    protein_g: bmr_info.protein_g,
    sugar_g: 100, // Set a constant value for sugar
    fiber_g: 100, // Set a constant value for fiber
    sodium_mg: 100, // Set a constant value for sodium
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
    <View style={styles.card}>
      <Text style={[styles.cardTitle, { color: 'white' }]}>Nutrients</Text>
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
  );
};

const getNutrientColor = (nutrientName) => {
  const colorMap = {
    calories: '#ffffff', // Adjust the color for calories
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
  card: {
    backgroundColor: 'rgba(25, 124, 255, 0.8)',
    borderRadius: 20,
    padding: 20,
    marginVertical: 50,
    marginBottom: 230,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
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
