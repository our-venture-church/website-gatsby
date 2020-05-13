import {
    OPEN_NAV,
    CLOSE_NAV,
    OPEN_DROPDOWN,
    CLOSE_DROPDOWN,
    ENABLE_NAV_DRAWER,
    DISABLE_NAV_DRAWER,
} from '../constants';

const initialState = {
    currentDropdown: null,
    navDrawerEnabled: true,
    navOpen: true,
};

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
                navDrawer: true,
            };
        case DISABLE_NAV_DRAWER:
            return {
                ...state,
                navDrawer: false,
            };
        default:
            return state;
    }
};

export { reducer, initialState };
