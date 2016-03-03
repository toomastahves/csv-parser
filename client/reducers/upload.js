import { UPLOAD_SUCCESS, UPLOAD_ERROR, UPLOAD_PROGRESS } from '../constants/upload';

const initialState = {
  uploading: false,
  email: '',
  error: {},
  result: {}
};

export const uploadReducer = (state = initialState, action) => {
  switch(action.type) {

    case UPLOAD_SUCCESS:
      return Object.assign({}, state, { uploading: false, error: {}, result: action.result });
    case UPLOAD_ERROR:
      return Object.assign({}, state, { uploading: false, error: action.error });
    case UPLOAD_PROGRESS:
      return Object.assign({}, state, { uploading: true, progress: action.progress });

    default:
      return state;
  }
};
