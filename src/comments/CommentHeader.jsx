import React from 'react';
import { useSelector } from 'react-redux';
import { getPosts } from '../selectors/postSelectors';
import { useParams } from 'react-router-dom';
import styles from './CommentHeader.css';

export default function CommentHeader() {

  const post = useSelector(getPosts).filter(post =>
    post.postId === useParams().id
  )[0];

  return (
    <section className={styles.commentHeaderContainer}>
      <h1>{post.title}</h1>
      <p>{post.contents}</p>
    </section>
  );
}
