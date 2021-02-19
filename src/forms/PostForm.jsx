import React, { useState } from 'react';
import styles from './PostForm.css';
import { createPost } from '../actions/postActions';
import { useDispatch } from 'react-redux';
import { v4 as randomId } from 'uuid';

const PostForm = () => {

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [postId, setPostId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createPost({ title, contents, postId }));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contents}>
      <h1>Create Post</h1>
      <input 
        onChange={({ target }) => setTitle(target.value)} 
        type="text" 
        placeholder="Post Title" 
      />
      <textarea
        onChange={({ target }) => setContents(target.value)} 
        placeholder="Post Contents" 
      />
      <button onClick={() => setPostId(randomId())}>Submit Post</button>
    </form>
  );
};

export default PostForm;

