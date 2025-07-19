
// import React, { useState, useCallback, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   StyleSheet,
//   Keyboard,
// } from "react-native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { RadioButton } from "react-native-paper";
// import { useNavigation, useFocusEffect } from "@react-navigation/native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const Marriage = () => {
//   const [ageFrom, setAgeFrom] = useState("");
//   const [ageTo, setAgeTo] = useState("");
//   const [gender, setGender] = useState("");
//   const [status, setStatus] = useState("");
//   const [isFormValid, setIsFormValid] = useState(false);
//   const navigation = useNavigation();

//   useEffect(() => {
//     setIsFormValid(
//       gender !== "" &&
//       status !== "" &&
//       ageFrom !== "" &&
//       ageTo !== "" &&
//       Number(ageFrom) <= Number(ageTo)
//     );
//   }, [ageFrom, ageTo, gender, status]);

//   useFocusEffect(
//     useCallback(() => {
//       setAgeFrom("");
//       setAgeTo("");
//       setGender("");
//       setStatus("");
//     }, [])
//   );

//   const fetchMatches = async () => {
//     if (!isFormValid) return;
    
//     Keyboard.dismiss();
    
//     try {
//       const token = await AsyncStorage.getItem("token");
//       if (!token) throw new Error("Please login first");

//       const response = await fetch(`http://192.168.0.108:8080/api/users/filter?${new URLSearchParams({
//         gender: gender.charAt(0).toUpperCase() + gender.slice(1),
//         maritalStatus: status.charAt(0).toUpperCase() + status.slice(1),
//         ageFrom,
//         ageTo,
//       }).toString()}`, {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });

//       if (!response.ok) throw new Error("Failed to fetch matches");
//       const data = await response.json();
//       navigation.navigate("SearchResults", { matches: data });
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView 
//         contentContainerStyle={styles.scrollContent}
//         keyboardShouldPersistTaps="handled"
//       >
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.title}>Find Your Match</Text>
//           <Text style={styles.subtitle}>Enter your preferences below</Text>
//         </View>

//         {/* Gender Selection */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>I'm looking for*</Text>
//           <View style={styles.genderRow}>
//             {["male", "female"].map((option) => (
//               <TouchableOpacity
//                 key={option}
//                 style={[
//                   styles.genderButton,
//                   gender === option && styles.genderButtonSelected
//                 ]}
//                 onPress={() => setGender(option)}
//                 activeOpacity={0.8}
//               >
//                 <MaterialCommunityIcons
//                   name={`gender-${option}`}
//                   size={28}
//                   color={gender === option ? "#fff" : "#000"}
//                 />
//                 <Text style={[
//                   styles.genderText,
//                   gender === option && styles.genderTextSelected
//                 ]}>
//                   {option.charAt(0).toUpperCase() + option.slice(1)}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </View>

//         {/* Age Range */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Age Range*</Text>
//           <View style={styles.ageRow}>
//             <TextInput
//               style={styles.ageInput}
//               placeholder="From"
//               placeholderTextColor="#999"
//               value={ageFrom}
//               onChangeText={setAgeFrom}
//               keyboardType="numeric"
//             />
//             <Text style={styles.ageSeparator}>-</Text>
//             <TextInput
//               style={styles.ageInput}
//               placeholder="To"
//               placeholderTextColor="#999"
//               value={ageTo}
//               onChangeText={setAgeTo}
//               keyboardType="numeric"
//             />
//           </View>
//         </View>

//         {/* Marital Status */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Marital Status*</Text>
//           <RadioButton.Group onValueChange={setStatus} value={status}>
//             <View style={styles.radioGroup}>
//               {["single", "widowed", "divorcee"].map((option) => (
//                 <TouchableOpacity
//                   key={option}
//                   style={styles.radioOption}
//                   onPress={() => setStatus(option)}
//                   activeOpacity={0.7}
//                 >
//                   <RadioButton 
//                     value={option} 
//                     color="#000" 
//                     uncheckedColor="#aaa"
//                   />
//                   <Text style={styles.radioText}>
//                     {option.charAt(0).toUpperCase() + option.slice(1)}
//                   </Text>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           </RadioButton.Group>
//         </View>

