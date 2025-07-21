// components/TopBar/TopBarStyles.js
import { StyleSheet, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { isSmallDevice } from '../../utils/responsiveHelper';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#212529',
    paddingHorizontal: wp(isSmallDevice ? '4%' : '4%'),
    paddingTop : '10%',
    paddingBottom: hp(isSmallDevice ? '1.5%' : '2%'),
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    borderBottomLeftRadius: wp('5%'),
    borderBottomRightRadius: wp('5%'),
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(isSmallDevice ? '2%' : '1.5%'),
  },
  profileContainer: {
    width: wp(isSmallDevice ? '13%' : '12%'),
    height: wp(isSmallDevice ? '13%' : '12%'),
    borderRadius: wp('6%'),
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFD700',
    marginLeft: wp('2%'),
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: wp('6%'),
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: wp('6%'),
    paddingVertical: hp(isSmallDevice ? '0.5%' : '1%'),
    paddingHorizontal: wp(isSmallDevice ? '2%' : '2.5%'),
  },
  iconContainer: {
    paddingHorizontal: wp(isSmallDevice ? '2%' : '2.5%'),
    paddingVertical: hp(isSmallDevice ? '0.6%' : '0.8%'),
    borderRadius: wp('5%'),
  },
});

export default styles;
