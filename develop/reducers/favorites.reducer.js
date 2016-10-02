import favoritesTypes from '../actions/types/favorites.types';

export default (state = {}, action) => {
    switch (action.type) {
        case favoritesTypes.ADD_FAVORITE:
            //проверка на повторы
            state.items.forEach((item,index) => {
                if (item.name === action.target.name) {
                    return {
                        ...state
                    }
                } else {
                    return {
                        ...state, ...{items: state.items.concat(action.target)}
                    };   
                }
            });
        case favoritesTypes.REMOVE_FAVORITE:
        	state.items.forEach((item,index) => {
        		if (action.target.name === item.name) {
        			return {
                		...state, ...{items: state.items.splice(index, 1)}
            		};
        		} else {
        			return {
        				...state
        			}
        		}
        	})
        case favoritesTypes.GET_FROM_STORAGE:
        	let favorites = [];
        	for (let key in localStorage){
        		let item = JSON.parse(localStorage[key]);
        		favorites.push(item);
        	}
        	return {
                ...state, ...{items: favorites}
            };
        default:
            return state;
    }
};
 