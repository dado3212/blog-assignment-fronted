import { ActionTypes } from '../actions';

const GroupsReducer = (state = { all: [], currentGroup: null }, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_GROUPS:
      return { all: action.payload, currentGroup: state.currentGroup };
    case ActionTypes.FETCH_GROUP:
      return { all: state.all, currentGroup: action.payload };
    default:
      return state;
  }
};

export default GroupsReducer;
