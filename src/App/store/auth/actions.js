// @flow

import { ADD_TOKEN, REMOVE_TOKEN, GET_TOKEN } from "../actionTypes";

export function reduce(state: any) {
    switch (state.type) {
        case ADD_TOKEN:
            localStorage.setItem('f-panel.token', state.token);
            return { type: ADD_TOKEN, token: state.token };
        case GET_TOKEN:
            const token = localStorage.getItem('f-panel.token');
            return { type: GET_TOKEN, token: token };
        case REMOVE_TOKEN:
            localStorage.removeItem('f-panel.token');
            return { type: REMOVE_TOKEN, token: '' };
        default:
            return { type: '', token: '' };
    }
}
