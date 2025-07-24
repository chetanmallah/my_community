// utils/deleteComment.js
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const deleteComment = async (commentId) => {
  const token = await AsyncStorage.getItem('token');
  if (!token) throw new Error('No token found');

  const response = await axios.delete(
    `http://192.168.1.116:8080/api/users/comment/${commentId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
