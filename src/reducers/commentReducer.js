import { 
  CREATE_COMMENT, 
  DELETE_COMMENT, 
  DELETE_POST_COMMENTS 
} from '../actions/commentActions';

export const initialState = {
  comments: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(comment =>
          comment.commentId !== action.payload
        )
      };
    case DELETE_POST_COMMENTS:
      return {
        ...state,
        comments: state.comments.filter(comment =>
          comment.postId !== action.payload
        )
      };
    default:
      return state;
  }
}
