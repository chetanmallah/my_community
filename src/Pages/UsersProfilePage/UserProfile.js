
// import React from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';

// const UserProfile = () => {
//   const navigation = useNavigation();

//   const handleFamilyTreePress = () => {
//     // Navigate to FamilyTree component
//     navigation.navigate('FamilyTree');
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header with Back Button */}
//       <View style={styles.headerContainer}>
//         <TouchableOpacity 
//           style={styles.backButton} 
//           onPress={() => navigation.goBack()}
//           activeOpacity={0.7}
//         >
//           <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Profile</Text>
//       </View>

//       <ScrollView style={styles.scrollContainer}>
//         {/* Profile Header */}
//         <View style={styles.profileHeader}>
//           <View style={styles.avatarContainer}>
//             <Image
//               source={{ uri: 'https://randomuser.me/api/portraits/men/22.jpg' }}
//               style={styles.avatar}
//             />
//             <View style={styles.verifiedBadge}>
//               <MaterialIcons name="verified" size={16} color="#FFFFFF" />
//             </View>
//           </View>

//           <Text style={styles.name}>Ravi Desai</Text>
//           <Text style={styles.subText}>28 • Software Engineer • Mumbai</Text>
          
//           <View style={styles.communityBadge}>
//             <Text style={styles.communityText}>Shree Halari Visa Oswal</Text>
//           </View>

//           {/* Action Button */}
//           <TouchableOpacity 
//             style={styles.primaryButton} 
//             activeOpacity={0.7}
//           >
//             <Feather name="send" size={20} color="#FFFFFF" />
//             <Text style={styles.actionButtonText}>Send Interest</Text>
//           </TouchableOpacity>
//         </View>

//         {/* About Section */}
//         <View style={styles.card}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>About Ravi</Text>
//             <TouchableOpacity onPress={handleFamilyTreePress}>
//               <MaterialIcons name="account-tree" size={24} color="#212529" />
//             </TouchableOpacity>
//           </View>
//           <Text style={styles.description}>
//             Calm, ambitious, and family-oriented. I love traveling and value honesty, respect, and shared dreams in a relationship.
//           </Text>
//         </View>

//         {/* Basic Info */}
//         <View style={styles.card}>
//           <Text style={styles.sectionTitle}>Personal Info</Text>
          
//           <View style={styles.detailItem}>
//             <Text style={styles.detailLabel}>Age</Text>
//             <Text style={styles.detailValue}>28</Text>
//           </View>
          
//           <View style={styles.detailItem}>
//             <Text style={styles.detailLabel}>Height</Text>
//             <Text style={styles.detailValue}>5'8"</Text>
//           </View>
          
//           <View style={styles.detailItem}>
//             <Text style={styles.detailLabel}>Marital Status</Text>
//             <Text style={styles.detailValue}>Single</Text>
//           </View>
          
//           <View style={styles.detailItem}>
//             <Text style={styles.detailLabel}>Education</Text>
//             <Text style={styles.detailValue}>B.Tech in Computer Science</Text>
//           </View>
          
//           <View style={styles.detailItem}>
//             <Text style={styles.detailLabel}>Profession</Text>
//             <Text style={styles.detailValue}>Software Engineer at Infosys</Text>
//           </View>
//         </View>

//         {/* Family Info */}
//         <View style={styles.card}>
//           <Text style={styles.sectionTitle}>Family Details</Text>
          
//           <View style={styles.detailItem}>
//             <Text style={styles.detailLabel}>Father</Text>
//             <Text style={styles.detailValue}>Mahesh Desai (Businessman)</Text>
//           </View>
          
//           <View style={styles.detailItem}>
//             <Text style={styles.detailLabel}>Mother</Text>
//             <Text style={styles.detailValue}>Sunita Desai (Homemaker)</Text>
//           </View>
          
//           <View style={styles.detailItem}>
//             <Text style={styles.detailLabel}>Siblings</Text>
//             <Text style={styles.detailValue}>1 Elder Sister (Married)</Text>
//           </View>
          
//           <View style={styles.detailItem}>
//             <Text style={styles.detailLabel}>Gotra</Text>
//             <Text style={styles.detailValue}>Vaishya</Text>
//           </View>
//         </View>

