import { UPLOAD_REQUEST, UPLOAD_SUCCESS, UPLOAD_ERROR } from '../constants/upload';

const initialState = {
  uploading: false,
  email: '',
  error: '',
  result: ''
};

export const searchReducer = (state = initialState, action) => {
  switch(action.type) {

    case UPLOAD_REQUEST:
      return Object.assign({}, initialState, { uploading: true });
    case UPLOAD_SUCCESS:
      return Object.assign({}, state, { uploading: false, error: '', result: action.result });
    case UPLOAD_ERROR:
      return Object.assign({}, state, { uploading: false, error: action.error });

    default:
      return state;
  }
};
