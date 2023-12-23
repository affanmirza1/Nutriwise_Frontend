import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ToggleButtons({ showMacros, showNutrients, setShowMacros, setShowNutrients }) {
  return (
    <View style={styles.toggleButtonContainer}>
      <TouchableOpacity
        style={[styles.toggleButton, showMacros && styles.activeToggleButton]}
        onPress={() => {
          setShowMacros(true);
          setShowNutrients(false);
        }}
      >
        <Text style={styles.toggleButtonText}>Macros</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.toggleButton, showNutrients && styles.activeToggleButton]}
        onPress={() => {
          setShowMacros(false);
          setShowNutrients(true);
        }}
      >
        <Text style={styles.toggleButtonText}>Nutrients</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  toggleButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  toggleButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#197cff',
    marginBottom: 10,
    marginRight :10
  },
  activeToggleButton: {
    backgroundColor: '#197cff',
    color :'white'
  },
  toggleButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});
// import React, { useState } from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo for icons

// export default function MenuBar({ showMacros, showNutrients, setShowMacros, setShowNutrients }) {
//   const [menuVisible, setMenuVisible] = useState(false);

//   const toggleMenu = () => {
//     setMenuVisible(!menuVisible);
//   };

//   return (
//     <View style={styles.menuBarContainer}>
//       <TouchableOpacity
//         style={styles.menuIcon}
//         onPress={toggleMenu}
//       >
//         <Ionicons name="menu" size={24} color="black" />
//       </TouchableOpacity>
//       {menuVisible && (
//         <>
//           <TouchableOpacity
//             style={[styles.menuItem, showMacros && styles.activeMenuItem]}
//             onPress={() => {
//               setShowMacros(true);
//               setShowNutrients(false);
//               toggleMenu(); // Close the menu
//             }}
//           >
//             <Text style={styles.menuItemText}>Macros</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.menuItem, showNutrients && styles.activeMenuItem]}
//             onPress={() => {
//               setShowMacros(false);
//               setShowNutrients(true);
//               toggleMenu(); // Close the menu
//             }}
//           >
//             <Text style={styles.menuItemText}>Nutrients</Text>
//           </TouchableOpacity>
//         </>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   menuBarContainer: {
//     position: 'absolute',
//     left: 0,
//     top: 0,
//     bottom: 0,
//     backgroundColor: '#f0f0f0',
//     width: 100,
//     paddingVertical: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   menuIcon: {
//     marginBottom: 20,
//   },
//   menuItem: {
//     paddingVertical: 8,
//     paddingHorizontal: 10,
//     borderBottomWidth: 1,
//     borderColor: '#ccc',
//   },
//   activeMenuItem: {
//     backgroundColor: '#197cff',
//   },
//   menuItemText: {
//     color: 'black',
//     fontWeight: 'bold',
//   },
// });
// import React, { useState } from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo for icons

// export default function MenuBar({ showMacros, showNutrients, setShowMacros, setShowNutrients }) {
//   const [menuVisible, setMenuVisible] = useState(false);

//   const toggleMenu = () => {
//     setMenuVisible(!menuVisible);
//   };

//   return (
//     <View style={styles.menuBarContainer}>
//       <TouchableOpacity
//         style={styles.menuIcon}
//         onPress={toggleMenu}
//       >
//         <Ionicons name="menu" size={24} color="black" />
//       </TouchableOpacity>
//       <View style={styles.menuItemsContainer}>
//         {menuVisible && (
//           <>
//             <TouchableOpacity
//               style={[styles.menuItem, showMacros && styles.activeMenuItem]}
//               onPress={() => {
//                 setShowMacros(true);
//                 setShowNutrients(false);
//                 toggleMenu(); // Close the menu
//               }}
//             >
//               <Text style={styles.menuItemText}>Macros</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={[styles.menuItem, showNutrients && styles.activeMenuItem]}
//               onPress={() => {
//                 setShowMacros(false);
//                 setShowNutrients(true);
//                 toggleMenu(); // Close the menu
//               }}
//             >
//               <Text style={styles.menuItemText}>Nutrients</Text>
//             </TouchableOpacity>
//           </>
//         )}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   menuBarContainer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: 20,
//     backgroundColor: 'transparent', // No background until clicked
//   },
//   menuIcon: {},
//   menuItemsContainer: {
//     position: 'absolute',
//     top: 50, // Adjust this value to position the menu items
//     left: 0,
//     width: '100%',
//     backgroundColor: '#f0f0f0',
//   },
//   menuItem: {
//     paddingVertical: 8,
//     paddingHorizontal: 10,
//     borderBottomWidth: 1,
//     borderColor: '#ccc',
//   },
//   activeMenuItem: {
//     backgroundColor: '#197cff',
//   },
//   menuItemText: {
//     color: 'black',
//     fontWeight: 'bold',
//   },
// });
