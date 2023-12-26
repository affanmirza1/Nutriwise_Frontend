// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { Svg, Circle, Text as SvgText } from 'react-native-svg';

// const MacrosComponent = () => {
//   const radius = 80;
//   const circumference = 2 * Math.PI * radius;
//   const calorieValue = 100;

//   const [macros, setMacros] = useState({
//     carbs: 50,
//     protein: 30,
//     fats: 20,
//   });

//   const [carbsOffset, setCarbsOffset] = useState(1);
//   const [proteinOffset, setProteinOffset] = useState(1);
//   const [fatsOffset, setFatsOffset] = useState(1);

//   useEffect(() => {
//     const animateValues = () => {
//       const carbsEnd = (macros.carbs / 100) * circumference;
//       const proteinEnd = (macros.protein / 100) * circumference;
//       const fatsEnd = (macros.fats / 100) * circumference;

//       let animationValue = 0;

//       const animate = setInterval(() => {
//         if (animationValue < carbsEnd) {
//           setCarbsOffset(animationValue);
//         }

//         if (animationValue < proteinEnd) {
//           setProteinOffset(animationValue);
//         }

//         if (animationValue < fatsEnd) {
//           setFatsOffset(animationValue);
//         }

//         animationValue += 6.5;

//         if (animationValue >= Math.max(carbsEnd, proteinEnd, fatsEnd)) {
//           clearInterval(animate);
//         }
//       }, 10);
//     };

//     const animateTimeout = setTimeout(() => {
//       animateValues();
//     }, 100);

//     return () => {
//       clearTimeout(animateTimeout);
//       setCarbsOffset(0);
//       setProteinOffset(0);
//       setFatsOffset(0);
//     };
//   }, [macros]);

//   return (
//     <View style={styles.container}>
//       <View style={styles.cardContainer}>
//         <View style={styles.iconContainer}>
//           <View style={styles.donutContainer}>
//             <Svg width={radius * 2} height={radius * 2}>
//               <Circle
//                 cx={radius}
//                 cy={radius}
//                 r={radius - 10}
//                 stroke="rgba(0, 0, 0, 0.3)"
//                 strokeWidth="12"
//                 fill="transparent"
//               />
//               <Circle
//                 cx={radius}
//                 cy={radius}
//                 r={radius - 10}
//                 stroke="#1affe8"
//                 strokeWidth="12"
//                 fill="transparent"
//                 strokeDasharray={`${carbsOffset} ${circumference}`}
//                 strokeLinecap="round"
//               />
//               <Circle
//                 cx={radius}
//                 cy={radius}
//                 r={radius - 10}
//                 stroke="#ff7fcc"
//                 strokeWidth="12"
//                 fill="transparent"
//                 strokeDasharray={`${proteinOffset} ${circumference}`}
//                 strokeDashoffset={carbsOffset}
//                 strokeLinecap="round"
//               />
//               <Circle
//                 cx={radius}
//                 cy={radius}
//                 r={radius - 10}
//                 stroke="#ffc21a"
//                 strokeWidth="12"
//                 fill="transparent"
//                 strokeDasharray={`${fatsOffset} ${circumference}`}
//                 strokeDashoffset={carbsOffset + proteinOffset}
//                 strokeLinecap="round"
//               />
//               <SvgText x={radius} y={radius} textAnchor="middle" dominantBaseline="central" fontSize="16" fill="white">
//                 {calorieValue} cal
//               </SvgText>
//             </Svg>
//           </View>
//           <View style={styles.macroValues}>
//             <View style={styles.macroValue}>
//               <View style={[styles.macroIndicator, { backgroundColor: '#1affe8' }]} />
//               <Text style={styles.macroText}>Carbs: {macros.carbs}%</Text>
//             </View>
//             <View style={styles.macroValue}>
//               <View style={[styles.macroIndicator, { backgroundColor: '#ff7fcc' }]} />
//               <Text style={styles.macroText}>Protein: {macros.protein}%</Text>
//             </View>
//             <View style={styles.macroValue}>
//               <View style={[styles.macroIndicator, { backgroundColor: '#ffc21a' }]} />
//               <Text style={styles.macroText}>Fats: {macros.fats}%</Text>
//             </View>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 50,
//   },
//   cardContainer: {
//     width: '90%',
//     backgroundColor: 'rgba(25, 124, 255, 0.8)',
//     borderRadius: 20,
//     padding: 20,
//     marginBottom: 380,
//   },
//   iconContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   donutContainer: {
//     position: 'relative',
//     alignItems: 'center',
//   },
//   macroValues: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginTop: 10,
//   },
//   macroValue: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   macroIndicator: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     marginRight: 5,
//   },
//   macroText: {
//     color: 'white',
//   },
// });

