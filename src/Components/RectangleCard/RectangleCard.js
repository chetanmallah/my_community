
// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   FlatList,
//   ActivityIndicator,
// } from 'react-native';
// import { useTranslation } from 'react-i18next';

// const RectangleCard = ({ activeCategory, setActiveCategory }) => {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { t } = useTranslation();

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch('http://192.168.1.116:8080/api/fed-categories/feedcategories');
//         const data = await response.json();
//         if (Array.isArray(data.categories)) {
//           setCategories(data.categories);
//         } else {
//           console.error("Invalid format from API:", data);
//         }
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCategories();
//   }, []);

//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       style={[
//         styles.rectangleCard,
//         activeCategory === item ? styles.activeCard : styles.inactiveCard,
//       ]}
//       onPress={() => setActiveCategory(item)}
//     >
//       <Text style={styles.cardText}>
//         {t(`categories.${item}`, item)}
//       </Text>
//     </TouchableOpacity>
//   );

//   if (loading) {
//     return (
//       <View style={styles.loaderContainer}>
//         <ActivityIndicator size="small" color="#725f5fff" />
//       </View>
//     );
//   }

//   return (
//     <FlatList
//       data={categories}
//       renderItem={renderItem}
//       keyExtractor={(item, index) => index.toString()}
//       horizontal
//       showsHorizontalScrollIndicator={false}
//       contentContainerStyle={styles.flatListContainer}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   loaderContainer: {
//     padding: 10,
//     alignItems: 'center',
//   },
//   flatListContainer: {
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//   },
//   rectangleCard: {
//     paddingVertical: 10,
//     paddingHorizontal: 16,
//     borderRadius: 10,
//     marginHorizontal: 6,
//     minWidth: 100,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   activeCard: {
//     backgroundColor: '#000000',     // Black background
//     borderWidth: 1.5,
//     borderColor: '#FFFFFF',         // White border for active card
//   },
//   inactiveCard: {
//     backgroundColor: '#000000',     // Solid black for inactive
//     borderWidth: 0,
//   },
//   cardText: {
//     fontSize: 13,
//     color: '#FFFFFF',
//     fontWeight: 'bold',
//     textTransform: 'uppercase',
//   },
// });



// export default RectangleCard;
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from './RectangleCardStyles';

const RectangleCard = ({ activeCategory, setActiveCategory }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://192.168.1.116:8080/api/fed-categories/feedcategories');
        const data = await response.json();
        if (Array.isArray(data.categories)) {
          setCategories(data.categories);
        } else {
          console.error("Invalid format from API:", data);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.rectangleCard,
        activeCategory === item ? styles.activeCard : styles.inactiveCard,
      ]}
      onPress={() => setActiveCategory(item)}
    >
      <Text style={styles.cardText}>
        {t(`categories.${item}`, item)}
      </Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="small" color="#725f5fff" />
      </View>
    );
  }

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.flatListContainer}
    />
  );
};

export default RectangleCard;
