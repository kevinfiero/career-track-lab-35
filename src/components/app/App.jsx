import React from 'react';
import PostForm from '../../forms/PostForm';
import { Provider } from 'react-redux';
import store from '../../store';
import PostList from '../post/PostList';
import './App.css';

export default function App() {
  return (
    <Provider store={store}>
      <PostForm />
      <PostList />
    </Provider>
  );
}