// export default MacrosComponent;


// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { Svg, Circle, Text as SvgText } from 'react-native-svg';

// const MacrosComponent = ({ userData }) => {
//   const radius = 80;
//   const circumference = 2 * Math.PI * radius;
//   const calorieValue = 100;

//   const [macros, setMacros] = useState({
//     carbs: 50,
//     protein: 30,
//     fats: 20,
//   });

//   const [carbsOffset, setCarbsOffset] = useState(1);
//   const [proteinOffset, setProteinOffset] = useState(1);
//   const [fatsOffset, setFatsOffset] = useState(1);

//   useEffect(() => {
//     const animateValues = () => {
//       const carbsEnd = (macros.carbs / 100) * circumference;
//       const proteinEnd = (macros.protein / 100) * circumference;
//       const fatsEnd = (macros.fats / 100) * circumference;

//       let animationValue = 0;

//       const animate = setInterval(() => {
//         if (animationValue < carbsEnd) {
//           setCarbsOffset(animationValue);
//         }

//         if (animationValue < proteinEnd) {
//           setProteinOffset(animationValue);
//         }

//         if (animationValue < fatsEnd) {
//           setFatsOffset(animationValue);
//         }

//         animationValue += 6.5;

//         if (animationValue >= Math.max(carbsEnd, proteinEnd, fatsEnd)) {
//           clearInterval(animate);
//         }
//       }, 10);
//     };

//     const animateTimeout = setTimeout(() => {
//       animateValues();
//     }, 100);

//     return () => {
//       clearTimeout(animateTimeout);
//       setCarbsOffset(0);
//       setProteinOffset(0);
//       setFatsOffset(0);
//     };
//   }, [macros]);

//   // Update the user's macros if available in the user data
//   useEffect(() => {
//     if (userData && userData.macros) {
//       setMacros(userData.macros);
//     }
//   }, [userData]);

