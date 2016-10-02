import filtersTypes from './types/filters.types';
import {httpGet} from '../api/getData';

export const filtersRequest = (url) => ({
    type: filtersTypes.REQUEST_FILTERS,
    url,
});

export const filtersReceive = (json) => ({
    type: filtersTypes.RECEIVE_FILTERS,
    json,
    receivedAt : Date.now(),
});

export const setFilter = (filter) => ({
    type: filtersTypes.SET_FILTER,
	filter,
});

export function filtersGet(url) {

  return function (dispatch) {

    dispatch(filtersRequest(url))
    
    return httpGet(url)
      .then(
        response => {
          console.log(JSON.parse(response));
          dispatch(filtersReceive(JSON.parse(response)))
        },
        error => console.log(`Rejected: ${error}`)
      )
  }
}
