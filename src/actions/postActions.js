export const CREATE_POST = 'CREATE_POST';

export const createPost = (post) => ({
  type: CREATE_POST,
  payload: post
});

export const DELETE_POST = 'DELETE_POST';

export const deletePost = (postId) => ({
  type: DELETE_POST,
  payload: postId
});

export const DELETE_POST_COMMENTS = 'DELETE_POST_COMMENTS';

export const deletePostComments = (postId) => ({
  type: DELETE_POST_COMMENTS,
  payload: postId
});
