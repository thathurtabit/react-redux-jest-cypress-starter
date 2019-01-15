import 'whatwg-fetch';
import { requestData } from './requestData';
import { receiveExampleData } from './receiveExampleData';
import { requestDataError } from './requestDataError';

export const fetchExampleData = endpoint => dispatch => {
  if (!endpoint) return;

  dispatch(requestData());
  return fetch(endpoint)
    .then(response => {
      if (!response.ok) {
        dispatch(receiveExampleData(response));
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .then(response => {
      dispatch(receiveExampleData(response));
    })
    .catch(error => dispatch(requestDataError(error)));
};
