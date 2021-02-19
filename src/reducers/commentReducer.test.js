import { createComment, deleteComment } from '../actions/commentActions';
import reducer from './commentReducer';

describe('comment reducer', () => {
  it('add a comment with the CREATE_COMMENT action', () => {
    const state = {
      comments: []
    };

    const action = createComment({ 
      comment: 'The best board game in 2020 was the best game that existed.',
      commentId: '930ae81d-b860-4fa9-a6dd-37d5a82a6c0f'   
    });

    const newState = reducer(state, action);

    expect(newState).toEqual({
      comments: [{ 
        comment: 'The best board game in 2020 was the best game that existed.',
        commentId: '930ae81d-b860-4fa9-a6dd-37d5a82a6c0f'   
      }]
    });
  });

  it('delete a comment with the DELETE_COMMENT action', () => {
    const state = {
      comments: []
    };

    const actionCreate = createComment({ 
      comment: 'The best board game in 2020 was the best game that existed.',
      commentId: '930ae81d-b860-4fa9-a6dd-37d5a82a6c0f'   
    });

    reducer(state, actionCreate);

    const actionDelete = deleteComment('930ae81d-b860-4fa9-a6dd-37d5a82a6c0f');

    const newState = reducer(state, actionDelete);

    expect(newState).toEqual({
      comments: []
    });
  });

});
