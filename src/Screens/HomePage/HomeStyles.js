import { StyleSheet } from 'react-native';
import { 
  widthPercentageToDP as wp, 
  heightPercentageToDP as hp 
} from 'react-native-responsive-screen';
import { spacing } from '../../utils/responsiveHelper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  circleCardContainer: {
    marginTop: hp('5%'),
  },
  scrollView: {
    paddingHorizontal: spacing.sm,
    paddingBottom: hp('12%'), // Space for tab bar
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginHorizontal: spacing.lg,
    marginVertical: hp('2%'),
  },
});

export default styles;