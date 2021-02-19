import { createPost, deletePost } from '../actions/postActions';
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

  it('delete a post with the DELETE_POST action', () => {
    const state = {
      posts: []
    };

    const actionCreate = createPost({ 
      title: 'Best Board Game of 2020', 
      contents: 'The best board game in 2020 was the best game that existed.' 
    });

    reducer(state, actionCreate);

    const actionDelete = deletePost({ 
      title: 'Best Board Game of 2020', 
      contents: 'The best board game in 2020 was the best game that existed.' 
    });

    const newState = reducer(state, actionDelete);

    expect(newState).toEqual({
      posts: []
    });
  });

});
