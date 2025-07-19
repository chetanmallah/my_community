
// import React, { useState } from "react";
// import { View, Text, Button } from "react-native";
// import { RadioButton } from "react-native-paper";
// import styles from "./SecondPageStyles";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useMemberStatus } from "../../context/MemberStatusContext";
// import { useTranslation } from 'react-i18next';

// const SecondPage = ({ navigation }) => {
//   const [selectedMemberStatus, setSelectedMemberStatus] = useState(null); // Track the selected status
//   const { setMemberStatus } = useMemberStatus(); // Access the setter function

//   const handleSubmit = () => {
//     if (selectedMemberStatus) {
//       setMemberStatus(selectedMemberStatus); // Update context value
//       navigation.navigate("Auth"); // Navigate to Auth page
//     } else {
//       alert("Please select a member status before proceeding.");
//     }
//   };

 
//    const {t, i18n} = useTranslation(); // for testing localization , multi languiage support
  
//      const changeLanguage = () => {
//       if(i18n.language === "en") {
//           i18n.changeLanguage('gj')
//       } 
//       else {
//         i18n.changeLanguage('en')
//       }
//      }

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>{t('MemberStatus')}</Text>
//       <View style={styles.radioGroup}>
//         <Text style={styles.radioLabel}>
//           {t('existingOrNewMember')}
//         </Text>

//         <View style={styles.radioButtonContainer}>
//           <RadioButton
//             value="existing"
//             status={selectedMemberStatus === "existing" ? "checked" : "unchecked"}
//             onPress={() => setSelectedMemberStatus("existing")}
//           />
//           <Text style={styles.radioButtonText}>{t('Already a Member')}</Text>
//         </View>

//         <View style={styles.radioButtonContainer}>
//           <RadioButton
//             value="new"
//             status={selectedMemberStatus === "new" ? "checked" : "unchecked"}
//             onPress={() => setSelectedMemberStatus("new")}
//           />
//           <Text style={styles.radioButtonText}>{t('New Member')}</Text>
//         </View>
//       </View>

//       {/* Submit Button */}
//       <Button title={t('submit')} onPress={handleSubmit} />
//     </SafeAreaView>
//   );
// };

// export default SecondPage;


// upar ka bhi ok aii but neeche wale mein more styling kar rhe 1 march 

import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { RadioButton } from "react-native-paper";
import styles from "./SecondPageStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useMemberStatus } from "../../context/MemberStatusContext";
import { useTranslation } from 'react-i18next';

const SecondPage = ({ navigation }) => {
  const [selectedMemberStatus, setSelectedMemberStatus] = useState(null);
  const { setMemberStatus } = useMemberStatus();

  const handleSubmit = () => {
    if (selectedMemberStatus) {
      setMemberStatus(selectedMemberStatus); 
      navigation.navigate("Auth"); 
    } else {
      alert("Please select a member status before proceeding.");
    }
  };

  const { t, i18n } = useTranslation(); 

  const changeLanguage = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage('gj');
    } else {
      i18n.changeLanguage('en');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{t('MemberStatus')}</Text>
      <View style={styles.radioGroup}>
        <Text style={styles.radioLabel}>
          {t('existingOrNewMember')}
        </Text>

        {/* Existing member option - entire area is clickable */}
        <TouchableOpacity
          style={styles.radioButtonContainer}
          onPress={() => setSelectedMemberStatus("existing")}
          activeOpacity={0.7}
        >
          <View pointerEvents="none">
            <RadioButton
              value="existing"
              status={selectedMemberStatus === "existing" ? "checked" : "unchecked"}
              color="#242526"
              uncheckedColor="#ccc"
            />
          </View>
          <Text style={styles.radioButtonText}>{t('Already a Member')}</Text>
        </TouchableOpacity>

        {/* New member option - entire area is clickable */}
        <TouchableOpacity
          style={styles.radioButtonContainer}
          onPress={() => setSelectedMemberStatus("new")}
          activeOpacity={0.7}
        >
          <View pointerEvents="none">
            <RadioButton
              value="new"
              status={selectedMemberStatus === "new" ? "checked" : "unchecked"}
              color="#242526"
              uncheckedColor="#ccc"
            />
          </View>
          <Text style={styles.radioButtonText}>{t('New Member')}</Text>
        </TouchableOpacity>
      </View>

      {/* Submit Button */}
      <TouchableOpacity 
        style={styles.submitButton} 
        onPress={handleSubmit}
        activeOpacity={0.7}
      >
        <Text style={styles.submitButtonText}>{t('submit')}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SecondPage;

