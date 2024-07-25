
import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import PostDetail from './pages/PostDetail.jsx';
import CommentDetail from './pages/CommentDetail.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/posts/:postId" element={<PostDetail />} />
          <Route path="/comments/:commentId" element={<CommentDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
