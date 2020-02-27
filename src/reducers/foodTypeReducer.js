
import {
  // GET_FOODTYPE_LIST,
  GET_FOODTYPE_LIST_SUCCESS,
} from '../actions/foodTypeAction';

const initState = {
  list: [],
  actionName: 'NOPE',
};

export default function foodTypeReducer(state = initState, action) {
  switch (action.type) {
    case GET_FOODTYPE_LIST_SUCCESS:
      return {
        ...state,
        actionName: 'GET_FOODTYPE_LIST_SUCCESS',
      };
    default:
      return state;
  }
}
