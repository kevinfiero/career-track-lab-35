import React from 'react';
import Comment from './Comment';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getComments } from '../selectors/commentSelectors';

function CommentList() {
  const id = useParams().id;

  const comments = useSelector(getComments).filter(comment =>
    comment.postId === id
  );
  const commentElements = comments.map(comment => (
    <li key={comment.commentId}>
      <Comment {...comment} />
    </li>
  ));

  return (
    <div>
      {commentElements}    
    </div>
  );
}

export default CommentList;