//         {/* Additional Space at Bottom */}
//         <View style={styles.spacer} />
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   scrollContainer: {
//     flex: 1,
//   },
//   headerContainer: {
//     backgroundColor: '#212529',
//     paddingTop: 50,
//     paddingBottom: 20,
//     paddingHorizontal: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   backButton: {
//     marginRight: 15,
//   },
//   headerTitle: {
//     color: '#FFFFFF',
//     fontSize: 20,
//     fontWeight: '600',
//   },
//   profileHeader: {
//     alignItems: 'center',
//     padding: 25,
//     paddingBottom: 15,
//     backgroundColor: '#FFFFFF',
//     marginBottom: 10,
//   },
//   avatarContainer: {
//     position: 'relative',
//     marginBottom: 15,
//   },
//   avatar: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     borderWidth: 3,
//     borderColor: '#212529',
//   },
//   verifiedBadge: {
//     position: 'absolute',
//     bottom: 5,
//     right: 5,
//     backgroundColor: '#212529',
//     borderRadius: 10,
//     width: 20,
//     height: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#212529',
//     marginBottom: 5,
//   },
//   subText: {
//     fontSize: 15,
//     color: '#6c757d',
//     marginBottom: 15,
//   },
//   communityBadge: {
//     backgroundColor: '#f8f9fa',
//     paddingHorizontal: 15,
//     paddingVertical: 8,
//     borderRadius: 20,
//     marginBottom: 20,
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//   },
//   communityText: {
//     fontSize: 13,
//     color: '#212529',
//     fontWeight: '500',
//   },
//   primaryButton: {
//     flexDirection: 'row',
//     backgroundColor: '#212529',
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     borderRadius: 8,
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: 8,
//     width: '100%',
//   },
//   actionButtonText: {
//     color: '#FFFFFF',
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   card: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 12,
//     padding: 20,
//     marginHorizontal: 15,
//     marginBottom: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 4,
//     elevation: 2,
//     borderWidth: 1,
//     borderColor: '#f1f1f1',
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#212529',
//     marginBottom: 15,
//   },
//   description: {
//     fontSize: 15,
//     color: '#495057',
//     lineHeight: 22,
//   },
//   detailItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f1f1f1',
//   },
//   detailLabel: {
//     fontSize: 14,
//     color: '#6c757d',
//     fontWeight: '500',
//     flex: 1,
//   },
//   detailValue: {
//     fontSize: 14,
//     color: '#212529',
//     fontWeight: '400',
//     flex: 1.5,
//     textAlign: 'right',
//   },
//   spacer: {
//     height: 30,
//   },
// });

// export default UserProfile;


// stylign neww 

// designn is okkk but adding new compoent family tree component testign rest is okk 
// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   ActivityIndicator,
// } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';

// const calculateAge = (dobString) => {
//   const dob = new Date(dobString);
//   const today = new Date();
//   let age = today.getFullYear() - dob.getFullYear();
//   const m = today.getMonth() - dob.getMonth();
//   if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
//     age--;
//   }
//   return age;
// };

// const UserProfile = () => {
//   const navigation = useNavigation();
//   const route = useRoute();
//   const { userId } = route.params;

//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchUserDetails = async () => {
//     try {
//       const token = await AsyncStorage.getItem("token");

//       if (!token) {
//         console.error("No token found in storage");
//         return;
//       }

//       const res = await fetch(`http://192.168.1.116:8080/api/users/${userId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//       });

//       const text = await res.text();
//       if (!text) {
//         console.error("Empty response from API");
//         return;
//       }

//       const data = JSON.parse(text);
//       setUser(data);
//     } catch (err) {
//       console.error("Failed to fetch user:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUserDetails();
//   }, [userId]);

//   if (loading) {
//     return (
//       <View style={styles.loaderContainer}>
//         <ActivityIndicator size="large" color="#212529" />
//       </View>
//     );
//   }

//   if (!user) {
//     return (
//       <View style={styles.loaderContainer}>
//         <Text style={{ color: "#333" }}>User data not found.</Text>
//       </View>
//     );
//   }

//   const {
//     firstName,
//     lastName,
//     gender,
//     maritalStatus,
//     dob,
//     height,
//     weight,
//     bloodGroup,
//     fatherName,
//     motherName,
//     address,
//     emergencyContact,
//   } = user;

//   const age = calculateAge(dob);

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.headerContainer}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Ionicons name="arrow-back" size={24} color="#fff" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Profile</Text>
//       </View>

