import React from 'react';
import Comment from './Comment';
import { useSelector } from 'react-redux';
import { getComments } from '../selectors/commentSelectors';

function CommentList() {
  const comments = useSelector(getComments);
  const commentElements = comments.map(comment => (
    <li key={comment.title}>
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
