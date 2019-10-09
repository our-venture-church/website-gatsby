import { createStore as reduxCreateStore } from 'redux';
import {
    OPEN_NAV,
    CLOSE_NAV,
    OPEN_DROPDOWN,
    CLOSE_DROPDOWN,
    ENABLE_NAV_DRAWER,
    DISABLE_NAV_DRAWER,
} from '../constants';

const reducer = (state, action) => {
    switch (action.type) {
        case OPEN_NAV:
            return {
                ...state,
                navOpen: true,
            };
        case CLOSE_NAV:
            return {
                ...state,
                currentDropdown: null,
                navOpen: false,
            };
        case OPEN_DROPDOWN:
            return {
                ...state,
                currentDropdown: action.payload,
            };
        case CLOSE_DROPDOWN:
            return {
                ...state,
                currentDropdown: null,
            };
        case ENABLE_NAV_DRAWER:
            return {
                ...state,
                navDrawerEnabled: true,
            };
        case DISABLE_NAV_DRAWER:
            return {
                ...state,
                navDrawerEnabled: false,
            };
        default:
            return state;
    }
};

const initialState = {
    currentDropdown: null,
    navDrawerEnabled: true,
    navOpen: false,
};

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
