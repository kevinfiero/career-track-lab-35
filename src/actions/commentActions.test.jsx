import { 
  createComment, 
  CREATE_COMMENT, 
  deleteComment, 
  DELETE_COMMENT } 
  from './commentActions';

describe('comment actions', () => {
  it('creates a create comment action', () => {
    const action = createComment({ 
      comment: 'The best board game in 2020 was the best game that existed.',
      commentId: '930ae81d-b860-4fa9-a6dd-37d5a82a6c0f' 
    });

    expect(action).toEqual({
      type: CREATE_COMMENT,
      payload: { 
        comment: 'The best board game in 2020 was the best game that existed.',
        commentId: '930ae81d-b860-4fa9-a6dd-37d5a82a6c0f'  
      }
    });
  });

  it('creates a delete comment action', () => {
    const action = deleteComment('930ae81d-b860-4fa9-a6dd-37d5a82a6c0f');

    expect(action).toEqual({
      type: DELETE_COMMENT,
      payload: '930ae81d-b860-4fa9-a6dd-37d5a82a6c0f'
    });
  });
});
