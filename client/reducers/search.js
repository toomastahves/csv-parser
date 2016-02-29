import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_ERROR } from '../constants/search';

const initialState = {
  fetching: false,
  result: '',
  error: ''
};

export const searchReducer = (state = initialState, action) => {
  switch(action.type) {

    case SEARCH_REQUEST:
      return Object.assign({}, state, { fetching: true, error: '' });
    case SEARCH_SUCCESS:
      return Object.assign({}, state, { fetching: false, error: '', result: action.result });
    case SEARCH_ERROR:
      return Object.assign({}, state, { fetching: false, error: action.error });

    default:
      return state;
  }
};