//   return (
//     <View style={styles.container}>
//       <View style={styles.cardContainer}>
//         <View style={styles.iconContainer}>
//           <View style={styles.donutContainer}>
//             <Svg width={radius * 2} height={radius * 2}>
//               <Circle
//                 cx={radius}
//                 cy={radius}
//                 r={radius - 10}
//                 stroke="rgba(0, 0, 0, 0.3)"
//                 strokeWidth="12"
//                 fill="transparent"
//               />
//               <Circle
//                 cx={radius}
//                 cy={radius}
//                 r={radius - 10}
//                 stroke="#1affe8"
//                 strokeWidth="12"
//                 fill="transparent"
//                 strokeDasharray={`${carbsOffset} ${circumference}`}
//                 strokeLinecap="round"
//               />
//               <Circle
//                 cx={radius}
//                 cy={radius}
//                 r={radius - 10}
//                 stroke="#ff7fcc"
//                 strokeWidth="12"
//                 fill="transparent"
//                 strokeDasharray={`${proteinOffset} ${circumference}`}
//                 strokeDashoffset={carbsOffset}
//                 strokeLinecap="round"
//               />
//               <Circle
//                 cx={radius}
//                 cy={radius}
//                 r={radius - 10}
//                 stroke="#ffc21a"
//                 strokeWidth="12"
//                 fill="transparent"
//                 strokeDasharray={`${fatsOffset} ${circumference}`}
//                 strokeDashoffset={carbsOffset + proteinOffset}
//                 strokeLinecap="round"
//               />
//               <SvgText x={radius} y={radius} textAnchor="middle" dominantBaseline="central" fontSize="16" fill="white">
//                 {calorieValue} cal
//               </SvgText>
//             </Svg>
//           </View>
//           <View style={styles.macroValues}>
//             <View style={styles.macroValue}>
//               <View style={[styles.macroIndicator, { backgroundColor: '#1affe8' }]} />
//               <Text style={styles.macroText}>Carbs: {macros.carbs}%</Text>
//             </View>
//             <View style={styles.macroValue}>
//               <View style={[styles.macroIndicator, { backgroundColor: '#ff7fcc' }]} />
//               <Text style={styles.macroText}>Protein: {macros.protein}%</Text>
//             </View>
//             <View style={styles.macroValue}>
//               <View style={[styles.macroIndicator, { backgroundColor: '#ffc21a' }]} />
//               <Text style={styles.macroText}>Fats: {macros.fats}%</Text>
//             </View>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 50,
//   },
//   cardContainer: {
//     width: '90%',
//     backgroundColor: 'rgba(25, 124, 255, 0.8)',
//     borderRadius: 20,
//     padding: 20,
//     marginBottom: 380,
//   },
//   iconContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   donutContainer: {
//     position: 'relative',
//     alignItems: 'center',
//   },
//   macroValues: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginTop: 10,
//   },
//   macroValue: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   macroIndicator: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     marginRight: 5,
//   },
//   macroText: {
//     color: 'white',
//   },
// });

// export default MacrosComponent;

// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { Svg, Circle, Text as SvgText } from 'react-native-svg';

// const MacrosComponent = ({ userData }) => {
//   const radius = 80;

//   const [macros, setMacros] = useState({
//     carbs: 0,
//     protein: 0,
//     fats: 0,
//   });

//   const [carbsOffset, setCarbsOffset] = useState(0);
//   const [proteinOffset, setProteinOffset] = useState(0);
//   const [fatsOffset, setFatsOffset] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         if (userData && userData.email) {
//           // Fetch data from the API using the user's email
//           const response = await fetch(`http://192.168.18.150:5000/get_user_data?email=${userData.email}`);
//           const data = await response.json();

//           // Extract relevant data from the API response
//           const bmr = data.user_data.bmr_info.bmr;
//           const protein = Math.round(data.user_data.nutrients_intake[0][0].protein_g * 4);
//           const carbs = Math.round(data.user_data.nutrients_intake[0][0].carbohydrates_total_g * 4);
//           const fats = Math.round(data.user_data.nutrients_intake[0][0].fat_total_g * 9);

//           // Update the state with the fetched data
//           setMacros({
//             carbs,
//             protein,
//             fats,
//           });

//           // Trigger animation here if needed
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     // Call the fetchData function when the component mounts or when the userData changes
//     fetchData();
//   }, [userData]);

//   useEffect(() => {
//     const animateValues = () => {
//       const carbsEnd = (macros.carbs / 100) * bmrCircumference;
//       const proteinEnd = (macros.protein / 100) * bmrCircumference;
//       const fatsEnd = (macros.fats / 100) * bmrCircumference;

//       let animationValue = 0;

//       const animate = setInterval(() => {
//         if (animationValue < carbsEnd) {
//           setCarbsOffset(animationValue);
//         }

//         if (animationValue < proteinEnd) {
//           setProteinOffset(animationValue);
//         }

//         if (animationValue < fatsEnd) {
//           setFatsOffset(animationValue);
//         }

