// utils/responsiveHelper.js
import { Dimensions, Platform } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// ✅ Fine-grained screen size breakpoints
export const isPixel2 = screenWidth <= 415;        // For Pixel 2 and older phones
export const isSmallDevice = screenWidth <= 480;   // Generic small devices
export const isMediumDevice = screenWidth > 480 && screenWidth < 768; // OnePlus, Samsung, etc.
export const isLargeDevice = screenWidth >= 768;   // Tablets, foldables

// ✅ Font scaling: Adjust fontSize() to scale with screen size
export const fontSize = (size) => {
  if (isPixel2) return size * 0.78;     // 🔥 More aggressive scale down for Pixel 2
  if (isSmallDevice) return size * 0.87;
  if (isMediumDevice) return size;      // No scaling on standard Android screens
  return size * 1.1;                    // Scale up for tablets
};

// ✅ Optional: Use for element sizing (padding, margin, height, width)
export const scaleWidth = (size) => {
  return (screenWidth / 375) * size; // 375 is iPhone 6/7/8 reference width
};

export const scaleHeight = (size) => {
  return (screenHeight / 812) * size; // 812 is iPhone X reference height
};
