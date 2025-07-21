
// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   FlatList,
//   Dimensions,
//   ActivityIndicator,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { AntDesign } from '@expo/vector-icons';

// const screenWidth = Dimensions.get('window').width;
// const MAX_CONTENT_LINES = 3;

// const PostCard = ({ activeCategory }) => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigation = useNavigation();
//   const [expandedPosts, setExpandedPosts] = useState({});

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         setLoading(true);
//         const token = await AsyncStorage.getItem('token');
//         if (!token) throw new Error('No authentication token found');

//         const response = await fetch(
//           `http://192.168.0.108:8080/api/users/getUploaded-post/${activeCategory}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//               'Content-Type': 'application/json',
//             },
//           }
//         );

//         if (!response.ok) throw new Error(`Error: ${response.status}`);
//         const data = await response.json();

//         // Set isLiked from backend response
//         const updated = data.map((post) => ({
//           ...post,
//           isLiked: post.liked || false,
//         }));

//         setPosts(updated);
//       } catch (err) {
//         console.error('Error fetching posts:', err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, [activeCategory]);

//   const handleLike = async (postId) => {
//     try {
//       const token = await AsyncStorage.getItem('token');
//       const userId = await AsyncStorage.getItem('userId');

//       const response = await fetch(
//         `http://192.168.0.108:8080/api/users/like/${postId}`,
//         {
//           method: 'POST',
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ userId: parseInt(userId) }),
//         }
//       );

//       if (!response.ok) throw new Error('Failed to toggle like');

//       const data = await response.json(); // { postId, totalLikes, liked }

//       const updatedPosts = posts.map((post) =>
//         post.id === postId
//           ? {
//               ...post,
//               isLiked: data.liked,
//               totalLikes: data.totalLikes,
//             }
//           : post
//       );

//       setPosts(updatedPosts);
//     } catch (error) {
//       console.error('Like error:', error);
//     }
//   };

//   const toggleExpand = (postId) => {
//     setExpandedPosts((prev) => ({
//       ...prev,
//       [postId]: !prev[postId],
//     }));
//   };

//   const renderItem = ({ item }) => {
//     const isExpanded = expandedPosts[item.id];

//     return (
//       <View style={styles.card}>
//         {/* Header */}
//         <View style={styles.header}>
//           <Image
//             source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
//             style={styles.profileImage}
//           />
//           <Text style={styles.username}>{item.uploadedBy || 'Unknown'}</Text>
//         </View>

//         {/* Post Image */}
//         <Image source={{ uri: item.imageUrl }} style={styles.media} resizeMode="cover" />

//         {/* Like & Comment Actions */}
//         <View style={styles.actions}>
//           <TouchableOpacity onPress={() => handleLike(item.id)}>
//             <AntDesign
//               name={item.isLiked ? 'heart' : 'hearto'}
//               size={24}
//               color={item.isLiked ? 'red' : 'black'}
//               style={styles.icon}
//             />
//           </TouchableOpacity>
//           <Text style={styles.countText}>{item.totalLikes} Likes</Text>

//           <TouchableOpacity
//             onPress={() => navigation.navigate('commentpage', { postId: item.id,  comments: item.comments, postUploaderId:  item.UploaderId || item.uploadedById || item.userId,  })}
//             style={styles.commentButton}
//           >
//             <Icon name="message-circle" size={24} color="black" />
//           </TouchableOpacity>
//           <Text style={styles.countText}>{item.totalComments} Comments</Text>
//         </View>

//         {/* Caption */}
//         <View style={styles.captionContainer}>
//           <Text
//             numberOfLines={isExpanded ? undefined : MAX_CONTENT_LINES}
//             style={styles.caption}
//           >
//             {item.content}
//           </Text>
//           {item.content.length > 100 && (
//             <TouchableOpacity onPress={() => toggleExpand(item.id)}>
//               <Text style={styles.viewMoreText}>
//                 {isExpanded ? 'View Less' : 'View More'}
//               </Text>
//             </TouchableOpacity>
//           )}
//         </View>