//         animationValue += 6.5;

//         if (animationValue >= Math.max(carbsEnd, proteinEnd, fatsEnd)) {
//           clearInterval(animate);
//         }
//       }, 10);
//     };

//     const animateTimeout = setTimeout(() => {
//       animateValues();
//     }, 100);

//     return () => {
//       clearTimeout(animateTimeout);
//       setCarbsOffset(0);
//       setProteinOffset(0);
//       setFatsOffset(0);
//     };
//   }, [macros]);

//   // Assuming totalBMR is received from the API response
//   const totalBMR = macros.carbs + macros.protein + macros.fats;

//   // Calculate the circumference based on the total BMR
//   const bmrCircumference = 2 * Math.PI * radius * (totalBMR / 100);

//   return (
//     <View style={styles.container}>
//       <View style={styles.cardContainer}>
//         <View style={styles.iconContainer}>
//           <View style={styles.donutContainer}>
//             <Svg width={radius * 2} height={radius * 2}>
//               <Circle
//                 cx={radius}
//                 cy={radius}
//                 r={radius - 10}
//                 stroke="rgba(0, 0, 0, 0.3)"
//                 strokeWidth="12"
//                 fill="transparent"
//               />
//               <Circle
//                 cx={radius}
//                 cy={radius}
//                 r={radius - 10}
//                 stroke="#1affe8"
//                 strokeWidth="12"
//                 fill="transparent"
//                 strokeDasharray={`${carbsOffset} ${bmrCircumference}`}
//                 strokeLinecap="round"
//               />
//               <Circle
//                 cx={radius}
//                 cy={radius}
//                 r={radius - 10}
//                 stroke="#ff7fcc"
//                 strokeWidth="12"
//                 fill="transparent"
//                 strokeDasharray={`${proteinOffset} ${bmrCircumference}`}
//                 strokeDashoffset={carbsOffset}
//                 strokeLinecap="round"
//               />
//               <Circle
//                 cx={radius}
//                 cy={radius}
//                 r={radius - 10}
//                 stroke="#ffc21a"
//                 strokeWidth="12"
//                 fill="transparent"
//                 strokeDasharray={`${fatsOffset} ${bmrCircumference}`}
//                 strokeDashoffset={carbsOffset + proteinOffset}
//                 strokeLinecap="round"
//               />
//               <SvgText x={radius} y={radius} textAnchor="middle" dominantBaseline="central" fontSize="16" fill="white">
//                 {/* {totalBMR} cal */}
//               </SvgText>
//             </Svg>
//           </View>
//           <View style={styles.macroValues}>
//             <View style={styles.macroValue}>
//               <View style={[styles.macroIndicator, { backgroundColor: '#1affe8' }]} />
//               <Text style={styles.macroText}>Carbs: {macros.carbs}</Text>
//             </View>
//             <View style={styles.macroValue}>
//               <View style={[styles.macroIndicator, { backgroundColor: '#ff7fcc' }]} />
//               <Text style={styles.macroText}>Protein: {macros.protein}</Text>
//             </View>
//             <View style={styles.macroValue}>
//               <View style={[styles.macroIndicator, { backgroundColor: '#ffc21a' }]} />
//               <Text style={styles.macroText}>Fats: {macros.fats}</Text>
//             </View>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 50,
//   },
//   cardContainer: {
//     width: '90%',
//     backgroundColor: 'rgba(25, 124, 255, 0.8)',
//     borderRadius: 20,
//     padding: 20,
//     marginBottom: 380,
//   },
//   iconContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   donutContainer: {
//     position: 'relative',
//     alignItems: 'center',
//   },
//   macroValues: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginTop: 10,
//   },
//   macroValue: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   macroIndicator: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     marginRight: 5,
//   },
//   macroText: {
//     color: 'white',
//   },
// });

// export default MacrosComponent;
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { Svg, Circle, Text as SvgText } from 'react-native-svg';

