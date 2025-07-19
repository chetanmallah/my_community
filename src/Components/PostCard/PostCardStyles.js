// import { StyleSheet,  Dimensions } from 'react-native';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { isSmallDevice, fontSize } from '../../utils/responsiveHelper';

// const styles = StyleSheet.create({container: {
//     flex: 1,
//     backgroundColor: '#F5F6F5', // Soft off-white for a clean base
//     paddingTop: 10, // Space for top bar
//   },
//   card: {
//     marginBottom: 20,
//     backgroundColor: '#FFFFFF', // Crisp white
//     borderRadius: 16, // Modern rounded corners
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.15,
//     shadowRadius: 6,
//     elevation: 5,
//     marginHorizontal: 12,
//     overflow: 'hidden',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 14,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ECECEC',
//     backgroundColor: '#FAFAFA', // Subtle header distinction
//   },
//   userImage: {
//     width: 48,
//     height: 48,
//     borderRadius: 24,
//     marginRight: 12,
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//   },
//   username: {
//     fontSize: 17,
//     fontWeight: '700',
//     color: '#1A1A1A',
//   },
//   singleImageContainer: {
//     alignItems: 'center',
//     backgroundColor: '#F0F0F0',
//   },
//   singleImage: {
//     width: '100%',
//     height: 300,
//     borderRadius: 8,
//   },
//   carouselContainer: {
//     position: 'relative',
//     backgroundColor: '#F0F0F0',
//   },
//   carouselImage: {
//     width: Dimensions.get('window').width - 24,
//     height: 300,
//     borderRadius: 8,
//   },
//   videoContainer: {
//     position: 'relative',
//     width: '100%',
//     height: 300,
//     backgroundColor: '#000000',
//   },
//   video: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 8,
//   },
//   muteButton: {
//     position: 'absolute',
//     bottom: 15,
//     right: 15,
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//     borderRadius: 20,
//     padding: 8,
//   },
//   imageCounter: {
//     position: 'absolute',
//     top: 12,
//     right: 12,
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//     borderRadius: 12,
//     paddingVertical: 4,
//     paddingHorizontal: 10,
//   },
//   counterText: {
//     color: '#FFFFFF',
//     fontSize: 13,
//     fontWeight: '600',
//   },
//   actions: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 10,
//     paddingHorizontal: 14,
//     backgroundColor: '#FFFFFF',
//     borderTopWidth: 1,
//     borderTopColor: '#ECECEC',
//   },
//   actionButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginRight: 24, // Consistent spacing between actions
//   },
//   likeCount: {
//     marginLeft: 6, // Tighter spacing for counts
//     fontSize: 14,
//     color: '#4A4A4A',
//     fontWeight: '500',
//   },
//   commentCount: {
//     marginLeft: 6,
//     fontSize: 14,
//     color: '#4A4A4A',
//     fontWeight: '500',
//   },
//   description: {
//     paddingHorizontal: 14,
//     paddingVertical: 10,
//     fontSize: 15,
//     color: '#333333',
//     lineHeight: 22,
//   },
//   toggleButton: {
//     paddingVertical: 6,
//     paddingHorizontal: 14,
//   },
//   toggleText: {
//     fontSize: 14,
//     color: '#007AFF',
//     fontWeight: '600',
//   },
//   noPostsText: {
//     padding: 20,
//     textAlign: 'center',
//     fontSize: 16,
//     color: '#777777',
//     fontStyle: 'italic',
//   },
//   playPauseStatus: {
//     position: 'absolute',
//     bottom: 15,
//     left: 15,
//     fontSize: 14,
//     color: '#FFFFFF',
//     backgroundColor: 'rgba(0, 0, 0, 0.6)',
//     paddingVertical: 4,
//     paddingHorizontal: 8,
//     borderRadius: 12,
//   },
// });
// export default styles;

/// uppar wala hoga kuch toh idea nahi make sure to check 
// import { StyleSheet, Dimensions } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F6F5',
//     paddingTop: 10,
//   },
//   card: {
//     marginBottom: 20,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.15,
//     shadowRadius: 6,
//     elevation: 5,
//     marginHorizontal: 12,
//     overflow: 'hidden',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 14,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ECECEC',
//     backgroundColor: '#FAFAFA',
//   },
//   userImage: {
//     width: 48,
//     height: 48,
//     borderRadius: 24,
//     marginRight: 12,
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//   },
//   username: {
//     fontSize: 17,
//     fontWeight: '700',
//     color: '#1A1A1A',
//   },
//   singleImageContainer: {
//     alignItems: 'center',
//     backgroundColor: '#F0F0F0',
//   },
//   singleImage: {
//     width: '100%',
//     height: 300,
//     borderRadius: 8,
//   },
//   carouselContainer: {
//     position: 'relative',
//     backgroundColor: '#F0F0F0',
//   },
//   carouselImage: {
//     width: Dimensions.get('window').width - 24,
//     height: 300,
//     borderRadius: 8,
//   },
//   videoContainer: {
//     position: 'relative',
//     width: '100%',
//     height: 300,
//     backgroundColor: '#000000',
//   },
//   video: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 8,
//   },
//   muteButton: {
//     position: 'absolute',
//     bottom: 15,
//     right: 15,
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//     borderRadius: 20,
//     padding: 8,
//   },
//   imageCounter: {
//     position: 'absolute',
//     top: 12,
//     right: 12,
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//     borderRadius: 12,
//     paddingVertical: 4,
//     paddingHorizontal: 10,
//   },
//   counterText: {
//     color: '#FFFFFF',
//     fontSize: 13,
//     fontWeight: '600',
//   },
//   actions: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 10,
//     paddingHorizontal: 14,
//     backgroundColor: '#FFFFFF',
//     borderTopWidth: 1,
//     borderTopColor: '#ECECEC',
//   },
//   actionButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginRight: 24,
//   },
//   likeCount: {
//     marginLeft: 6,
//     fontSize: 14,
//     color: '#4A4A4A',
//     fontWeight: '500',
//   },
//   commentCount: {
//     marginLeft: 6,
//     fontSize: 14,
//     color: '#4A4A4A',
//     fontWeight: '500',
//   },
//   description: {
//     paddingHorizontal: 14,
//     paddingVertical: 10,
//     fontSize: 15,
//     color: '#333333',
//     lineHeight: 22,
//   },
//   toggleButton: {
//     paddingVertical: 6,
//     paddingHorizontal: 14,
//   },
//   toggleText: {
//     fontSize: 14,
//     color: '#007AFF',
//     fontWeight: '600',
//   },
//   noPostsText: {
//     padding: 20,
//     textAlign: 'center',
//     fontSize: 16,
//     color: '#777777',
//     fontStyle: 'italic',
//   },
//   playPauseStatus: {
//     position: 'absolute',
//     bottom: 15,
//     left: 15,
//     fontSize: 14,
//     color: '#FFFFFF',
//     backgroundColor: 'rgba(0, 0, 0, 0.6)',
//     paddingVertical: 4,
//     paddingHorizontal: 8,
//     borderRadius: 12,
//   },
// });

// export default styles;

/// uppar wala ok hai for mock dummy json server but testing with proper  spring boot backend 