//       <ScrollView style={styles.scrollContainer} contentContainerStyle={{ paddingBottom: 60 }}>
//         {/* Profile Avatar + Name */}
//         <View style={styles.profileTop}>
//           <Image
//             source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
//             style={styles.avatar}
//           />
//           <Text style={styles.name}>{firstName}</Text>
//           <Text style={styles.name}>{lastName}</Text>
//         </View>

//         {/* Profile Detail Card */}
//         <View style={styles.card}>
//           {renderDetail("Age", age)}
//           {renderDetail("Gender", gender)}
//           {renderDetail("Marital Status", maritalStatus)}
//           {renderDetail("Height", height ? `${height} ft` : null)}
//           {renderDetail("Weight", weight ? `${weight} kg` : null)}
//           {renderDetail("Blood Group", bloodGroup)}
//           {renderDetail("Address", address)}
//           {renderDetail("Emergency Contact", emergencyContact)}
//         </View>

//         {/* Family Info Section */}
//         <View style={styles.card}>
//           <Text style={styles.sectionTitle}>Family Details</Text>
//           {renderDetail("Father", fatherName)}
//           {renderDetail("Mother", motherName)}
//           {/* Optionally, add siblings or gotra here */}
//         </View>

//         {/* Family Tree Button */}
//         <TouchableOpacity
//           style={styles.primaryButton}
//           onPress={() => navigation.navigate("FamilyTree", { userId })}
//         >
//           <MaterialIcons name="account-tree" size={20} color="#fff" />
//           <Text style={styles.primaryButtonText}>View Family Tree</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// };

// const renderDetail = (label, value) => {
//   if (!value) return null;
//   return (
//     <View style={styles.detailRow}>
//       <Text style={styles.detailLabel}>{label}</Text>
//       <Text style={styles.detailValue}>{value}</Text>
//     </View>
//   );
// };



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   headerContainer: {
//     backgroundColor: "#212529",
//     paddingTop: 50,
//     paddingBottom: 16,
//     paddingHorizontal: 20,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   backButton: {
//     marginRight: 15,
//   },
//   headerTitle: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   scrollContainer: {
//     paddingHorizontal: 20,
//   },
//   profileTop: {
//     alignItems: "center",
//     marginTop: 30,
//     marginBottom: 30,
//   },
//   avatar: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     marginBottom: 12,
//   },
//   name: {
//     fontSize: 20,
//     fontWeight: "600",
//     color: "#212529",
//   },
//   card: {
//     backgroundColor: "#f8f9fa",
//     padding: 16,
//     borderRadius: 10,
//     marginBottom: 20,
//     shadowColor: "#000",
//     shadowOpacity: 0.05,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: "600",
//     color: "#212529",
//     marginBottom: 10,
//   },
//   detailRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingVertical: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: "#e9ecef",
//   },
//   detailLabel: {
//     fontWeight: "500",
//     color: "#495057",
//   },
//   detailValue: {
//     color: "#343a40",
//   },
//   primaryButton: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#212529",
//     paddingVertical: 14,
//     marginTop: 10,
//     borderRadius: 8,
//   },
//   primaryButtonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//     marginLeft: 8,
//   },
//   loaderContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default UserProfile;

///   implemnt family tree cmponent 
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Modal,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';



const calculateAge = (dobString) => {
  const dob = new Date(dobString);
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
    age--;
  }
  return age;
};

