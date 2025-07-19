import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  imagePicker: {
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    width: '100%',
  },
  addImageText: {
    color: '#aaa',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  pickImageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  pickImageText: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  selectedImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  captionInput: {
    height: 50,
    width: '100%',
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  categoryContainer: {
    width: '100%',
    marginBottom: 20,
  },
  categoryLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  categoryDropdown: {
    height: 50,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    color: '#333',
  },
  postButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  postButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
