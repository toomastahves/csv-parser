import { UPLOAD_SUCCESS, UPLOAD_ERROR, UPLOAD_PROGRESS } from '../constants/upload';
import { UPLOAD_URI } from '../constants/uri';
import { emailSentToggle } from './email';

export const uploadSuccess = (result) => {
  return {
    type: UPLOAD_SUCCESS,
    result: JSON.parse(result)
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

export const uploadRequest = (file) => {
  return dispatch => {
    dispatch(uploadProgress(0));
    dispatch(emailSentToggle(false));
    const req = new XMLHttpRequest();
    req.open('POST', UPLOAD_URI);
    const data = new FormData();
    data.append(file.name, file);
    req.upload.addEventListener('progress', (e2) => {
      let progress = 0;
      if (e2.total !== 0) {
        progress = parseInt((e2.loaded / e2.total) * 100, 10);
        dispatch(uploadProgress(progress));
        console.log(progress);
      }
    }, false);
    req.onreadystatechange = () => {
      if(req.readyState === 4 && req.status === 200) {
        dispatch(uploadSuccess(req.responseText));
      }
      if(req.readyState === 4 && req.status === 500) {
        dispatch(uploadError(req.responseText));
      }
    };
    req.send(data);
  };
};
