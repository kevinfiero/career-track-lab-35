import { 
  createPost, 
  CREATE_POST, 
  deletePost, 
  DELETE_POST } 
  from './postActions';

describe('post actions', () => {
  it('creates a create post action', () => {
    const action = createPost({ 
      title: 'Best Board Game of 2020', 
      contents: 'The best board game in 2020 was the best game that existed.' 
    });

    expect(action).toEqual({
      type: CREATE_POST,
      payload: { 
        title: 'Best Board Game of 2020', 
        contents: 'The best board game in 2020 was the best game that existed.' 
      }
    });
  });

  it('creates a delete post action', () => {
    const action = deletePost({ 
      title: 'Best Board Game of 2020', 
      contents: 'The best board game in 2020 was the best game that existed.' 
    });

    expect(action).toEqual({
      type: DELETE_POST,
      payload: { 
        title: 'Best Board Game of 2020', 
        contents: 'The best board game in 2020 was the best game that existed.' 
      }
    });
  });
});
