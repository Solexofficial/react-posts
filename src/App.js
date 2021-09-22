import React, { useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';
import './styles/App.css';

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: '1' },
    { id: 2, title: 'Javascript 3', body: '3' },
    { id: 3, title: 'Javascript 2', body: 'Description1' },
  ]);

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const getSortedPosts = () => {
    if (selectedSort) {
      return [...posts.sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))];
    } else {
      return posts;
    }
  };

  const sortedPosts = getSortedPosts();

  const createPost = newPost => {
    setPosts([...posts, newPost]);
  };

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  const sortPosts = sort => {
    setSelectedSort(sort);
  };

  return (
    <div className='App'>
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MyInput type='text' placeholder='Поиск' value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='Сортировка'
          option={[
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' },
          ]}
        />
      </div>
      {posts.length !== 0 ? (
        <PostList posts={sortedPosts} removePost={removePost} title='Посты JS' />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Посты не были найдены!</h1>
      )}
    </div>
  );
};

export default App;
