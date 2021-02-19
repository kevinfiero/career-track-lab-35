import { createPost, deletePost } from '../actions/postActions';
import reducer from './postReducer';

describe('post reducer', () => {
  it('add a post with the CREATE_POST action', () => {
    const state = {
      posts: []
    };

    const action = createPost({ 
      title: 'Best Board Game of 2020', 
      contents: 'The best board game in 2020 was the best game that existed.',
      postId: '930ae81d-b860-4fa9-a6dd-37d5a82a6c0f' 
    });

    const newState = reducer(state, action);

    expect(newState).toEqual({
      posts: [{ 
        title: 'Best Board Game of 2020', 
        contents: 'The best board game in 2020 was the best game that existed.',
        postId: '930ae81d-b860-4fa9-a6dd-37d5a82a6c0f'  
      }]
    });
  });

  it('delete a post with the DELETE_POST action', () => {
    const state = {
      posts: []
    };

    const actionCreate = createPost({ 
      title: 'Best Board Game of 2020', 
      contents: 'The best board game in 2020 was the best game that existed.',
      postId: '930ae81d-b860-4fa9-a6dd-37d5a82a6c0f'  
    });

    reducer(state, actionCreate);

    const actionDelete = deletePost('930ae81d-b860-4fa9-a6dd-37d5a82a6c0f');

    const newState = reducer(state, actionDelete);

    expect(newState).toEqual({
      posts: []
    });
  });

});
