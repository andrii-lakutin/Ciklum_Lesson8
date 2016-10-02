import apiTypes from '../actions/types/api.types';

export default (state = {}, action) => {
    switch (action.type) {
        case apiTypes.REQUEST_POKEMONS:
            return {
                ...state, ...{apiStatus : 'PENDING' }
            };
        case apiTypes.RECEIVE_POKEMONS:
            if (state.apiData[0] !== undefined) {
                //проверка чтобы не склеивать с изначальным массивом такой же.
                if (state.apiData[0].name !== action.json.objects[0].name) {
                    return {
                        ...state, ...{apiStatus : 'COMPLETE', apiData : state.apiData.concat(action.json.objects) }
                    }
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
