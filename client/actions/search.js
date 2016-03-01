import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_ERROR } from '../constants/search';
import { SEARCH_URI } from '../constants/uri';

export const searchSuccess = (r) => {
  const result = JSON.parse(r);
  return {
    type: SEARCH_SUCCESS,
    result
  };
};

export const searchError = (error) => {
  return {
    type: SEARCH_ERROR,
    error
  };
};

export const searchRequest = (query) => {
  console.log(query);
  return dispatch => {
    const req = new XMLHttpRequest();
    req.open('GET', `${SEARCH_URI}/${query}`);

    req.onreadystatechange = () => {
      console.log(req);
      if(req.readyState === 4 && req.status === 200) {
        dispatch(searchSuccess(req.responseText));
      }
      if(req.readyState === 4 && req.status === 400) {
        dispatch(searchError(req.responseText));
      }
    };
    req.send();
  };
};
