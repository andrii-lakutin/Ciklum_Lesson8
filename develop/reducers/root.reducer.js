import { combineReducers } from 'redux';

import favorites from './favorites.reducer';
import api from './api.reducer';
import filters from './filters.reducer';

const rootReducer = combineReducers({
    favorites,
    api,
    filters,
});

export default rootReducer;
