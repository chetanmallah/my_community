

// by gtppp modification 

// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   Alert,
//   Platform,
//   KeyboardAvoidingView,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// const CommentsPage = ({ route }) => {
//   const { comments: initialComments = [], postId, postUploaderId } = route.params;

//   const [commentText, setCommentText] = useState('');
//   const [comments, setComments] = useState(initialComments);
//   const [userId, setUserId] = useState(null);

//   useEffect(() => {
//     const getUserId = async () => {
//       const id = await AsyncStorage.getItem('userId');
//       setUserId(Number(id));
//     };
//     getUserId();
//   }, []);

//   const fetchComments = async () => {
//     try {
//       const response = await fetch(`http://192.168.0.108:8080/api/users/comment/${postId}`);
//       const text = await response.text();

//       if (text.trim()) {
//         const data = JSON.parse(text);
//         setComments(data);
//       } else {
//         console.warn('Empty response from server.');
//         setComments([]);
//       }
//     } catch (error) {
//       console.error('Error fetching comments:', error);
//     }
//   };

//   const handleAddComment = async () => {
//     if (!commentText.trim()) return;

//     try {
//       const token = await AsyncStorage.getItem('token');

//       const response = await fetch(`http://192.168.0.108:8080/api/users/comment/${postId}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           text: commentText,
//         }),
//       });

//       if (response.ok) {
//         setCommentText('');
//         await fetchComments(); // Refresh comment list
//       } else {
//         const errorText = await response.text();
//         console.error('Failed to add comment:', errorText);
//         Alert.alert('Error', 'Failed to add comment');
//       }
//     } catch (error) {
//       console.error('Error adding comment:', error);
//     }
//   };

//   const handleDeleteComment = (commentId) => {
//     Alert.alert(
//       'Delete Comment',
//       'Are you sure you want to delete this comment?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'Delete',
//           style: 'destructive',
//           onPress: async () => {
//             try {
//               const token = await AsyncStorage.getItem('token');
//               await fetch(`http://192.168.0.108:8080/api/users/comment/${commentId}`, {
//                 method: 'DELETE',
//                 headers: {
//                   Authorization: `Bearer ${token}`,
//                 },
//               });

//               setComments(prev => prev.filter(c => c.commentId !== commentId));
//             } catch (error) {
//               console.error('Error deleting comment:', error);
//               Alert.alert('Failed', 'You are not authorized to delete this comment.');
//             }
//           },
//         },
//       ]
//     );
//   };

//   const formatTime = (timestamp) => {
//     const date = new Date(timestamp);
//     return date.toLocaleString('en-IN', {
//       day: '2-digit',
//       month: 'short',
//       year: '2-digit',
//       hour: '2-digit',
//       minute: '2-digit',
//     });
//   };

//   const renderComment = ({ item }) => {
//     const isCurrentUser = item.commenterId === userId;
//     const isPostOwner = userId === postUploaderId;

//     return (
//       <View style={styles.commentItem}>
//         <View style={styles.commentHeader}>
//           <Text style={styles.commentUser}>{item.commenterName}</Text>
//           <Text style={styles.commentTime}>{formatTime(item.commentedAt)}</Text>
//         </View>
//         <Text style={styles.commentText}>{item.text}</Text>

//         {(isCurrentUser || isPostOwner) && (
//           <TouchableOpacity
//             onPress={() => handleDeleteComment(item.commentId)}
//             style={styles.deleteBtn}
//           >
//             <Ionicons name="trash-outline" size={18} color="red" />
//             <Text style={styles.deleteText}>Delete</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={comments}
//         keyExtractor={(item) => item.commentId.toString()}
//         renderItem={renderComment}
//         contentContainerStyle={styles.commentList}
//       />

