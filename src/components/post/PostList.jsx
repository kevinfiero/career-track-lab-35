import React from 'react';
import Post from './Post';
import styles from './Post.css';
import { useSelector } from 'react-redux';
import { getPosts } from '../../selectors/postSelectors';

function PostList() {
  const posts = useSelector(getPosts);
  const postElements = posts.map(post => (
    <li key={post.title}>
      <Post {...post} />
    </li>
  ));

  return (
    <div>
      {postElements}
    </div>
  );
}

export default PostList;

