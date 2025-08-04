import { StyleSheet, Platform, StatusBar } from 'react-native';
import { 
  widthPercentageToDP as wp, 
  heightPercentageToDP as hp 
} from 'react-native-responsive-screen';
import { fontSize, spacing, borderRadius, isSmallDevice } from '../../utils/responsiveHelper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingTop: Platform.OS === 'ios' ? hp('6%') : StatusBar.currentHeight + hp('2%'),
    paddingBottom: hp('1.2%'),
    borderBottomWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: fontSize(18),
    fontWeight: '600',
    marginLeft: spacing.md,
  },
  commentRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: hp('1.5%'),
    paddingHorizontal: spacing.md,
  },
  avatar: {
    width: wp(isSmallDevice ? '9%' : '8%'),
    height: wp(isSmallDevice ? '9%' : '8%'),
    borderRadius: wp('4.5%'),
    marginRight: spacing.sm,
  },
  textSection: {
    flex: 1,
  },
  username: {
    fontWeight: '600',
    color: '#000',
    fontSize: fontSize(14),
    marginBottom: hp('0.2%'),
  },
  commentText: {
    fontSize: fontSize(14),
    color: '#222',
    marginBottom: hp('0.5%'),
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  time: {
    fontSize: fontSize(12),
    color: '#999',
  },
  replyText: {
    fontSize: fontSize(12),
    color: '#555',
    marginLeft: spacing.sm,
  },
  heartIcon: {
    marginLeft: spacing.sm,
    marginTop: hp('0.2%'),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: hp('1.2%'),
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: Platform.OS === 'ios' ? hp('4%') : hp('1.2%'),
  },
  input: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    borderRadius: borderRadius.xl,
    paddingHorizontal: spacing.md,
    paddingVertical: hp('1%'),
    fontSize: fontSize(14),
    color: '#000',
  },
  sendBtn: {
    marginLeft: spacing.sm,
    backgroundColor: '#000',
    borderRadius: borderRadius.xl,
    padding: wp('2%'),
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    backgroundColor: '#fff',
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    width: wp('85%'),
    alignItems: 'center',
  },
  modalAvatar: {
    width: wp('15%'),
    height: wp('15%'),
    borderRadius: wp('7.5%'),
    marginBottom: hp('1.2%'),
  },
  modalUsername: {
    fontSize: fontSize(16),
    fontWeight: '600',
    marginBottom: hp('0.7%'),
  },
  modalText: {
    fontSize: fontSize(14),
    color: '#222',
    textAlign: 'center',
    marginBottom: hp('1.5%'),
  },
  modalDeleteBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffe6e6',
    paddingVertical: hp('0.7%'),
    paddingHorizontal: wp('4%'),
    borderRadius: borderRadius.md,
    marginBottom: hp('1.2%'),
  },
  modalDeleteText: {
    color: '#d00',
    fontSize: fontSize(14),
    fontWeight: '500',
    marginLeft: wp('1.5%'),
  },
  modalClose: {
    fontSize: fontSize(14),
    color: '#555',
    marginTop: hp('0.7%'),
  },
});

export default styles;