//         {/* Tags */}
//         {item.tags?.length > 0 && (
//           <View style={styles.tagsContainer}>
//             {item.tags.map((tag, index) => (
//               <Text key={index} style={styles.tag}>#{tag}</Text>
//             ))}
//           </View>
//         )}

//         {/* Time */}
//         <Text style={styles.timestamp}>
//           Posted on {new Date(item.uploadedAt).toLocaleDateString()}
//         </Text>
//       </View>
//     );
//   };

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#6200ee" />
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View style={styles.errorContainer}>
//         <Text style={styles.errorText}>{error}</Text>
//         <TouchableOpacity onPress={() => setError(null)}>
//           <Text style={styles.retryText}>Try Again</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }

//   return (
//     <FlatList
//       data={posts}
//       renderItem={renderItem}
//       keyExtractor={(item) => item.id.toString()}
//       contentContainerStyle={styles.listContainer}
//       showsVerticalScrollIndicator={false}
//     />
//   );
// };
// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: '#fff',
//     marginHorizontal: 12,
//     marginBottom: 20,
//     borderRadius: 15,
//     overflow: 'hidden',
//     elevation: 4,
//     shadowColor: '#000',
//     shadowOpacity: 0.08,
//     shadowRadius: 6,
//     shadowOffset: { width: 0, height: 3 },
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 12,
//     backgroundColor: '#fafafa',
//   },
//   profileImage: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginRight: 10,
//   },
//   username: {
//     fontSize: 15,
//     fontWeight: '600',
//     color: '#333',
//   },
//   media: {
//     width: '100%',
//     height: screenWidth * 0.75,
//     backgroundColor: '#f0f0f0',
//   },
//   actions: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 12,
//     paddingVertical: 10,
//   },
//   icon: {
//     marginRight: 8,
//   },
//   commentButton: {
//     marginLeft: 15,
//     marginRight: 5,
//   },
//   countText: {
//     fontSize: 14,
//     color: '#333',
//     marginRight: 8,
//   },
//   captionContainer: {
//     paddingHorizontal: 12,
//     paddingBottom: 6,
//   },
//   caption: {
//     fontSize: 14,
//     color: '#444',
//   },
//   viewMoreText: {
//     color: '#6200ee',
//     marginTop: 4,
//     fontSize: 13,
//   },
//   tagsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     paddingHorizontal: 12,
//     paddingBottom: 8,
//   },
//   tag: {
//     color: '#6200ee',
//     marginRight: 8,
//     fontSize: 13,
//   },
//   timestamp: {
//     paddingHorizontal: 12,
//     paddingBottom: 12,
//     fontSize: 12,
//     color: '#888',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   errorContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   errorText: {
//     color: 'red',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   retryText: {
//     color: 'blue',
//   },
//   listContainer: {
//     paddingVertical: 10,
//     paddingBottom: 30,
//   },
// });

// export default PostCard;


import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';
import { Modal, Pressable, ScrollView,TextInput, KeyboardAvoidingView, Platform, BackHandler } from 'react-native';
import RNModal from 'react-native-modal';

const screenWidth = Dimensions.get('window').width;
const MAX_CONTENT_LINES = 3;

