import { StyleSheet, Platform, StatusBar } from 'react-native';
import { 
  widthPercentageToDP as wp, 
  heightPercentageToDP as hp 
} from 'react-native-responsive-screen';
import { fontSize, spacing, borderRadius, isSmallDevice } from '../../utils/responsiveHelper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#212529',
    paddingTop: Platform.OS === 'ios' ? hp('6%') : StatusBar.currentHeight + hp('2%'),
    paddingBottom: hp('2%'),
    paddingHorizontal: spacing.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: fontSize(20),
    fontWeight: '700',
  },
  logoutButton: {
    padding: spacing.sm,
  },
  scrollContainer: {
    flex: 1,
  },
  profileSection: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: hp('4%'),
    marginBottom: hp('2%'),
  },
  profileImage: {
    width: wp(isSmallDevice ? '25%' : '22%'),
    height: wp(isSmallDevice ? '25%' : '22%'),
    borderRadius: wp('12%'),
    marginBottom: hp('2%'),
    borderWidth: 3,
    borderColor: '#212529',
  },
  name: {
    fontSize: fontSize(24),
    fontWeight: '700',
    color: '#212529',
    marginBottom: hp('0.5%'),
  },
  subtitle: {
    fontSize: fontSize(16),
    color: '#6c757d',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: spacing.lg,
    marginBottom: hp('2%'),
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: hp('0.3%') },
    shadowOpacity: 0.1,
    shadowRadius: wp('1%'),
    elevation: 3,
  },
  sectionTitle: {
    fontSize: fontSize(18),
    fontWeight: '600',
    color: '#212529',
    marginBottom: hp('2%'),
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp('1%'),
    borderBottomWidth: 1,
    borderBottomColor: '#f1f3f4',
  },
  detailLabel: {
    fontSize: fontSize(14),
    color: '#6c757d',
    fontWeight: '500',
    flex: 1,
  },
  detailValue: {
    fontSize: fontSize(14),
    color: '#212529',
    fontWeight: '400',
    flex: 2,
    textAlign: 'right',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    marginBottom: hp('3%'),
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('6%'),
    borderRadius: borderRadius.md,
    borderWidth: 2,
    borderColor: '#212529',
    flex: 0.48,
    justifyContent: 'center',
  },
  editButtonText: {
    marginLeft: spacing.sm,
    fontSize: fontSize(14),
    fontWeight: '600',
    color: '#212529',
  },
  settingsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('6%'),
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: '#dee2e6',
    flex: 0.48,
    justifyContent: 'center',
  },
  settingsButtonText: {
    marginLeft: spacing.sm,
    fontSize: fontSize(14),
    fontWeight: '500',
    color: '#666',
  },
});

export default styles;