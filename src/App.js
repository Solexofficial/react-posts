import React, { useState, useMemo } from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import './styles/App.css';

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: '1' },
    { id: 2, title: 'TypeScript 3', body: '3' },
    { id: 3, title: 'Redux 2', body: 'Description1' },
  ]);

  const [filter, setFilter] = useState({ sort: '', query: '' });

  const sortedPosts = useMemo(() => {
    console.log('sorting!');
    if (filter.sort) {
      return [...posts.sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))];
    } else {
      return posts;
    }
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()));
  }, [filter.query, sortedPosts]);

  const createPost = newPost => {
    setPosts([...posts, newPost]);
  };

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
    <div className='App'>
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <PostFilter filter={filter} setFilter={setFilter} />
      </div>
      {sortedAndSearchedPosts.length !== 0 ? (
        <PostList posts={sortedAndSearchedPosts} removePost={removePost} title='Посты JS' />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Посты не были найдены!</h1>
      )}
    </div>
  );
};

export default App;
