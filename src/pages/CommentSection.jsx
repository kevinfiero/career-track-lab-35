import React from 'react';
import CommentHeader from '../comments/CommentHeader';
import CommentList from '../comments/CommentList';
import CommentForm from '../forms/CommentForm';

export default function CommentSection() {

  return (
    <>
      <CommentHeader/>
      <CommentForm/>
      <CommentList />
    </>
  );
}
