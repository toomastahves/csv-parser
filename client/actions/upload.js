import { UPLOAD_REQUEST, UPLOAD_SUCCESS, UPLOAD_ERROR, UPLOAD_PROGRESS } from '../constants/upload';
import { UPLOAD_URI } from '../constants/uri';

export const uploadSuccess = () => {
  return {
    type: UPLOAD_SUCCESS
  };
};

export const uploadError = () => {
  return {
    type: UPLOAD_ERROR
  };
};

export const uploadProgress = (progress) => {
  return {
    type: UPLOAD_PROGRESS,
    progress
  };
};

export const uploadRequest = (form) => {
  return dispatch => {
    dispatch(uploadProgress(0));
    const req = new XMLHttpRequest();
    req.open('POST', UPLOAD_URI);

    req.upload.addEventListener('progress', (e2) => {
      let progress = 0;
      if (e2.total !== 0) {
        progress = parseInt((e2.loaded / e2.total) * 100, 10);
      }
      console.log(progress);
      dispatch(uploadProgress(progress));
    }, false);

    req.onreadystatechange = () => {
      console.log(req);
      if(req.readyState === 4 && req.status === 200) {
        dispatch(uploadSuccess(req.responseText));
      }
      if(req.readyState === 4 && req.status === 400) {
        dispatch(uploadError(req.responseText));
      }
    };

    req.send(form);
  };
};
