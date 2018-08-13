import { combineReducers } from 'redux';

import { layoutTheme } from './layout/reducer';

const adminPanel = combineReducers({
    layoutTheme,
});

export default adminPanel;