// @flow

import { ADD_TOKEN, REMOVE_TOKEN, GET_TOKEN } from '../actionTypes';

const initialState = {
    auth_token:  localStorage.getItem('f-panel.token')
}

export function auth(state: any = initialState, action: any) {
    console.log(action, state)
    switch (action.type) {
        case ADD_TOKEN:
            return { ...state, auth_token: action.token };
        case GET_TOKEN:
            return { ...state, auth_token: action.token };
        case REMOVE_TOKEN:
            return { ...state };
        default:
            return state;
    }
}