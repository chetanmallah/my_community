import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import MarriageCard from "./MarriageCard";

const MarriageList = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from API
    fetch("http://your-api-endpoint/matches")
      .then((response) => response.json())
      .then((data) => {
        setMatches(data.matches);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);   
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#4CAF50" style={styles.loader} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={matches}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MarriageCard match={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 20,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MarriageList;
