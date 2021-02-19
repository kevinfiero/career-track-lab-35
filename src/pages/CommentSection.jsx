import React from 'react';
import CommentList from '../comments/CommentList';
import CommentForm from '../forms/CommentForm';

export default function CommentSection() {
  return (
    <>
      <CommentForm />
      <CommentList />
    </>
  );
}
