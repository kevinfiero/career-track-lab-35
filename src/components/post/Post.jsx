import React from 'react';
import PropTypes from 'prop-types';
import styles from './Post.css';
import { deletePost } from '../../actions/postActions';
import { useDispatch } from '../../state/PostProvider';

function Post({ title, contents }) {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deletePost({ title, contents }));
  };

  return (
    <div className={styles.postContainer}>
      <div className={styles.column}>
        <div className={styles.row}>
          <h1 className={styles.postTitle}>{title}</h1>
          <button 
            onClick={handleClick}
            className={styles.button}>Delete</button>
        </div>
        <p className={styles.postContents}>{contents}</p>
      </div>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired
};

export default Post;