const PostCard = ({ activeCategory }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigation();
  const [expandedPosts, setExpandedPosts] = useState({});

const [commentModalVisible, setCommentModalVisible] = useState(false);
const [selectedPostId, setSelectedPostId] = useState(null);
const [comments, setComments] = useState([]);
const [loadingComments, setLoadingComments] = useState(false);
const [newComment, setNewComment] = useState('');

//replyy comment
const [replyingTo, setReplyingTo] = useState(null); // comment ID
const [replyToUser, setReplyToUser] = useState(null);


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const token = await AsyncStorage.getItem('token');
        if (!token) throw new Error('No authentication token found');

        const userId = await AsyncStorage.getItem('userId');

        const response = await fetch(
          `http://192.168.0.108:8080/api/users/getUploaded-post/${activeCategory}?currentUserId=${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();

        // Set isLiked from backend response
        const updated = data.map((post) => ({
          ...post,
          isLiked: post.liked || false,
        }));

        setPosts(updated);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [activeCategory]);

  useEffect(() => {
  const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
    if (commentModalVisible) {
      setCommentModalVisible(false);
      return true;
    }
    return false;
  });

  return () => backHandler.remove();
}, [commentModalVisible]);

// const handleAddComment = async () => {
//   if (!newComment.trim()) return;

//   try {
//     const token = await AsyncStorage.getItem('token');

//     // POST comment
//     const res = await fetch(`http://192.168.0.108:8080/api/users/comment/${selectedPostId}`, {
//       method: 'POST',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ text: newComment.trim() }),
//     });

//     const data = await res.json();

//     if (res.ok) {
//       // ✅ Comment posted — now fetch updated comments
//       fetchComments(selectedPostId);
//       setNewComment('');
//     } else {
//       console.warn('Failed to post comment:', data.message || 'Unknown error');
//     }
//   } catch (err) {
//     console.error('Error posting comment:', err);
//   }
// };

const handleAddComment = async () => {
  if (!newComment.trim()) return;

  try {
    const token = await AsyncStorage.getItem('token');

    const res = await fetch(`http://192.168.0.108:8080/api/users/comment/${selectedPostId}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: newComment.trim(),
        parentCommentId: replyingTo || null, // <-- this line
      }),
    });

    const message = await res.text();

    if (res.ok) {
      console.log('✅ Comment posted:', message);
      fetchComments(selectedPostId);
      setNewComment('');
      setReplyingTo(null);
      setReplyToUser(null);
    } else {
      console.warn('❌ Failed to post comment:', message || 'Unknown error');
    }
  } catch (err) {
    console.error('Error posting comment:', err);
  }
};



  const fetchComments = async (postId) => {
  try {
    setLoadingComments(true);
    const token = await AsyncStorage.getItem('token');

    const response = await fetch(
      `http://192.168.0.108:8080/api/users/comments/${postId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
       const data = await response.json();
    setComments(data.comments || []);
  } catch (error) {
    console.error('Error fetching comments:', error);
  } finally {
    setLoadingComments(false);
  }
};

const openCommentsModal = (postId) => {
  setSelectedPostId(postId);
  setCommentModalVisible(true);
  fetchComments(postId);
};


  const handleLike = async (postId) => {
    try {
      const token = await AsyncStorage.getItem('token');
      const userId = await AsyncStorage.getItem('userId');

      const response = await fetch(
        `http://192.168.0.108:8080/api/users/like/${postId}`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId: parseInt(userId) }),
        }
      );

      if (!response.ok) throw new Error('Failed to toggle like');

      const data = await response.json(); // { postId, totalLikes, liked }

      const updatedPosts = posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              isLiked: data.liked,
              totalLikes: data.totalLikes,
            }
          : post
      );

      setPosts(updatedPosts);
    } catch (error) {
      console.error('Like error:', error);
    }
  };



  const toggleExpand = (postId) => {
    setExpandedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const renderItem = ({ item }) => {
    const isExpanded = expandedPosts[item.id];

    return (
      <View style={styles.card}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
            style={styles.profileImage}
          />
          <Text style={styles.username}>{item.uploadedBy || 'Unknown'}</Text>
        </View>

        {/* Post Image */}
        <Image source={{ uri: item.imageUrl }} style={styles.media} resizeMode="cover" />

        {/* Like & Comment Actions */}
        <View style={styles.actions}>
          <TouchableOpacity onPress={() => handleLike(item.id)}>
            <AntDesign
              name={item.isLiked ? 'heart' : 'hearto'}
              size={24}
              color={item.isLiked ? 'red' : 'black'}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.countText}>{item.totalLikes} Likes</Text>

          <TouchableOpacity onPress={() => openCommentsModal(item.id)} style={styles.commentButton}>
  <Icon name="message-circle" size={24} color="black" />
</TouchableOpacity>


          <Text style={styles.countText}>{item.totalComments} Comments</Text>
        </View>

        {/* Caption */}
        <View style={styles.captionContainer}>
          <Text
            numberOfLines={isExpanded ? undefined : MAX_CONTENT_LINES}
            style={styles.caption}
          >
            {item.content}
          </Text>
          {item.content.length > 100 && (
            <TouchableOpacity onPress={() => toggleExpand(item.id)}>
              <Text style={styles.viewMoreText}>
                {isExpanded ? 'View Less' : 'View More'}
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Tags */}
        {item.tags?.length > 0 && (
          <View style={styles.tagsContainer}>
            {item.tags.map((tag, index) => (
              <Text key={index} style={styles.tag}>#{tag}</Text>
            ))}
          </View>
        )}

        {/* Time */}
        <Text style={styles.timestamp}>
          Posted on {new Date(item.uploadedAt).toLocaleDateString()}
        </Text>
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6200ee" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity onPress={() => setError(null)}>
          <Text style={styles.retryText}>Try Again</Text>
        </TouchableOpacity>
      </View>
    );
  }

return (
  <View style={{ flex: 1 }}>
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
    />

<RNModal
  isVisible={commentModalVisible}
  onBackdropPress={() => setCommentModalVisible(false)}
  onSwipeComplete={() => setCommentModalVisible(false)}
  swipeDirection="down"
  style={styles.modalContainerWrapper}
  propagateSwipe
>
  <View style={styles.modalContainer}>
    <View style={styles.dragIndicator} />
    <Text style={styles.modalTitle}>Comments</Text>

    {loadingComments ? (
      <ActivityIndicator size="large" color="#000" />
    ) : (
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <View key={index} style={styles.commentBlock}>
              <View style={styles.commentHeader}>
                <Image
                  source={{ uri: 'https://randomuser.me/api/portraits/men/10.jpg' }}
                  style={styles.commentUserImage}
                />
                <View style={{ flex: 1 }}>
                  <Text style={styles.commentUser}>{comment.commenterName}</Text>
                  <Text style={styles.commentText}>{comment.text}</Text>
                  <Text style={styles.commentTime}>{new Date(comment.commentedAt).toLocaleString()}</Text>

                 <TouchableOpacity onPress={() => {
  setReplyingTo(comment.id);        // or reply.id for nested
  setReplyToUser(comment.commenterName); // optional: to show "@user"
}}>
  <Text style={styles.replyBtn}>Reply</Text>  
  {/* og comment reply button */}
</TouchableOpacity>

                  {/* Replies */}
                  {comment.replies?.length > 0 && (
                    <View style={styles.repliesContainer}>
                      {comment.replies.map((reply, replyIndex) => (
                        <View key={replyIndex} style={styles.replyBlock}>
                          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                              source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
                              style={styles.replyUserImage}
                            />
                            <View style={{ flex: 1 }}>
                              <Text style={styles.replyUser}>{reply.commenterName}</Text>
                              <Text style={styles.replyText}>{reply.text}</Text>
                              <Text style={styles.replyTime}>{new Date(reply.commentedAt).toLocaleString()}</Text>

                              <TouchableOpacity>
                                <Text style={styles.replyBtn}>Reply</Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                      ))}
                    </View>
                  )}
                </View>
              </View>
            </View>
          ))
        ) : (
          <Text style={{ padding: 10, color: '#999' }}>No comments yet.</Text>
        )}
      </ScrollView>
    )}

   <KeyboardAvoidingView
  behavior={Platform.OS === 'ios' ? 'padding' : undefined}
  keyboardVerticalOffset={100}
