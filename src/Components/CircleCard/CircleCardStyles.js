// // circleCardStyles.js
// import { StyleSheet } from 'react-native';

// export const styles = StyleSheet.create({
//   cardContainer: {
//     paddingVertical: 10,
//   },
//   circleCard: {
//     width: 100,
//     height: 130,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 20, // Rounded corners for the whole card
//     borderWidth: 2,
//     borderColor: '#ddd',
//     backgroundColor: '#fff',
//     marginHorizontal: 10, // Space between cards
//     elevation: 5, // Shadow for Android
//     shadowColor: '#000', // iOS Shadow
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 6,
//   },
//   circleImage: {
//     width: 70,
//     height: 70,
//     borderRadius: 35, // Makes the image circular
//   },
//   circleText: {
//     fontSize: 14,
//     color: '#333',
//     marginTop: 8,
//     textAlign: 'center',
//   },
// });


import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loaderContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  circleCard: {
    minWidth: 90,
    minHeight: 90,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    padding: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 4 },
    borderWidth: 2,
  },
  activeCard: {
    backgroundColor: '#2c3e50',
    borderColor: '#2c3e50',
  },
  inactiveCard: {
    backgroundColor: '#ecf0f1',
    borderColor: '#bdc3c7',
  },
  cardText: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  activeText: {
    color: '#fff',
  },
  inactiveText: {
    color: '#2c3e50',
  },
  languageBtn: {
    backgroundColor: '#3498db',
    marginTop: 20,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    elevation: 3,
  },
  languageText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default styles;
