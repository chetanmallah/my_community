import React, { useEffect, useRef, useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  FlatList, 
  Dimensions, 
  Animated 
} from 'react-native';
import { Linking } from 'react-native';
import { 
  widthPercentageToDP as wp, 
  heightPercentageToDP as hp 
} from 'react-native-responsive-screen';
import { fontSize, isSmallDevice, spacing, borderRadius } from '../../utils/responsiveHelper';

const { width: screenWidth } = Dimensions.get('window');

const Banner = () => {
  const [banners, setBanners] = useState([]);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch banners from API
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch('http://192.168.1.116:3000/banner');
        const data = await response.json();
        if (Array.isArray(data)) {
          setBanners(data);
        }
      } catch (error) {
        console.error('Error fetching banners:', error);
      }
    };
    fetchBanners();
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    if (banners.length <= 1) return;

    const interval = setInterval(() => {
      if (flatListRef.current) {
        const nextIndex = (currentIndex + 1) % banners.length;
        setCurrentIndex(nextIndex);
        flatListRef.current.scrollToIndex({ 
          index: nextIndex, 
          animated: true 
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [banners, currentIndex]);

  // Handle Banner Press
  const handleBannerPress = (url) => {
    if (url) {
      Linking.openURL(url).catch((err) => console.error('Error opening URL:', err));
    }
  };

  const renderBanner = ({ item, index }) => (
    <TouchableOpacity 
      style={styles.bannerContainer} 
      onPress={() => handleBannerPress(item.websiteUrl)}
      activeOpacity={0.9}
    >
      <Image 
        source={{ uri: item.imageUrl }} 
        style={styles.bannerImage} 
        resizeMode="cover" 
      />
      <View style={styles.textOverlay}>
        <Text style={styles.headline}>{item.headline}</Text>
      </View>
      <View style={styles.carouselCounter}>
        <Text style={styles.counterText}>{index + 1}/{banners.length}</Text>
      </View>
    </TouchableOpacity>
  );

  if (banners.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.noDataText}>No banners available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={banners}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderBanner}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
          setCurrentIndex(newIndex);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: hp('2%'),
    alignItems: 'center',
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: hp('4%'),
  },
  bannerContainer: {
    width: screenWidth - wp('8%'),
    height: hp(isSmallDevice ? '25%' : '28%'),
    borderRadius: borderRadius.lg,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: hp('0.5%') },
    shadowOpacity: 0.2,
    shadowRadius: wp('2%'),
    elevation: 5,
    overflow: 'hidden',
    marginHorizontal: wp('4%'),
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  textOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingVertical: hp('1%'),
    paddingHorizontal: spacing.md,
  },
  headline: {
    color: '#FFF',
    fontSize: fontSize(16),
    fontWeight: '700',
    textAlign: 'center',
  },
  carouselCounter: {
    position: 'absolute',
    top: spacing.md,
    right: spacing.md,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: spacing.sm,
    paddingVertical: hp('0.5%'),
    borderRadius: borderRadius.lg,
  },
  counterText: {
    color: '#FFF',
    fontSize: fontSize(12),
    fontWeight: '600',
  },
  noDataText: {
    textAlign: 'center',
    color: '#888',
    fontSize: fontSize(16),
  },
});

export default Banner;