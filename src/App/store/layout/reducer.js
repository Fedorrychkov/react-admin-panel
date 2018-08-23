// @flow

import { LIGHT_LAYOUT, DARK_LAYOUT } from '../actionTypes';

const initialState = {
    currentLayout:  localStorage.getItem('f-panel.theme') || LIGHT_LAYOUT
}

export function layoutTheme(state: any = initialState, action: any) {
    switch (action.type) {
        case LIGHT_LAYOUT:
            return { ...state, currentLayout: LIGHT_LAYOUT };
        case DARK_LAYOUT:
            return { ...state, currentLayout: DARK_LAYOUT };
        default:
            return state;
    }
}
