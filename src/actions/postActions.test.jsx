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
      contents: 'The best board game in 2020 was the best game that existed.',
      postId: '930ae81d-b860-4fa9-a6dd-37d5a82a6c0f' 
    });

    expect(action).toEqual({
      type: CREATE_POST,
      payload: { 
        title: 'Best Board Game of 2020', 
        contents: 'The best board game in 2020 was the best game that existed.',
        postId: '930ae81d-b860-4fa9-a6dd-37d5a82a6c0f' 
      }
    });
  });

  it('creates a delete post action', () => {
    const action = deletePost('930ae81d-b860-4fa9-a6dd-37d5a82a6c0f');

    expect(action).toEqual({
      type: DELETE_POST,
      payload: '930ae81d-b860-4fa9-a6dd-37d5a82a6c0f'
    });
  });
});