>
<>
  {replyingTo && (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 6,
        backgroundColor: '#e6e6e6',
        borderRadius: 8,
        marginBottom: 6,
      }}
    >
      <Text style={{ fontSize: 13, color: '#444' }}>
        Replying to <Text style={{ fontWeight: 'bold' }}>{replyToUser}</Text>
      </Text>
      <TouchableOpacity onPress={() => {
        setReplyingTo(null);
        setReplyToUser(null);
      }}>
        <Text style={{ color: '#007bff', fontSize: 13 }}>Cancel</Text>
      </TouchableOpacity>
    </View>
  )}

<View style={styles.commentInputWrapper}>
  <TextInput
    placeholder="Add a comment..."
    placeholderTextColor="#777"
    value={newComment}
    onChangeText={setNewComment}
    style={styles.commentInput}
  />
  <TouchableOpacity onPress={handleAddComment} style={styles.postButton}>
    <Text style={styles.postButtonText}>Post</Text>
  </TouchableOpacity>
</View>

</>

</KeyboardAvoidingView>

  </View>
</RNModal>

  </View>
);

 

};
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#fafafa',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },
  media: {
    width: '100%',
    height: screenWidth * 0.75,
    backgroundColor: '#f0f0f0',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  icon: {
    marginRight: 8,
  },
  commentButton: {
    marginLeft: 15,
    marginRight: 5,
  },
  countText: {
    fontSize: 14,
    color: '#333',
    marginRight: 8,
  },
  captionContainer: {
    paddingHorizontal: 12,
    paddingBottom: 6,
  },
  caption: {
    fontSize: 14,
    color: '#444',
  },
  viewMoreText: {
    color: '#6200ee',
    marginTop: 4,
    fontSize: 13,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  tag: {
    color: '#6200ee',
    marginRight: 8,
    fontSize: 13,
  },
  timestamp: {
    paddingHorizontal: 12,
    paddingBottom: 12,
    fontSize: 12,
    color: '#888',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  retryText: {
    color: 'blue',
  },
  listContainer: {
    paddingVertical: 10,
    paddingBottom: 30,
  },
  
  modalOverlay: {
  flex: 1,
  justifyContent: 'flex-end',
  backgroundColor: 'rgba(0,0,0,0.3)',
},
modalContainer: {
  height: '60%',
  backgroundColor: '#fff',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  padding: 16,
},
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
    color: '#111',
    textAlign: 'center',
  },
commentBlock: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#efefef',
  },
  commentUser: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111',
  },
  commentText: {
    fontSize: 14,
    color: '#222',
    marginTop: 2,
    lineHeight: 20,
  },
  commentTime: {
    fontSize: 11,
    color: '#999',
    marginTop: 4,
  },
  repliesContainer: {
    marginTop: 10,
    paddingLeft: 44,
    borderLeftWidth: 1,
    borderLeftColor: '#eee',
  },
