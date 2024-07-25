let userProfile = {
    id: 1,
    username: 'Parshwanath',
    avatar: 'https://via.placeholder.com/150',
    bio: 'This is the bio of Parshwanath.'
  };
  
  let posts = [
    { id: 1, image: 'https://i.pinimg.com/564x/89/44/34/894434484c6e8c8c9aa4b2c03b7d3aea.jpg' },
    { id: 2, image: 'https://i.pinimg.com/474x/35/9e/df/359edf21c7beb76357827d60550256b8.jpg' },
    { id: 3, image: 'https://i.pinimg.com/236x/26/d9/53/26d953b0f2df4d680bfea9a1e5fab6fe.jpg' }
  ];
  
  let followers = [
    { id: 1, name: 'Dhanush', avatar: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Shyam', avatar: 'https://via.placeholder.com/150' }
  ];
  
  let following = [
    { id: 1, name: 'Dhanush', avatar: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Shyam', avatar: 'https://via.placeholder.com/150' }
  ];
  
  let comments = [
    { id: 1, postId: 1, content: 'Nice post!' },
    { id: 2, postId: 2, content: 'Great!' },
    { id: 3, postId: 3, content: 'Amazing!' }
  ];
  
  let notifications = [
    { id: 1, type: 'follow', content: 'Dhanush Started Following You' },
    { id: 2, type: 'follow', content: 'Shyam started following you'},
    { id: 3, type: 'comment', content: 'Shyam commented on your post' },
    { id: 4, type: 'comment', content: 'Dhanush commented on your post' },
    { id: 4, type: 'comment', content: 'Dhanush and Shyam liked your post' }    
  ];



  
  export const fetchUserProfile = () => {
    return userProfile;
  };
  
  export const fetchUserPosts = () => {
    return posts;
  };
  
  export const fetchUserFollowers = () => {
    return followers;
  };
  
  export const fetchUserFollowing = () => {
    return following;
  };
  
  export const fetchComments = () => {
    return comments;
  };
  
  export const fetchNotifications = () => {
    return notifications;
  };
  
  export const updateUserProfileImage = (newImage) => {
    userProfile.avatar = newImage;
  };
  
  export const updateComment = (commentId, newContent) => {
    const comment = comments.find(c => c.id === commentId);
    if (comment) {
      comment.content = newContent;
    }
  };
  
  export const fetchPostById = (postId) => {
    return posts.find(post => post.id === postId);
  };
  
  export const fetchCommentById = (commentId) => {
    return comments.find(comment => comment.id === commentId);
  };
  