import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const BASE_URL = 'http://192.168.0.108:8080/api/users';

export const addComment = async (postId, userId, text) => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (!token) throw new Error('No token found');

    const response = await axios.post(
      `${BASE_URL}/comment/${postId}`,
      { userId, text },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error adding comment:', error.response?.data || error.message);
    throw new Error('Something went wrong while adding comment');
  }
};