replyBlock: {
  flexDirection: 'row',
  alignItems: 'flex-start',
  marginBottom: 10,
},
  replyUser: {
    fontSize: 13,
    fontWeight: '600',
    color: '#111',
  },
  replyText: {
    fontSize: 13,
    color: '#333',
    lineHeight: 18,
  },
replyTime: {
  fontSize: 11,
  color: '#aaa',
  marginTop: 3,
},
closeModalButton: {
  alignSelf: 'center',
  marginTop: 15,
},

modalContainerWrapper: {
  justifyContent: 'flex-end',
  margin: 0,
},
 modalContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 12,
    paddingHorizontal: 16,
    paddingBottom: 40,
    maxHeight: Dimensions.get('window').height * 0.93,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
dragIndicator: {
  width: 40,
  height: 5,
  backgroundColor: '#ccc',
  borderRadius: 10,
  alignSelf: 'center',
  marginBottom: 12,
},
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  commentUserImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#ddd',
  },
  replyUserImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ddd',
  },
 replyBtn: {
    fontSize: 13,
    color: '#000',
    fontWeight: '500',
    marginTop: 6,
  },
  replyBlock: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
    gap: 10,
  },

  
  commentInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  commentInput: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 14,
    color: '#111',
  },

  postButton: {
    marginLeft: 10,
  },

  postButtonText: {
    color: '#000',
    fontWeight: '600',
    fontSize: 14,
  },

  replyInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 8,
  },

  replyInfoText: {
    fontSize: 13,
    color: '#333',
  },

  cancelReplyText: {
    color: '#000',
    fontSize: 13,
  },


});

export default PostCard;
