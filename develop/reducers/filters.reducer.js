import filtersTypes from '../actions/types/filters.types';

export default (state = {}, action) => {
    switch (action.type) {
        case filtersTypes.REQUEST_FILTERS:
            return {
                ...state, ...{filterStatus : 'PENDING' }
            };
        case filtersTypes.RECEIVE_FILTERS:
            return {
               ...state, ...{filterStatus : 'COMPLETE', filterItems : action.json.objects } 
            }
        case filtersTypes.SET_FILTER:
            return {
               ...state, ...{chosenFilter : action.filter} 
            }
        default:
            return state;
    } 
}; 