//         {/* Search Button */}
//         <TouchableOpacity
//           style={[
//             styles.searchButton,
//             !isFormValid && styles.searchButtonDisabled
//           ]}
//           onPress={fetchMatches}
//           disabled={!isFormValid}
//           activeOpacity={0.9}
//         >
//           <Text style={styles.searchButtonText}>Find Matches</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   scrollContent: {
//     paddingHorizontal: 30,
//     paddingTop: 30, // Lowered content position
//     paddingBottom: 40,
//   },
//   header: {
//     marginBottom: 35,
//   },
//   title: {
//     fontSize: 40,
//     fontWeight: "700",
//     color: "#000",
//     marginBottom: 8,
//     textAlign: "center",
//     marginTop: 75,
//   },
//   subtitle: {
//     fontSize: 18,
//     color: "#666",
//     textAlign: "center",
//   },
//   section: {
//     marginBottom: 30,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "#000",
//     marginBottom: 15,
//   },
//   genderRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     gap: 15,
//   },
//   genderButton: {
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     paddingVertical: 15,
//     borderRadius: 10,
//     backgroundColor: "#f5f5f5",
//   },
//   genderButtonSelected: {
//     backgroundColor: "#000",
//   },
//   genderText: {
//     fontSize: 18,
//     fontWeight: "500",
//     color: "#000",
//     marginLeft: 10,
//   },
//   genderTextSelected: {
//     color: "#fff",
//   },
//   ageRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 10,
//   },
//   ageInput: {
//     flex: 1,
//     borderBottomWidth: 1,
//     borderColor: "#ddd",
//     paddingVertical: 12,
//     fontSize: 18,
//   },
//   ageSeparator: {
//     fontSize: 18,
//     color: "#000",
//     fontWeight: "500",
//   },
//   radioGroup: {
//     marginLeft: -10,
//   },
//   radioOption: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: 10,
//   },
//   radioText: {
//     fontSize: 18,
//     color: "#000",
//     marginLeft: 10,
//   },
//   searchButton: {
//     backgroundColor: "#000",
//     paddingVertical: 18,
//     borderRadius: 10,
//     alignItems: "center",
//     marginTop: 20,
//   },
//   searchButtonDisabled: {
//     backgroundColor: "#aaa",
//   },
//   searchButtonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "600",
//   },
// });

// export default Marriage;
import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Keyboard
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./MarriageStyles"; // ✅ Import responsive styles

const Marriage = () => {
  const [ageFrom, setAgeFrom] = useState("");
  const [ageTo, setAgeTo] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    setIsFormValid(
      gender !== "" &&
      status !== "" &&
      ageFrom !== "" &&
      ageTo !== "" &&
      Number(ageFrom) <= Number(ageTo)
    );
  }, [ageFrom, ageTo, gender, status]);

  useFocusEffect(
    useCallback(() => {
      setAgeFrom("");
      setAgeTo("");
      setGender("");
      setStatus("");
    }, [])
  );

  const fetchMatches = async () => {
    if (!isFormValid) return;

    Keyboard.dismiss();

    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) throw new Error("Please login first");

      const response = await fetch(
        `http://192.168.0.108:8080/api/users/filter?${new URLSearchParams({
          gender: gender.charAt(0).toUpperCase() + gender.slice(1),
          maritalStatus: status.charAt(0).toUpperCase() + status.slice(1),
          ageFrom,
          ageTo
        }).toString()}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
      );

      if (!response.ok) throw new Error("Failed to fetch matches");

      const data = await response.json();
      navigation.navigate("SearchResults", { matches: data });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.header}>
          <Text style={styles.title}>Find Your Match</Text>
          <Text style={styles.subtitle}>Enter your preferences below</Text>
        </View>

        {/* Gender */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>I'm looking for*</Text>
          <View style={styles.genderRow}>
            {["male", "female"].map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.genderButton,
                  gender === option && styles.genderButtonSelected
                ]}
                onPress={() => setGender(option)}
              >
                <MaterialCommunityIcons
                  name={`gender-${option}`}
                  size={28}
                  color={gender === option ? "#fff" : "#000"}
                />
                <Text
                  style={[
                    styles.genderText,
                    gender === option && styles.genderTextSelected
                  ]}
                >
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Age */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Age Range*</Text>
          <View style={styles.ageRow}>
            <TextInput
              style={styles.ageInput}
              placeholder="From"
              placeholderTextColor="#999"
              value={ageFrom}
              onChangeText={setAgeFrom}
              keyboardType="numeric"
            />
            <Text style={styles.ageSeparator}>-</Text>
            <TextInput
              style={styles.ageInput}
              placeholder="To"
              placeholderTextColor="#999"
              value={ageTo}
              onChangeText={setAgeTo}
              keyboardType="numeric"
            />
          </View>
        </View>

        {/* Marital Status */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Marital Status*</Text>
          <RadioButton.Group onValueChange={setStatus} value={status}>
            <View style={styles.radioGroup}>
              {["single", "widowed", "divorcee"].map((option) => (
                <TouchableOpacity
                  key={option}
                  style={styles.radioOption}
                  onPress={() => setStatus(option)}
                >
                  <RadioButton value={option} color="#000" />
                  <Text style={styles.radioText}>
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </RadioButton.Group>
        </View>

        {/* Button */}
        <TouchableOpacity
          style={[
            styles.searchButton,
            !isFormValid && styles.searchButtonDisabled
          ]}
          onPress={fetchMatches}
          disabled={!isFormValid}
        >
          <Text style={styles.searchButtonText}>Find Matches</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Marriage;
