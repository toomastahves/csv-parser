import { combineReducers } from 'redux';
import { searchReducer } from './search';
import { uploadReducer } from './upload';

const reducers = combineReducers({
  searchReducer,
  uploadReducer
});

export default reducers;
