// @flow

import { LIGHT_LAYOUT, DARK_LAYOUT } from '../actionTypes';

export function changeTheme(state: string) {
    switch (state) {
        case LIGHT_LAYOUT:
            localStorage.setItem('f-panel.theme', DARK_LAYOUT);
            return { type: DARK_LAYOUT };
        case DARK_LAYOUT:
            localStorage.setItem('f-panel.theme', LIGHT_LAYOUT);
            return { type: LIGHT_LAYOUT };
        default:
            localStorage.setItem('f-panel.theme', LIGHT_LAYOUT);
            return { type: LIGHT_LAYOUT };
    }
}
