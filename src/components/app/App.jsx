import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import './App.css';
import PostHome from '../../pages/PostHome';
import CommentSection from '../../pages/CommentSection';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={PostHome} />
          <Route exact path="/:id" component={CommentSection} />
        </Switch>
      </Router>
    </Provider>
  );
}
