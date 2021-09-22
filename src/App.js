import React, { useState, useRef } from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css';

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' },
  ]);

  const [title, setTitle] = useState('');
  const bodyInputRef = useRef();

  const addNewPost = e => {
    e.preventDefault();
    console.log(title);
    console.log(bodyInputRef.current.value);
  };

  return (
    <div className='App'>
      <form>
        <MyInput type='text' placeholder='Название поста' value={title} onChange={e => setTitle(e.target.value)} />
        <MyInput type='text' placeholder='Описание поста' ref={bodyInputRef} />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title='Посты JS' />
    </div>
  );
};

export default App;
