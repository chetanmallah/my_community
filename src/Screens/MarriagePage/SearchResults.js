import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import MarriageCard from '../../Components/MarriageCard/MarriageCard'; // adjust the path
import { useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SearchResults = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { matches = [] } = route.params || {};

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#212529" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Search Results</Text>
      </View>

      {/* Matches List */}
      {matches.length === 0 ? (
        <View style={styles.noResults}>
          <Text style={styles.noResultsText}>No matches found.</Text>
        </View>
      ) : (
       <FlatList
  data={route.params.matches}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item }) => <MarriageCard match={item} />}
/>

      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#212529',
  },
  noResults: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResultsText: {
    fontSize: 18,
    color: '#888',
  },
});

export default SearchResults;
