// @flow

import { LIGHT_LAYOUT, DARK_LAYOUT } from './actionTypes';

const initialState = {
    currentLayout: LIGHT_LAYOUT
}

export function layoutTheme(state: any = initialState, action: any) {
    switch (action.type) {
        case LIGHT_LAYOUT:
            console.log(state, 'REDUX REDUCER, LIGHT');
            return { type: LIGHT_LAYOUT };
        case DARK_LAYOUT:
            console.log(state, 'REDUX REDUCER, DARK');
            return { type: DARK_LAYOUT };
        default:
            return state;
    }
}
