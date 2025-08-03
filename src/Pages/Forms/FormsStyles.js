import { StyleSheet, Platform, StatusBar } from 'react-native';
import { 
  widthPercentageToDP as wp, 
  heightPercentageToDP as hp 
} from 'react-native-responsive-screen';
import { fontSize, spacing, borderRadius } from '../../utils/responsiveHelper';

const FormsStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
    backgroundColor: '#f8f9fa',
    paddingTop: Platform.OS === 'ios' ? hp('6%') : StatusBar.currentHeight + hp('2%'),
  },
  progressContainer: {
    marginTop: hp('2.5%'),
  },
  stepContent: {
    flex: 1,
    paddingVertical: hp('2.5%'),
  },
  label: {
    fontSize: fontSize(16),
    fontWeight: 'bold',
    color: '#4a4a4a',
    marginBottom: hp('1%'),
  },
  input: {
    width: '100%',
    height: hp('6%'),
    backgroundColor: '#ffffff',
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    marginBottom: hp('2.5%'),
    fontSize: fontSize(14),
    color: '#212529',
  },
  inputPlaceholder: {
    color: '#6c757d',
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: borderRadius.md,
    paddingVertical: hp('1.5%'),
    alignItems: 'center',
    marginTop: hp('2.5%'),
  },
  buttonText: {
    color: '#ffffff',
    fontSize: fontSize(16),
    fontWeight: '600',
  },
});

export default FormsStyle;