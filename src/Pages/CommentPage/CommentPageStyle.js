import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  commentsList: {
    marginBottom: 20,
  },
  commentContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  commentText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  replyButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    marginBottom: 8,
  },
  replyButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  replyContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  replyInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 10,
  },
  repliesContainer: {
    marginTop: 10,
    marginLeft: 20,
  },
  reply: {
    marginBottom: 8,
    padding: 8,
    backgroundColor: '#e8e8e8',
    borderRadius: 8,
  },
  replyText: {
    fontSize: 14,
    color: '#333',
  },
  commentInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 10,
  },
  postButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  postButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default styles;
 