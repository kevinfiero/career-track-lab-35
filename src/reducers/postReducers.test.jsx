import { createPost } from '../actions/postActions';
import reducer from './postReducer';

describe('post reducer', () => {
  it('add a post with the CREATE_POST action', () => {
    const state = {
      posts: []
    };

    const action = createPost({ 
      title: 'Best Board Game of 2020', 
      contents: 'The best board game in 2020 was the best game that existed.' 
    });

    const newState = reducer(state, action);

    expect(newState).toEqual({
      posts: [{ 
        title: 'Best Board Game of 2020', 
        contents: 'The best board game in 2020 was the best game that existed.' 
      }]
    });
  });
});
