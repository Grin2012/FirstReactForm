import { combineReducers } from 'redux';

import newsReducer from '../app/news/reducer'
import registrationReducer from '../app/registration/reducer'

const appReducer = combineReducers({
    newsReducer,
    registrationReducer
});

export default (state = {}, action) => {
    return appReducer(state, action)
}