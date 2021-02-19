import React from 'react';
import PropTypes from 'prop-types';
import styles from './Comment.css';
import { deleteComment } from '../actions/commentActions';
import { useDispatch } from 'react-redux';

function Comment({ comment }) {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteComment({ comment }));
  };

  return (
    <div className={styles.commentContainer}>
      <div className={styles.row}>
        <p className={styles.commentTitle}>{comment}</p>
        <button 
          onClick={handleClick}
          className={styles.button}>Delete</button>
      </div>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.string.isRequired

};

export default Comment;

