import React from 'react';
import PostForm from '../../forms/PostForm';
import { PostProvider } from '../../state/PostProvider';
import PostList from '../post/PostList';

export default function App() {
  return (
    <PostProvider>
      <PostForm />
      <PostList />
    </PostProvider>
  );
}
