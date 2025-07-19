import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const FamilyTreePopup = ({ visible, onClose }) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
    >
      <View style={styles.overlay}>
        <View style={styles.popup}>
          {/* Close Button */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close" size={24} color="#000" />
          </TouchableOpacity>

          <Text style={styles.title}>Family Tree</Text>

          {/* Tree Structure */}
          <View style={styles.treeContainer}>
            {/* Grand Parents Row */}
            <View style={styles.row}>
              <SquareBox label="Grandfather" />
              <SquareBox label="Grandmother" />
            </View>

            {/* Parents Row */}
            <View style={styles.row}>
              <SquareBox label="Father" />
              <SquareBox label="Mother" />
            </View>

            {/* User Row */}
            <View style={styles.row}>
              <SquareBox label="You" />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const SquareBox = ({ label }) => (
  <View style={styles.box}>
    {/* Placeholder for future image */}
    <Text style={styles.boxLabel}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    backgroundColor: '#fff',
    width: width * 0.85,
    padding: 20,
    borderRadius: 14,
    alignItems: 'center',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    zIndex: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 20,
  },
  treeContainer: {
    width: '100%',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  box: {
    width: 70,
    height: 70,
    borderWidth: 1.5,
    borderColor: '#212529',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: '#f1f3f5',
  },
  boxLabel: {
    fontSize: 12,
    color: '#343a40',
    textAlign: 'center',
  },
});

export default FamilyTreePopup;
