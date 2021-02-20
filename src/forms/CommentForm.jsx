import React, { useState } from 'react';
import styles from './CommentForm.css';
import { useParams } from 'react-router-dom';
import { createComment } from '../actions/commentActions';
import { useDispatch } from 'react-redux';
import { v4 as randomId } from 'uuid';


const CommentForm = () => {

  const dispatch = useDispatch();

  const [comment, setComments] = useState('');
  const [commentId, setCommentId] = useState('');
  const [postId, setPostId] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(createComment({ comment, commentId, postId }));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contents}>
      
      <textarea
        onChange={({ target }) => setComments(target.value)} 
        placeholder="Type Your Comment Here..." 
      />
      <button onClick=
        {() => {setCommentId(randomId()); 
          setPostId(useParams().id);}}> Submit Comment
      </button>
    </form>
  );
};

export default CommentForm;

