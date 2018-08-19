import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import { layoutTheme } from './layout/reducer';

const adminPanel = combineReducers({
    layoutTheme,
});


export const store = createStore(adminPanel, applyMiddleware(thunk));
