import { combineReducers } from 'redux';

import favorites from './favorites.reducer';
import api from './api.reducer';

const rootReducer = combineReducers({
    favorites,
    api,
});

export default rootReducer;