//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//         keyboardVerticalOffset={80}
//         style={styles.inputContainer}
//       >
//         <TextInput
//           style={styles.input}
//           placeholder="Add a comment..."
//           placeholderTextColor="#888"
//           value={commentText}
//           onChangeText={setCommentText}
//         />
//         <TouchableOpacity style={styles.button} onPress={handleAddComment}>
//           <Text style={styles.buttonText}>Post</Text>
//         </TouchableOpacity>
//       </KeyboardAvoidingView>
//     </View>
//   );
// };

// const styles = {
//   container: {
//     flex: 1,
//     backgroundColor: '#242526',
//     padding: 16,
//   },
//   commentList: {
//     paddingBottom: 16,
//   },
//   commentItem: {
//     backgroundColor: '#3a3b3c',
//     padding: 12,
//     borderRadius: 10,
//     marginBottom: 12,
//     position: 'relative',
//   },
//   commentHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   commentUser: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 14,
//   },
//   commentTime: {
//     color: '#aaa',
//     fontSize: 12,
//   },
//   commentText: {
//     color: '#e4e6eb',
//     fontSize: 14,
//     marginTop: 6,
//   },
//   deleteBtn: {
//     position: 'absolute',
//     right: 10,
//     bottom: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   deleteText: {
//     color: 'red',
//     marginLeft: 4,
//     fontSize: 12,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     borderTopWidth: 1,
//     borderTopColor: '#444',
//     backgroundColor: '#242526',
//     paddingHorizontal: 10,
//     paddingVertical: 8,
//     alignItems: 'center',
//   },
//   input: {
//     flex: 1,
//     backgroundColor: '#3a3b3c',
//     color: '#fff',
//     paddingHorizontal: 14,
//     paddingVertical: 8,
//     borderRadius: 20,
//     marginRight: 10,
//   },
//   button: {
//     backgroundColor: '#007bff',
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderRadius: 20,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// };

// export default CommentsPage;



import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  Alert,
  SafeAreaView,
  StatusBar,
  Modal,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { addComment } from '../../utils/addComment';
import { deleteComment } from '../../utils/deleteComment';

const CommentsPage = ({ route }) => {
  const navigation = useNavigation();
  const { comments: initialComments = [], postId } = route.params;
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);
  const [userId, setUserId] = useState(null);
  const [focusedComment, setFocusedComment] = useState(null); // Modal focus

  useEffect(() => {
    const fetchUserId = async () => {
      const storedId = await AsyncStorage.getItem('userId');
      setUserId(parseInt(storedId));
    };
    fetchUserId();
    setComments(
      initialComments.map((c, i) => ({
        ...c,
        _key: c.commentId?.toString() || `init-${i}`,
      }))
    );
  }, [initialComments]);

  const handleSubmitComment = async () => {
    if (!commentText.trim()) return;
    try {
      const newComment = await addComment(postId, userId, commentText);
      const generatedKey = `temp-${Date.now()}`;
      setComments((prev) => [
        ...prev,
        {
          ...newComment,
          commenterName: 'you',
          commenterId: userId,
          commenterImageUrl: null,
          commentedAt: new Date().toISOString(),
          text: commentText,
          _key: generatedKey,
        },
      ]);
      setCommentText('');
    } catch (error) {
      console.error(error);
    }
  };

