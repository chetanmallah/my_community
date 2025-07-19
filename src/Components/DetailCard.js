import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';

const DetailCard = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch categories from the local JSON server
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:3000/categories'); // Local JSON Server URL
        const data = await response.json();
        setCategories(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
  }

  return (
    <View style={styles.container}>
      {categories.map((category) => (
        <View key={category.id} style={styles.card}>
          {category.img && (
            <Image source={{ uri: category.img }} style={styles.cardImage} />
          )}
          <View style={styles.cardDetails}>
            <Text style={styles.cardTitle}>{category.name}</Text>
            {category.email && <Text style={styles.cardEmail}>{category.email}</Text>}
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  loader: {
    marginTop: 50,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  cardDetails: {
    marginTop: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardEmail: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
});

export default DetailCard;
