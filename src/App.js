import React, { useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import './styles/App.css';

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' },
  ]);

  const createPost = newPost => {
    setPosts([...posts, newPost]);
  };

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
    <div className='App'>
      <PostForm create={createPost} />
      {posts.length !== 0 ? (
        <PostList posts={posts} removePost={removePost} title='Посты JS' />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Посты не были найдены!</h1>
      )}
    </div>
  );
};

export default App;
