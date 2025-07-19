
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

const screenWidth = Dimensions.get('window').width;
const MAX_CONTENT_LINES = 3;

const PostCard = ({ activeCategory }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigation();
  const [expandedPosts, setExpandedPosts] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const token = await AsyncStorage.getItem('token');
        if (!token) throw new Error('No authentication token found');

        const response = await fetch(
          `http://192.168.0.108:8080/api/users/getUploaded-post/${activeCategory}`,
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

         
            <Icon name="message-circle" size={24} color="black" />
          
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
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
    />
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
});

export default PostCard;

