import { combineReducers } from 'redux';

import common from './common.reducer';
import api from './api.reducer';

const rootReducer = combineReducers({
    common,
    api,
});

export default rootReducer;
