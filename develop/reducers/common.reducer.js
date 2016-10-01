import commonTypes from '../actions/types/common.types';

export default (state = {}, action) => {
    switch (action.type) {
        case commonTypes.COMMON_ACTION:
        console.log('lol');
            return {
                ...state, 
            };
        default:
            return state;
    }
};
