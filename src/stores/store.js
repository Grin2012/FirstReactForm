import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/rootReducer';

export const newStore = () => {
    return createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(thunk),
        )
    );
};