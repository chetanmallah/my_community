import { StyleSheet, Platform, StatusBar } from 'react-native';
import { 
  widthPercentageToDP as wp, 
  heightPercentageToDP as hp 
} from 'react-native-responsive-screen';
import { fontSize, spacing, borderRadius, isSmallDevice } from '../../utils/responsiveHelper';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: hp('2.5%'),
    paddingHorizontal: spacing.lg,
    flexGrow: 1,
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? hp('8%') : StatusBar.currentHeight + hp('4%'),
  },
  innerContainer: {
    maxWidth: wp('90%'),
    width: '100%',
    alignSelf: 'center',
  },
  title: {
    fontSize: fontSize(isSmallDevice ? 26 : 30),
    fontWeight: 'bold',
    color: '#000',
    marginBottom: hp('2.5%'),
    textAlign: 'center',
  },
  imagePicker: {
    backgroundColor: '#f1f1f1',
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: hp('3%'),
    alignItems: 'center',
  },
  selectedImage: {
    width: wp('25%'),
    height: wp('25%'),
    borderRadius: borderRadius.md,
    marginRight: spacing.sm,
  },
  pickImageButton: {
    flexDirection: 'row',
    marginTop: hp('1.5%'),
    backgroundColor: '#000',
    paddingVertical: hp('1.2%'),
    paddingHorizontal: wp('4%'),
    borderRadius: borderRadius.sm,
    alignItems: 'center',
  },
  pickImageText: {
    color: '#fff',
    marginLeft: spacing.sm,
    fontWeight: '600',
    fontSize: fontSize(14),
  },
  addImageText: {
    color: '#666',
    fontSize: fontSize(16),
  },
  input: {
    backgroundColor: '#f9f9f9',
    color: '#000',
    padding: spacing.md,
    borderRadius: borderRadius.md,
    marginBottom: hp('2.5%'),
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: fontSize(16),
  },
  dropdownLabel: {
    color: '#333',
    marginBottom: hp('0.7%'),
    fontSize: fontSize(14),
    marginTop: hp('0.7%'),
  },
  dropdown: {
    backgroundColor: '#f9f9f9',
    color: '#000',
    paddingVertical: hp('1.5%'),
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.md,
    fontSize: fontSize(16),
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: hp('3%'),
  },
  postButton: {
    backgroundColor: '#000',
    paddingVertical: hp('2%'),
    borderRadius: borderRadius.md,
    alignItems: 'center',
    marginTop: hp('1.2%'),
  },
  postButtonText: {
    color: '#fff',
    fontSize: fontSize(16),
    fontWeight: 'bold',
  },
});

export default styles;