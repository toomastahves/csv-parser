import { UPLOAD_SUCCESS, UPLOAD_ERROR, UPLOAD_PROGRESS } from '../constants/upload';

const initialState = {
  uploading: false,
  error: {},
  uploadResult: null,
  progress: 0
};

export const uploadReducer = (state = initialState, action) => {
  switch(action.type) {

    case UPLOAD_SUCCESS:
      return Object.assign({}, state, { uploading: false, error: {}, uploadResult: action.uploadResult });
    case UPLOAD_ERROR:
      return Object.assign({}, state, { uploading: false, error: action.error });
    case UPLOAD_PROGRESS:
      return Object.assign({}, state, { uploading: true, progress: action.progress, uploadResult: null });

    default:
      return state;
  }
};
