import React, { useState } from 'react';
import styles from './CommentForm.css';
import { createComment } from '../actions/commentActions';
import { useDispatch } from 'react-redux';
import { v4 as randomId } from 'uuid';


const CommentForm = () => {

  const dispatch = useDispatch();

  const [comment, setComments] = useState('');
  const [commentId, setCommentId] = useState('');
  const handleSubmit = event => {
    event.preventDefault();

    dispatch(createComment({ comment, commentId }));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contents}>
      
      <textarea
        onChange={({ target }) => setComments(target.value)} 
        placeholder="Type Your Comment Here..." 
      />
      <button onClick={() => setCommentId(randomId())}>Submit Comment</button>
    </form>
  );
};

export default CommentForm;

