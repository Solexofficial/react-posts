import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, title, removePost }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>;
  }
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post, idx) => (
        <PostItem key={post.id} post={post} number={idx + 1} removePost={removePost} />
      ))}
    </>
  );
};

export default PostList;
