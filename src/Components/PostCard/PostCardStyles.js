import { StyleSheet, Dimensions } from 'react-native';
import { 
  widthPercentageToDP as wp, 
  heightPercentageToDP as hp 
} from 'react-native-responsive-screen';
import { fontSize, isSmallDevice, spacing, borderRadius } from '../../utils/responsiveHelper';

const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F6F5',
    paddingTop: hp('1%'),
    paddingBottom: hp('12%'), // Space for tab bar
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F6F5',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F6F5',
    paddingHorizontal: spacing.lg,
  },
  card: {
    marginBottom: hp('2.5%'),
    backgroundColor: '#FFFFFF',
    borderRadius: borderRadius.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: hp('0.5%') },
    shadowOpacity: 0.15,
    shadowRadius: wp('1.5%'),
    elevation: 5,
    marginHorizontal: spacing.md,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    backgroundColor: '#FAFAFA',
  },
  userImage: {
    width: wp(isSmallDevice ? '12%' : '11%'),
    height: wp(isSmallDevice ? '12%' : '11%'),
    borderRadius: wp('6%'),
    marginRight: spacing.md,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  username: {
    fontSize: fontSize(17),
    fontWeight: '700',
    color: '#1A1A1A',
  },
  singleImageContainer: {
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
  },
  singleImage: {
    width: '100%',
    height: hp(isSmallDevice ? '35%' : '37%'),
    resizeMode: 'cover',
  },
  carouselContainer: {
    position: 'relative',
    backgroundColor: '#F0F0F0',
  },
  carouselImage: {
    width: screenWidth - wp('6%'), // Account for card margins
    height: hp(isSmallDevice ? '35%' : '37%'),
    resizeMode: 'cover',
  },
  videoContainer: {
    position: 'relative',
    width: '100%',
    height: hp(isSmallDevice ? '35%' : '37%'),
    backgroundColor: '#000000',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  muteButton: {
    position: 'absolute',
    bottom: spacing.md,
    right: spacing.md,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: borderRadius.lg,
    padding: spacing.sm,
  },
  imageCounter: {
    position: 'absolute',
    top: spacing.md,
    right: spacing.md,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: borderRadius.md,
    paddingVertical: hp('0.5%'),
    paddingHorizontal: wp('2.5%'),
  },
  counterText: {
    color: '#FFFFFF',
    fontSize: fontSize(13),
    fontWeight: '600',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp('1.2%'),
    paddingHorizontal: spacing.md,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#ECECEC',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: wp('6%'),
  },
  likeCount: {
    marginLeft: wp('1.5%'),
    fontSize: fontSize(14),
    color: '#4A4A4A',
    fontWeight: '500',
  },
  commentCount: {
    marginLeft: wp('1.5%'),
    fontSize: fontSize(14),
    color: '#4A4A4A',
    fontWeight: '500',
  },
  description: {
    paddingHorizontal: spacing.md,
    paddingVertical: hp('1.2%'),
    fontSize: fontSize(15),
    color: '#333333',
    lineHeight: hp('2.7%'),
  },
  noPostsText: {
    textAlign: 'center',
    fontSize: fontSize(16),
    color: '#777777',
    fontStyle: 'italic',
  },
});

export default styles;