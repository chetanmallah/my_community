
// import React from 'react';
// import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import RectangleCard from '../RectangleCard/RectangleCard';
// import { useNavigation } from "@react-navigation/native";

// const TopBar = ({ profileImage, onMessagePress, activeCategory, setActiveCategory }) => {
//   const navigation = useNavigation(); // Moved inside the component

//   const handleProfilePress = () => {
//     navigation.navigate("Profile"); // Navigate to your profile page
//   };

//   return (
//     <View style={styles.container}>
//       {/* Top Row: Profile Image and Icons */}
//       <View style={styles.topRow}>
//         {/* Profile Image on the Left */}
//         <TouchableOpacity 
//           style={styles.profileContainer}
//           onPress={handleProfilePress} // Added press handler
//         >
//           <Image
//             source={{ uri: profileImage || 'https://randomuser.me/api/portraits/men/1.jpg' }} // Fallback image
//             style={styles.profileImage}
//           />
//         </TouchableOpacity>

//         {/* Center-Right Icons */}
//         <View style={styles.iconGroup}>
//           <TouchableOpacity style={[styles.iconContainer, styles.notificationIcon]}>
//             <Ionicons name="notifications-outline" size={24} color="white" />
//           </TouchableOpacity>

//           <TouchableOpacity onPress={onMessagePress} style={styles.iconContainer}>
//             <Ionicons name="chatbubble-outline" size={24} color="white" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* RectangleCard inside the blue TopBar */}
//       <RectangleCard activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     // backgroundColor: '#1E2A44',
//     backgroundColor: '#212529',
//     paddingHorizontal: 16,
//     paddingTop: 50,
//     paddingBottom: 10,
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.2,
//     shadowRadius: 6,
//     borderBottomLeftRadius: 12,
//     borderBottomRightRadius: 12,
//   },
//   topRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   profileContainer: {
//     width: 55,
//     height: 55,
//     borderRadius: 22,
//     overflow: 'hidden',
//     backgroundColor: '#FFFFFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 2,
//     borderColor: '#FFD700',
//     marginLeft: 10,
//   },
//   profileImage: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 22, 
//   },
//   iconGroup: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 20,
//     paddingVertical: 4,
//     paddingHorizontal: 8,
//   },
//   iconContainer: {
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 16,
//   },
//   notificationIcon: {
//     marginLeft: 0,
//   },
// });

// export default TopBar;

import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RectangleCard from '../RectangleCard/RectangleCard';
import { useNavigation } from "@react-navigation/native";
import styles from './TopBarStyles';

const TopBar = ({ profileImage, onMessagePress, activeCategory, setActiveCategory }) => {
  const navigation = useNavigation();

  const handleProfilePress = () => {
    navigation.navigate("Profile");
  };

  return (
    <View style={styles.container}>
      {/* Profile + Icons Row */}
      <View style={styles.topRow}>
        <TouchableOpacity style={styles.profileContainer} onPress={handleProfilePress}>
          <Image
            source={{ uri: profileImage || 'https://randomuser.me/api/portraits/men/1.jpg' }}
            style={styles.profileImage}
          />
        </TouchableOpacity>

        <View style={styles.iconGroup}>
          <TouchableOpacity style={styles.iconContainer}>
            <Ionicons name="notifications-outline" size={22} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onMessagePress} style={styles.iconContainer}>
            <Ionicons name="chatbubble-outline" size={22} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* RectangleCard below TopRow */}
      <RectangleCard 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />
    </View>
  );
};

export default TopBar;