// const MacrosComponent = ({ userData }) => {
//   const radius = 80;

//   const [macros, setMacros] = useState({
//     carbs: 0,
//     protein: 0,
//     fats: 0,
//   });

//   const [carbsOffset, setCarbsOffset] = useState(0);
//   const [proteinOffset, setProteinOffset] = useState(0);
//   const [fatsOffset, setFatsOffset] = useState(0);
//   const [bmrCircumference, setBmrCircumference] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         if (userData && userData.email) {
//           const response = await fetch(`http://192.168.18.150:5000/get_user_data?email=${userData.email}`);
//           const data = await response.json();

//           const bmr = data.user_data.bmr_info.bmr;
//           const protein = Math.round(data.user_data.nutrients_intake[0][0].protein_g * 4);
//           const carbs = Math.round(data.user_data.nutrients_intake[0][0].carbohydrates_total_g * 4);
//           const fats = Math.round(data.user_data.nutrients_intake[0][0].fat_total_g * 9);

//           setMacros({
//             carbs,
//             protein,
//             fats,
//           });

//           setBmrCircumference(bmr);

//           // Set offset values directly
//           setProteinOffset(protein);
//           setCarbsOffset(protein + carbs);
//           setFatsOffset(protein + carbs + fats);
          
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, [userData]);

//   return (
//     <View style={styles.container}>
//       <View style={styles.cardContainer}>
//         <View style={styles.iconContainer}>
//           <View style={styles.donutContainer}>
//             <Svg width={radius * 2} height={radius * 2}>
//               <Circle
//                 cx={radius}
//                 cy={radius}
//                 r={radius - 10}
//                 stroke="rgba(0, 0, 0, 0.3)"
//                 strokeWidth="12"
//                 fill="transparent"
//               />
//               <Circle
//                 cx={radius}
//                 cy={radius}
//                 r={radius - 10}
//                 stroke="#1affe8"
//                 strokeWidth="12"
//                 fill="transparent"
//                 strokeDasharray={`${macros.protein} ${bmrCircumference-macros.protein}`}
//                 strokeLinecap="round"
//               />
//               <Circle
//                 cx={radius}
//                 cy={radius}
//                 r={radius - 10}
//                 stroke="#ff7fcc"
//                 strokeWidth="12"
//                 fill="transparent"
//                 strokeDasharray={`${macros.carbs} ${ bmrCircumference-(macros.protein+macros.carbs)}`}
//                 strokeLinecap="round"
//               />
//               <Circle
//                 cx={radius}
//                 cy={radius}
//                 r={radius - 10}
//                 stroke="#ffc21a"
//                 strokeWidth="12"
//                 fill="transparent"
//                 strokeDasharray={`${macros.fats} ${bmrCircumference-(macros.protein+macros.fats+macros.carbs)}`}
//                 strokeLinecap="round"
//               />
//               <SvgText x={radius} y={radius} textAnchor="middle" dominantBaseline="central" fontSize="16" fill="white">
//                 {macros.carbs + macros.protein + macros.fats} cal
//               </SvgText>
//             </Svg>
//           </View>
//           <View style={styles.macroValues}>
//             <View style={styles.macroValue}>
//               <View style={[styles.macroIndicator, { backgroundColor: '#1affe8' }]} />
//               <Text style={styles.macroText}>Protein: {macros.protein}</Text>
//             </View>
//             <View style={styles.macroValue}>
//               <View style={[styles.macroIndicator, { backgroundColor: '#ff7fcc' }]} />
//               <Text style={styles.macroText}>Carbs: {macros.carbs}</Text>
//             </View>
//             <View style={styles.macroValue}>
//               <View style={[styles.macroIndicator, { backgroundColor: '#ffc21a' }]} />
//               <Text style={styles.macroText}>Fats: {macros.fats}</Text>
//             </View>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 50,
//   },
//   cardContainer: {
//     width: '90%',
//     backgroundColor: 'rgba(25, 124, 255, 0.8)',
//     borderRadius: 20,
//     padding: 20,
//     marginBottom: 380,
//   },
//   iconContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   donutContainer: {
//     position: 'relative',
//     alignItems: 'center',
//   },
//   macroValues: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginTop: 10,
//   },
//   macroValue: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   macroIndicator: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     marginRight: 5,
//   },
//   macroText: {
//     color: 'white',
//   },
// });

