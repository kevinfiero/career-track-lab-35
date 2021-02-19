import { 
  createComment, 
  CREATE_COMMENT, 
  deleteComment, 
  DELETE_COMMENT } 
  from './commentActions';

describe('comment actions', () => {
  it('creates a create comment action', () => {
    const action = createComment({ 
      comment: 'The best board game in 2020 was the best game that existed.' 
    });

    expect(action).toEqual({
      type: CREATE_COMMENT,
      payload: { 
        comment: 'The best board game in 2020 was the best game that existed.' 
      }
    });
  });

  it('creates a delete comment action', () => {
    const action = deleteComment({ 
      comment: 'The best board game in 2020 was the best game that existed.' 
    });

    expect(action).toEqual({
      type: DELETE_COMMENT,
      payload: { 
        comment: 'The best board game in 2020 was the best game that existed.' 
      }
    });
  });
});
