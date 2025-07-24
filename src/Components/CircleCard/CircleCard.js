
// import React, { useEffect, useState } from 'react';
// import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';

// const CircleCard = ({ activeCategory, setActiveCategory }) => {
//   const [categories, setCategories] = useState([]);

//   // Fetch categories data from API
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch('http://192.168.1.116:3000/categories');
//         const data = await response.json();
//         setCategories(data); // Set fetched categories data
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   const renderItem = ({ item }) => (
//     <View>
//       <TouchableOpacity
//         style={[
//           styles.circleCard,
//           activeCategory === item.name ? styles.activeCard : styles.inactiveCard,
//         ]}
//         onPress={() => {
//           setActiveCategory(item.name); // On press, set active category
//         }}
//       >
//         <View style={styles.cardImageContainer}>
//           <Image source={{ uri: item.img }} style={styles.cardImage} />
//         </View>
//       </TouchableOpacity>

//       <View style={[styles.cardTextContainer, activeCategory === item.name ? styles.activeTextBox : styles.inactiveTextBox]}>
//         <Text style={styles.cardText}>{item.name}</Text>
//       </View>
//     </View>
//   );

//   return (
//     <FlatList
//       data={categories}
//       renderItem={renderItem}
//       keyExtractor={(item) => item.id.toString()}
//       horizontal
//       showsHorizontalScrollIndicator={false}
//     />
//   );
// };
// older hia uppa kaa 


// import React, { useEffect, useState } from 'react';
// import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
// import { useTranslation } from 'react-i18next'; // Import i18next

// const CircleCard = ({ activeCategory, setActiveCategory }) => {
//   const [categories, setCategories] = useState([]);
//   const { t } = useTranslation(); // Initialize translation hook

//   // Fetch categories data from API
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch('http://192.168.1.116:3000/categories');
//         const data = await response.json();
//         setCategories(data); // Set fetched categories data
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   const renderItem = ({ item }) => (
//     <View>
//       <TouchableOpacity
//         style={[
//           styles.circleCard,
//           activeCategory === item.name ? styles.activeCard : styles.inactiveCard,
//         ]}
//         onPress={() => {
//           setActiveCategory(item.name); // On press, set active category
//         }}
//       >
//         <View style={styles.cardImageContainer}>
//           <Image source={{ uri: item.img }} style={styles.cardImage} />
//         </View>
//       </TouchableOpacity>

//       <View
//         style={[
//           styles.cardTextContainer,
//           activeCategory === item.name ? styles.activeTextBox : styles.inactiveTextBox,
//         ]}
//       >
//         <Text style={styles.cardText}>{t(`categories.${item.name}`, item.name)}</Text>
//       </View>
//     </View>
//   );

//   return (
//     <FlatList
//       data={categories}
//       renderItem={renderItem}
//       keyExtractor={(item) => item.id.toString()}
//       horizontal
//       showsHorizontalScrollIndicator={false}
//     />
//   );
// };



// const styles = StyleSheet.create({
//   circleCard: {
//     width: 90,
//     height: 90,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 50, // Fully rounded
//     marginHorizontal: 10, // Space between cards
//     elevation: 5, // Shadow for Android
//     shadowOpacity: 0.2,
//     shadowRadius: 6,
//     borderWidth: 2,
//   },
//   activeCard: {
//     borderColor: '#000', // Black border for active
//     backgroundColor: '#000', // Dark background for active
//   },
//   inactiveCard: {
//     borderColor: '#E0E0E0', // Light gray border for inactive
//     backgroundColor: '#F5F5F5', // Soft gray background
//   },
//   cardImageContainer: {
//     width: 80,
//     height: 80,
//     borderRadius: 50,
//     backgroundColor: '#FFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     overflow: 'hidden',
//   },
//   cardImage: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
//   cardTextContainer: {
//     marginTop: 10,
//     paddingVertical: 6,
//     paddingHorizontal: 12,
//     borderRadius: 20, // Rounded box
//     alignSelf: 'center',
//   },
//   activeTextBox: {
//     backgroundColor: '#000', // Active text box background
//   },
//   inactiveTextBox: {
//     backgroundColor: '#E0E0E0', // Light gray for inactive
//   },
//   cardText: {
//     fontSize: 16,
//     color: '#FFF', // White text
//     textAlign: 'center',
//     fontWeight: '600',
//   },
// });

// export default CircleCard;

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from './CircleCardStyles';

const CircleCard = ({ activeCategory, setActiveCategory }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://192.168.1.116:8080/api/fed-categories/feedcategories');
        const data = await response.json();

        if (Array.isArray(data.categories)) {
          setCategories(data.categories);
        } else {
          console.error('Invalid categories response');
        }
      } catch (err) {
        console.error('Fetch categories failed:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.circleCard,
        activeCategory === item ? styles.activeCard : styles.inactiveCard,
      ]}
      onPress={() => setActiveCategory(item)}
    >
      <Text
        style={[
          styles.cardText,
          activeCategory === item ? styles.activeText : styles.inactiveText,
        ]}
      >
        {t(`categories.${item}`, item)}
      </Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#3498db" />
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item, index) => item + index}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />

      {/* Language Switcher Button */}
      <TouchableOpacity style={styles.languageBtn} onPress={() => {
        const nextLang = i18n.language === 'en' ? 'gj' : 'en';
        i18n.changeLanguage(nextLang);
      }}>
        <Text style={styles.languageText}>
          {i18n.language === 'en' ? 'Gujarati' : 'English'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CircleCard;






