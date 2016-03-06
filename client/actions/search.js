import {
  SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_ERROR,
  TABLELIST_REQUEST, TABLELIST_SUCCESS, TABLELIST_ERROR
} from '../constants/search';
import { SEARCH_URI, TABLELIST_URI } from '../constants/uri';

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

export const searchRequest = () => {
  return {
    type: SEARCH_REQUEST
  };
};

export const search = (query, tableName) => {
  return dispatch => {
    dispatch(searchRequest());
    const req = new XMLHttpRequest();
    const params = `query=${query}&tableName=${tableName}`;
    req.open('GET', `${SEARCH_URI}?${params}`);

    req.onreadystatechange = () => {
      if(req.readyState === 4 && req.status === 200) {
        dispatch(searchSuccess(req.responseText));
      }
      if(req.readyState === 4 && req.status === 500) {
        dispatch(searchError(req.responseText));
      }
    };
    req.send();
  };
};

export const tableListSuccess = (r) => {
  const tableList = JSON.parse(r);
  return {
    type: TABLELIST_SUCCESS,
    tableList
  };
};

export const tableListError = (error) => {
  return {
    type: TABLELIST_ERROR,
    error
  };
};

export const tableListRequest = () => {
  return {
    type: TABLELIST_REQUEST
  };
};

export const tableList = () => {
  return dispatch => {
    dispatch(tableListRequest());
    const req = new XMLHttpRequest();
    req.open('GET', `${TABLELIST_URI}`);

    req.onreadystatechange = () => {
      if(req.readyState === 4 && req.status === 200) {
        dispatch(tableListSuccess(req.responseText));
      }
      if(req.readyState === 4 && req.status === 500) {
        dispatch(tableListError(req.responseText));
      }
    };
    req.send();
  };
};
