// @flow

import { LIGHT_LAYOUT, DARK_LAYOUT } from './actionTypes';

export function changeTheme(state: string) {
    switch (state) {
        case LIGHT_LAYOUT:
            return { type: LIGHT_LAYOUT };
        case DARK_LAYOUT:
            return { type: DARK_LAYOUT };
        default:
            return { type: LIGHT_LAYOUT };
    }
}
