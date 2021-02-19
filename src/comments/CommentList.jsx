import React from 'react';
import PropTypes from 'prop-types';
import Comment from './comment';

function CommentList() {
  return (
    <div>
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
}

CommentList.propTypes = {

};

export default CommentList;
