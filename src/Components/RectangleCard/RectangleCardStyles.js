import { StyleSheet } from 'react-native';
import { 
  widthPercentageToDP as wp, 
  heightPercentageToDP as hp 
} from 'react-native-responsive-screen';
import { fontSize, isSmallDevice, spacing, borderRadius } from '../../utils/responsiveHelper';

const styles = StyleSheet.create({
  loaderContainer: {
    padding: hp(isSmallDevice ? '1%' : '1.5%'),
    alignItems: 'center',
  },
  flatListContainer: {
    paddingHorizontal: spacing.sm,
    paddingVertical: hp('1%'),
  },
  rectangleCard: {
    paddingVertical: hp(isSmallDevice ? '1.2%' : '1.5%'),
    paddingHorizontal: wp(isSmallDevice ? '3%' : '4%'),
    borderRadius: borderRadius.md,
    marginHorizontal: wp('1%'),
    minWidth: wp(isSmallDevice ? '18%' : '20%'),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: hp('0.2%') },
    shadowOpacity: 0.1,
    shadowRadius: wp('1%'),
  },
  activeCard: {
    backgroundColor: '#000000',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  inactiveCard: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderWidth: 0,
  },
  cardText: {
    fontSize: fontSize(isSmallDevice ? 11 : 13),
    color: '#FFFFFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default styles;