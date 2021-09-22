import React, { useState } from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import './styles/App.css';

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' },
  ]);

  return (
    <div className='App'>
      <form>
        <input type='text' placeholder='Название поста' />
        <input type='text' placeholder='Описание поста' />
        <MyButton disabled>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title='Посты JS' />
    </div>
  );
};

export default App;
