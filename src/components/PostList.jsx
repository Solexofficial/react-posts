import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PostItem from './PostItem';

const PostList = ({ posts, title, removePost }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>;
  }
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, idx) => (
          <CSSTransition key={post.id} timeout={500} classNames='post'>
            <PostItem post={post} number={idx + 1} removePost={removePost} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

export default PostList;
