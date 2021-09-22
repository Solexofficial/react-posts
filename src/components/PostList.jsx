import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, title }) => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post, idx) => (
        <PostItem key={post.id} post={post} number={idx + 1} />
      ))}
    </>
  );
};

export default PostList;