const handleDeleteComment = (commentId) => {
  Alert.alert('Delete Comment', 'Are you sure you want to delete this comment?', [
    { text: 'Cancel', style: 'cancel' },
    {
      text: 'Delete',
      style: 'destructive',
      onPress: async () => {
        try {
          const response = await deleteComment(commentId);
          console.log('Deleted:', response);

          // Remove from local UI
          setComments((prev) => prev.filter((c) => c.commentId !== commentId));
          setFocusedComment(null);
        } catch (error) {
          console.error('Error deleting comment:', error.message);
          Alert.alert('Failed', 'You are not authorized to delete this comment');
        }
      },
    },
  ]);
};

  const formatTime = (timestamp) => {
    const diffMs = Date.now() - new Date(timestamp).getTime();
    const diffMin = Math.floor(diffMs / (1000 * 60));
    const diffHr = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHr / 24);

    if (diffMin < 1) return 'Just now';
    if (diffMin < 60) return `${diffMin}m ago`;
    if (diffHr < 24) return `${diffHr}h ago`;
    return `${diffDay}d ago`;
  };

  const renderComment = ({ item }) => {
    const isCurrentUser = item.commenterId === userId;
    const profileImage = item.commenterImageUrl || 'https://i.pravatar.cc/150?img=3';

    return (
      <TouchableOpacity
        style={styles.commentRow}
        activeOpacity={0.9}
        onLongPress={() => isCurrentUser && setFocusedComment(item)}
      >
        <Image source={{ uri: profileImage }} style={styles.avatar} />
        <View style={styles.textSection}>
          <Text style={styles.username}>{isCurrentUser ? 'you' : item.commenterName || 'anonymous'}</Text>
          <Text style={styles.commentText}>{item.text || '(No text)'}</Text>
          <View style={styles.metaRow}>
            <Text style={styles.time}>{formatTime(item.commentedAt)}</Text>
            <Text style={styles.replyText}>  Reply</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Feather name="heart" size={18} color="#999" style={styles.heartIcon} />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      {/* Back Button and Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Comments</Text>
      </View>

      <FlatList
        data={comments}
        renderItem={renderComment}
        keyExtractor={(item) => item._key}
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={80}
        style={styles.inputContainer}
      >
        <TouchableOpacity>
          <Ionicons name="happy-outline" size={24} color="#666" style={{ marginRight: 10 }} />
        </TouchableOpacity>
        <TextInput
          value={commentText}
          onChangeText={setCommentText}
          placeholder="Add a comment..."
          placeholderTextColor="#999"
          style={styles.input}
        />
        <TouchableOpacity onPress={handleSubmitComment} style={styles.sendBtn}>
          <Ionicons name="send" size={18} color="#fff" />
        </TouchableOpacity>
      </KeyboardAvoidingView>

      {/* Modal for Focused Comment */}
      <Modal visible={!!focusedComment} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Image
              source={{
                uri: focusedComment?.commenterImageUrl || 'https://i.pravatar.cc/150?img=3',
              }}
              style={styles.modalAvatar}
            />
            <Text style={styles.modalUsername}>{focusedComment?.commenterName || 'you'}</Text>
            <Text style={styles.modalText}>{focusedComment?.text}</Text>
            <TouchableOpacity
              onPress={() => handleDeleteComment(focusedComment.commentId)}
              style={styles.modalDeleteBtn}
            >
              <Feather name="trash-2" size={20} color="#d00" />
              <Text style={styles.modalDeleteText}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setFocusedComment(null)}>
              <Text style={styles.modalClose}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default CommentsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
header: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 14,
  paddingBottom: 10,
  borderBottomWidth: 1,
  borderColor: '#eee',
  backgroundColor: '#fff',
},
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 12,
  },
  commentRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  textSection: {
    flex: 1,
  },
  username: {
    fontWeight: '600',
    color: '#000',
    fontSize: 14,
    marginBottom: 2,
  },
  commentText: {
    fontSize: 14,
    color: '#222',
    marginBottom: 4,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
  replyText: {
    fontSize: 12,
    color: '#555',
    marginLeft: 10,
  },
  heartIcon: {
    marginLeft: 8,
    marginTop: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  input: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    fontSize: 14,
    color: '#000',
  },
  sendBtn: {
    marginLeft: 10,
    backgroundColor: '#000',
    borderRadius: 20,
    padding: 8,
  },

  // Modal Focused Comment
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    width: '85%',
    alignItems: 'center',
  },
  modalAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  modalUsername: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  modalText: {
    fontSize: 14,
    color: '#222',
    textAlign: 'center',
    marginBottom: 12,
  },
  modalDeleteBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffe6e6',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 10,
  },
  modalDeleteText: {
    color: '#d00',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 6,
  },
  modalClose: {
    fontSize: 14,
    color: '#555',
    marginTop: 6,
  },
});
