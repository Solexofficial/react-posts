import React, { useState, useMemo } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';
import './styles/App.css';

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: '1' },
    { id: 2, title: 'TypeScript 3', body: '3' },
    { id: 3, title: 'Redux 2', body: 'Description1' },
  ]);

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const sortedPosts = useMemo(() => {
    console.log('sorting!');
    if (selectedSort) {
      return [...posts.sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))];
    } else {
      return posts;
    }
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery));
  }, [searchQuery, sortedPosts]);

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
      {sortedAndSearchedPosts.length !== 0 ? (
        <PostList posts={sortedAndSearchedPosts} removePost={removePost} title='Посты JS' />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Посты не были найдены!</h1>
      )}
    </div>
  );
};

export default App;
