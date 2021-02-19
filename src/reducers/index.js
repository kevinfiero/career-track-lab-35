import { combineReducers } from 'redux';
import reducer from './postReducer';

export default combineReducers({
  posts: reducer
});