// export default MacrosComponent;
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Svg, Circle, Text as SvgText } from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MacrosComponent = ({ userData }) => {
  const radius = 80;

  const [macros, setMacros] = useState({
    carbs: 0,
    protein: 0,
    fats: 0,
  });

  const [bmrCircumference, setBmrCircumference] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = await AsyncStorage.getItem('email')

        if (userData && email) {
          const response = await fetch(`http://192.168.80.12:5000/get_user_data?email=${email}`);
          const data = await response.json();

          const bmr = data.user_data.bmr_info.bmr;
          const protein = Math.round(data.user_data.nutrients_intake[0][0].protein_g * 4);
          const carbs = Math.round(data.user_data.nutrients_intake[0][0].carbohydrates_total_g * 4);
          const fats = Math.round(data.user_data.nutrients_intake[0][0].fat_total_g * 9);

          setMacros({
            carbs,
            protein,
            fats,
          });

          setBmrCircumference(bmr);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [userData]);

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.iconContainer}>
          <View style={styles.donutContainer}>
            <Svg width={radius * 2} height={radius * 2}>
              <Circle
                cx={radius}
                cy={radius}
                r={radius - 10}
                stroke="rgba(0, 0, 0, 0.3)"
                strokeWidth="12"
                fill="transparent"
              />
              <Circle
                cx={radius}
                cy={radius}
                r={radius - 10}
                stroke="#1affe8"
                strokeWidth="12"
                fill="transparent"
                strokeDasharray={`${macros.protein} ${bmrCircumference - macros.carbs - macros.fats}`}
                strokeLinecap="round"
              />
              <Circle
                cx={radius}
                cy={radius}
                r={radius - 10}
                stroke="#ff7fcc"
                strokeWidth="12"
                fill="transparent"
                strokeDasharray={`${macros.carbs} ${bmrCircumference - macros.fats}`}
                strokeLinecap="round"
              />
              <Circle
                cx={radius}
                cy={radius}
                r={radius - 10}
                stroke="#ffc21a"
                strokeWidth="12"
                fill="transparent"
                strokeDasharray={`${macros.fats} ${bmrCircumference}`}
                strokeLinecap="round"
              />
              <SvgText x={radius} y={radius} textAnchor="middle" dominantBaseline="central" fontSize="16" fill="white">
                {macros.carbs + macros.protein + macros.fats} cal
              </SvgText>
            </Svg>
          </View>
          <View style={styles.macroValues}>
            <View style={styles.macroValue}>
              <View style={[styles.macroIndicator, { backgroundColor: '#1affe8' }]} />
              <Text style={styles.macroText}>Protein: {macros.protein}</Text>
            </View>
            <View style={styles.macroValue}>
              <View style={[styles.macroIndicator, { backgroundColor: '#ff7fcc' }]} />
              <Text style={styles.macroText}>Carbs: {macros.carbs}</Text>
            </View>
            <View style={styles.macroValue}>
              <View style={[styles.macroIndicator, { backgroundColor: '#ffc21a' }]} />
              <Text style={styles.macroText}>Fats: {macros.fats}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  cardContainer: {
    width: '90%',
    backgroundColor: 'rgba(25, 124, 255, 0.8)',
    borderRadius: 20,
    padding: 20,
    marginBottom: 380,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  donutContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  macroValues: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  macroValue: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  macroIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  macroText: {
    color: 'white',
  },
});

export default MacrosComponent;
