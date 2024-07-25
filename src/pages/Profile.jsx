import React, { useState, useEffect } from 'react';
import { fetchUserProfile, fetchUserPosts, fetchUserFollowers, fetchUserFollowing } from '../api';
import '../App.css';



const Profile = () => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [activeTab, setActiveTab] = useState('posts');

  useEffect(() => {
    setUser(fetchUserProfile());
    setPosts(fetchUserPosts());
    setFollowers(fetchUserFollowers());
    setFollowing(fetchUserFollowing());
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'posts':
        return (
          <div className="posts-grid">
            {posts.map(post => (
              <div key={post.id} className="post">
                <img src={post.image} alt="post" />
              </div>
            ))}
          </div>
        );
      case 'followers':
        return (
          <div className="followers-list">
            {followers.map(follower => (
              <div key={follower.id} className="follower">
                <img src='https://i.pinimg.com/564x/0c/0f/b4/0c0fb4647a4016036a04f697444b19a2.jpg' alt="avatar" />
                <span>{follower.name}</span>
              </div>
            ))}
          </div>
        );
      case 'following':
        return (
          <div className="following-list">
            {following.map(follow => (
              <div key={follow.id} className="following">
                <img src='https://i.pinimg.com/564x/c7/82/4f/c7824f2ee47717fe08f756248105f231.jpg' alt="avatar" />
                <span>{follow.name}</span>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img src='https://i.pinimg.com/564x/e0/2c/97/e02c97372d20a9459d52474d44875109.jpg' alt="profile" className="profile-avatar" />
        <div className="profile-info">
          <h2>{user.username}</h2>
          <div className="profile-stats">
            <span>{posts.length} posts</span>
            <span>{followers.length} followers</span>
            <span>{following.length} following</span>
          </div>
          <p>{user.bio}</p>
        </div>
      </div>
      <div className="profile-tabs">
        <button onClick={() => setActiveTab('posts')} className={activeTab === 'posts' ? 'active' : ''}>Posts</button>
        <button onClick={() => setActiveTab('followers')} className={activeTab === 'followers' ? 'active' : ''}>Followers</button>
        <button onClick={() => setActiveTab('following')} className={activeTab === 'following' ? 'active' : ''}>Following</button>
      </div>
      <div className="profile-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Profile;
