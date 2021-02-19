import React from 'react';
import { useSelector } from 'react-redux';
import { getPosts } from '../selectors/postSelectors';
import styles from './CommentHeader.css';

export default function CommentHeader(id) {

  const post = useSelector(getPosts).filter(post =>
    post !== id
  )[0];

  return (
    <section className={styles.commentHeaderContainer}>
      <h1>{post.title}</h1>
      <p>{post.contents}</p>
    </section>
  );
}
