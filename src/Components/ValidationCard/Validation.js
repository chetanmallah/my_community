import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const Validation = ({ loading, success }) => {
  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.card}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.text}>Sending to the backend...</Text>
        </View>
      ) : (
        success && (
          <View style={styles.card}>
            <Text style={styles.text}>Data submitted successfully!</Text>
          </View>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    zIndex: 1,
    alignItems: 'center',
  },
  card: {
    width: 250,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Validation;
