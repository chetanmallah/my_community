import { StyleSheet } from 'react-native';

const FormsStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa', // Light background for better readability
  },
  progressContainer: {
    marginTop: 20, // Adjust the spacing to bring progress steps slightly below
  },
  stepContent: {
    flex: 1,
    paddingVertical: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold', // Make labels bold
    color: '#4a4a4a', // Neutral dark color for labels
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#ffffff', // Pure white for better contrast
    borderColor: '#ced4da', // Subtle border for input field
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20, // Add spacing between fields
    fontSize: 14,
    color: '#212529', // Darker text for better visibility
  },
  inputPlaceholder: {
    color: '#6c757d', // Muted color for placeholders
  },
  button: {
    backgroundColor: '#007bff', // Bootstrap blue for buttons
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff', // White text for buttons
    fontSize: 16,
    fontWeight: '600',
  },
});

export default FormsStyle;