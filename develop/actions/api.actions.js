import apiTypes from './types/api.types';
import {httpGet} from '../api/getData';

export const apiRequest = (url) => ({
    type: apiTypes.REQUEST_POKEMONS,
    url,
});

export const apiReceive = (json) => ({
    type: apiTypes.RECEIVE_POKEMONS,
    json,
    receivedAt : Date.now(),
});

export function asyncGet(url) {

  return function (dispatch) {

    dispatch(apiRequest(url))
    
    return httpGet(url)
      .then(
        response => {
          console.log(JSON.parse(response));
          dispatch(apiReceive(JSON.parse(response)))
        },
        error => console.log(`Rejected: ${error}`)
      )
  }
}
