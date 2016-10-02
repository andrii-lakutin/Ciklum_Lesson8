import apiTypes from '../actions/types/api.types';

export default (state = {}, action) => {
    switch (action.type) {
        case apiTypes.REQUEST_POKEMONS:
            return {
                ...state, ...{apiStatus : 'PENDING' }
            };
        case apiTypes.RECEIVE_POKEMONS:
            if (state.apiData !== undefined) {
                return {
                    ...state, ...{apiStatus : 'COMPLETE', apiData : state.apiData.concat(action.json.objects) }
                }
            } else {
                return {
                   ...state, ...{apiStatus : 'COMPLETE', apiData : action.json.objects } 
                }
            }
        default:
            return state;
    } 
}; 
