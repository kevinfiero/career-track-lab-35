import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import combineReducers from './reducers/index';

// const [state, dispatch] = useReducer(reducer);

const store = createStore(combineReducers, composeWithDevTools());

export default store;