const UserProfile = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { userId } = route.params;
    console.log("Received userId:", userId); // ✅ Debug


  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showTree, setShowTree] = useState(false); // Popup toggle

  const fetchUserDetails = async () => {
    try {
      const token = await AsyncStorage.getItem("token");

      if (!token) {
        console.error("No token found in storage");
        return;
      }
      

      const res = await fetch(`http://192.168.1.116:8080/api/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const text = await res.text();
      if (!text) {
        console.error("Empty response from API");
        return;
      }

      const data = JSON.parse(text);
      setUser(data);
    } catch (err) {
      console.error("Failed to fetch user:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, [userId]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#212529" />
      </View>
    );
  }

  if (!user) {
    return (
      <View style={styles.loaderContainer}>
        <Text style={{ color: "#333" }}>User data not found.</Text>
      </View>
    );
  }

  const {
    firstName,
    lastName,
    gender,
    maritalStatus,
    dob,
    height,
    weight,
    bloodGroup,
    fatherName,
    motherName,
    address,
    emergencyContact,
  } = user;

  const age = calculateAge(dob);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <ScrollView style={styles.scrollContainer} contentContainerStyle={{ paddingBottom: 60 }}>
        {/* Profile Avatar + Name */}
        <View style={styles.profileTop}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
            style={styles.avatar}
          />
          <Text style={styles.name}>{firstName}</Text>
          <Text style={styles.name}>{lastName}</Text>
        </View>

        {/* Profile Detail Card */}
        <View style={styles.card}>
          {renderDetail("Age", age)}
          {renderDetail("Gender", gender)}
          {renderDetail("Marital Status", maritalStatus)}
          {renderDetail("Height", height ? `${height} ft` : null)}
          {renderDetail("Weight", weight ? `${weight} kg` : null)}
          {renderDetail("Blood Group", bloodGroup)}
          {renderDetail("Address", address)}
          {renderDetail("Emergency Contact", emergencyContact)}
        </View>

        {/* Family Info Section */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Family Details</Text>
          {renderDetail("Father", fatherName)}
          {renderDetail("Mother", motherName)}
        </View>

        {/* Button to open family tree popup */}
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => setShowTree(true)}
        >
          <MaterialIcons name="account-tree" size={20} color="#fff" />
          <Text style={styles.primaryButtonText}>View Family Tree</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Popup Family Tree */}
      <Modal transparent visible={showTree} animationType="fade">
        <View style={popupStyles.overlay}>
          <View style={popupStyles.popup}>
            <TouchableOpacity style={popupStyles.closeButton} onPress={() => setShowTree(false)}>
              <Ionicons name="close" size={22} color="#000" />
            </TouchableOpacity>
            <Text style={popupStyles.title}>Family Tree</Text>

            <View style={popupStyles.treeContainer}>
              <View style={popupStyles.row}>
                <TreeBox label="Grandfather" />
                <TreeBox label="Grandmother" />
              </View>
              <View style={popupStyles.row}>
                <TreeBox label="Father" />
                <TreeBox label="Mother" />
              </View>
              <View style={popupStyles.row}>
                <TreeBox label="You" />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const TreeBox = ({ label }) => (
  <View style={popupStyles.box}>
    <Text style={popupStyles.boxLabel}>{label}</Text>
  </View>
);

const renderDetail = (label, value) => {
  if (!value) return null;
  return (
    <View style={styles.detailRow}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    backgroundColor: "#212529",
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  profileTop: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    color: "#212529",
  },
  card: {
    backgroundColor: "#f8f9fa",
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#212529",
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#e9ecef",
  },
  detailLabel: {
    fontWeight: "500",
    color: "#495057",
  },
  detailValue: {
    color: "#343a40",
  },
  primaryButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#212529",
    paddingVertical: 14,
    marginTop: 10,
    borderRadius: 8,
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

// Popup styles
const popupStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  popup: {
    backgroundColor: "#fff",
    padding: 20,
    width: "85%",
    borderRadius: 12,
    position: "relative",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#212529",
  },
  treeContainer: {
    alignItems: "center",
    width: "100%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 12,
  },
  box: {
    width: 70,
    height: 70,
    borderWidth: 1.5,
    borderColor: "#212529",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    backgroundColor: "#f1f3f5",
  },
  boxLabel: {
    fontSize: 12,
    color: "#343a40",
    textAlign: "center",
  },
});

export default UserProfile;
