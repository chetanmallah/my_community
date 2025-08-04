import { Dimensions, Platform, PixelRatio } from 'react-native';
import { 
  widthPercentageToDP as wp, 
  heightPercentageToDP as hp 
} from 'react-native-responsive-screen';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// Screen size breakpoints
export const isPixel2 = screenWidth <= 415;
export const isSmallDevice = screenWidth <= 480;
export const isMediumDevice = screenWidth > 480 && screenWidth < 768;
export const isLargeDevice = screenWidth >= 768;
export const isTablet = screenWidth >= 768;

// Responsive font scaling with better algorithm
export const fontSize = (size) => {
  const scale = screenWidth / 375; // Base on iPhone 6/7/8 width
  let newSize = size * scale;
  
  // Apply device-specific adjustments
  if (isPixel2) {
    newSize = newSize * 0.85;
  } else if (isSmallDevice) {
    newSize = newSize * 0.9;
  } else if (isLargeDevice) {
    newSize = newSize * 1.1;
  }
  
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  
  return Math.round(newSize);
};

// Responsive width scaling
export const scaleWidth = (size) => {
  return (screenWidth / 375) * size;
};

// Responsive height scaling
export const scaleHeight = (size) => {
  return (screenHeight / 812) * size;
};

// Get responsive dimensions
export const getResponsiveDimensions = () => ({
  screenWidth,
  screenHeight,
  isSmallDevice,
  isMediumDevice,
  isLargeDevice,
  isTablet,
});

// Responsive spacing system
export const spacing = {
  xs: wp('1%'),
  sm: wp('2%'),
  md: wp('4%'),
  lg: wp('6%'),
  xl: wp('8%'),
  xxl: wp('10%'),
};

// Responsive border radius system
export const borderRadius = {
  xs: wp('1%'),
  sm: wp('2%'),
  md: wp('3%'),
  lg: wp('4%'),
  xl: wp('6%'),
  xxl: wp('8%'),
};

// Responsive icon sizes
export const iconSizes = {
  xs: wp('4%'),
  sm: wp('5%'),
  md: wp('6%'),
  lg: wp('7%'),
  xl: wp('8%'),
};

// Responsive button heights
export const buttonHeights = {
  sm: hp('5%'),
  md: hp('6%'),
  lg: hp('7%'),
  xl: hp('8%'),
};

// Helper function for responsive margins
export const getResponsiveMargin = (base) => {
  if (isSmallDevice) return base * 0.8;
  if (isLargeDevice) return base * 1.2;
  return base;
};

// Helper function for responsive padding
export const getResponsivePadding = (base) => {
  if (isSmallDevice) return base * 0.9;
  if (isLargeDevice) return base * 1.1;
  return base;
};