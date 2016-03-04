import { combineReducers } from 'redux';
import { searchReducer } from './search';
import { uploadReducer } from './upload';
import { emailReducer } from './email';

const reducers = combineReducers({
  searchReducer,
  uploadReducer,
  emailReducer
});

export default reducers;
