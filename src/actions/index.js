import {
    OPEN_NAV,
    CLOSE_NAV,
    OPEN_DROPDOWN,
    CLOSE_DROPDOWN,
    ENABLE_NAV_DRAWER,
    DISABLE_NAV_DRAWER,
} from '../constants';

/**
 * Opens the navigation.
 */
export const openNav = () => ({ type: OPEN_NAV });

/**
 * Closes the navigation
 */
export const closeNav = () => ({ type: CLOSE_NAV });

/**
 * Opens up the passed in dropdown menu.
 * @param {string} id For the dropdown to open
 */
export const openDropdown = id => ({
    type: OPEN_DROPDOWN,
    payload: id,
});

/**
 * Closes the currenlty opened dropdown.
 */
export const closeDropdown = () => ({
    type: CLOSE_DROPDOWN,
});

export const enableNavDrawer = () => ({
    type: ENABLE_NAV_DRAWER,
});

export const disableNavDrawer = () => ({
    type: DISABLE_NAV_DRAWER,
});
