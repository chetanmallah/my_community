import { StyleSheet } from 'react-native';
import { 
  widthPercentageToDP as wp, 
  heightPercentageToDP as hp 
} from 'react-native-responsive-screen';
import { fontSize, isSmallDevice, spacing, borderRadius } from '../../utils/responsiveHelper';

const styles = StyleSheet.create({
  loaderContainer: {
    paddingVertical: hp('2%'),
    alignItems: 'center',
  },
  circleCard: {
    width: wp(isSmallDevice ? '20%' : '18%'),
    height: wp(isSmallDevice ? '20%' : '18%'),
    borderRadius: wp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: spacing.sm,
    padding: spacing.sm,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: wp('1%'),
    shadowOffset: { width: 0, height: hp('0.5%') },
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
    fontSize: fontSize(isSmallDevice ? 11 : 13),
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: spacing.xs,
  },
  activeText: {
    color: '#fff',
  },
  inactiveText: {
    color: '#2c3e50',
  },
  languageBtn: {
    backgroundColor: '#3498db',
    marginTop: hp('2%'),
    alignSelf: 'center',
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('1%'),
    borderRadius: borderRadius.lg,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: hp('0.3%') },
    shadowOpacity: 0.2,
    shadowRadius: wp('1%'),
  },
  languageText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: fontSize(14),
  },
});

export default styles;