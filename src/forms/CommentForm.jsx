import React, { useState } from 'react';
import styles from './CommentForm.css';
import { createComment } from '../actions/commentActions';
import { useDispatch } from 'react-redux';

const CommentForm = () => {

  const dispatch = useDispatch();

  const [comment, setComments] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(createComment({ comment }));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contents}>
      <textarea
        onChange={({ target }) => setComments(target.value)} 
        placeholder="Type Your Comment Here..." 
      />
      <button>Submit Comment</button>
    </form>
  );
};

export default CommentForm;

