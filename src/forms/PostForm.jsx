import React, { useState } from 'react';
import styles from './PostForm.css';
import { createPost } from '../actions/postActions';
import { useDispatch } from 'react-redux';

const PostForm = () => {

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(createPost({ title, contents }));
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
      <button>Submit Post</button>
    </form>
  );
};

export default PostForm;

