import {
  SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_ERROR,
  TABLELIST_REQUEST, TABLELIST_SUCCESS, TABLELIST_ERROR
} from '../constants/search';

const initialState = {
  fetchingSearchResults: false,
  fetchingTableList: true,
  error: '',
  result: [],
  tableList: []
};

export const searchReducer = (state = initialState, action) => {
  switch(action.type) {

    case SEARCH_REQUEST:
      return Object.assign({}, state, { fetchingSearchResults: true, error: '' });
    case SEARCH_SUCCESS:
      return Object.assign({}, state, { fetchingSearchResults: false, error: '', result: action.result });
    case SEARCH_ERROR:
      return Object.assign({}, state, { fetchingSearchResults: false, error: action.error });

    case TABLELIST_REQUEST:
      return Object.assign({}, state, { fetchingTableList: true, error: '' });
    case TABLELIST_SUCCESS:
      return Object.assign({}, state, { fetchingTableList: false, error: '', tableList: action.tableList });
    case TABLELIST_ERROR:
      return Object.assign({}, state, { fetchingTableList: false, error: action.error });

    default:
      return state;
  }
};
