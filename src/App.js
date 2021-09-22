import React, { useState } from 'react';
import PostList from './components/PostList';
import './styles/App.css';

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' },
  ]);
  const [posts2, setPosts2] = useState([
    { id: 1, title: 'Python', body: 'Description' },
    { id: 2, title: 'Python 2', body: 'Description' },
    { id: 3, title: 'Python 3', body: 'Description' },
  ]);

  return (
    <div className='App'>
      <PostList posts={posts} title='Посты JS' />
      <PostList posts={posts2} title='Посты Python' />
    </div>
  );
};

export default App;
