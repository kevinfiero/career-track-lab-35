import React from 'react';
import PostList from '../components/post/PostList';
import PostForm from '../forms/PostForm';

export default function PostHome() {
  return (
    <>
      <PostForm />
      <PostList />
    </>
  );
}
