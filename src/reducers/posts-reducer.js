import { ActionTypes } from '../actions';

const PostsReducer = (state = { all: [], currentPost: null }, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return { all: action.payload, currentPost: state.currentPost };
    case ActionTypes.FETCH_POST:
      return { all: state.all, currentPost: action.payload };
    default:
      return state;
  }
};

export default PostsReducer;
