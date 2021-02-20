import React from 'react';
import PropTypes from 'prop-types';
import styles from './Post.css';
import { deletePost } from '../../actions/postActions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePostComments } from '../../actions/commentActions';

function Post({ title, contents, postId }) {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deletePost(postId));
    dispatch(deletePostComments(postId));
  };

  return (
    <>
      <div className={styles.postContainer}>
        <div className={styles.column}>
          <div className={styles.row}>
            <Link to={`./${postId}`} className={styles.postLink}>
              <h1 className={styles.postTitle}>{title}</h1>
            </Link>
            <button 
              onClick={handleClick}
              className={styles.button}>Delete</button>
          </div>
          <p className={styles.postContents}>{contents}</p>
        </div>
      </div>
    </>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired
};

export default Post;

