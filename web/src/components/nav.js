import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
    KEYCODES,
    CLOSE_NAV,
    OPEN_DROPDOWN,
    CLOSE_DROPDOWN,
} from '../constants';
import LayoutContext from '../utils/LayoutContext';
import DispatchContext from '../utils/DispatchContext';

import NavItem from './navItem';

const NavList = styled.ul`
    display: ${props => (props.navDrawer && !props.isOpen ? 'none' : 'grid')};
    grid-auto-flow: ${props => (props.navDrawer ? 'row' : 'column')};
    grid-template-columns: ${props => (props.navDrawer ? '1fr' : 'auto')};
    list-style: none;
    margin: 0 auto;
    position: relative;
`;

const getBottomVal = isOpen => (isOpen ? '0%' : '100%');

const StyledNav = styled.nav`
    align-self: ${props => (props.navDrawer ? 'start' : 'center')};
    justify-self: ${props => (props.navDrawer ? 'unset' : 'end')};
    right: ${props => (props.navDrawer ? getBottomVal(props.isOpen) : 'auto')};
    display: block;
    max-width: ${props => (props.navDrawer ? '100%' : '800px')};
    position: relative;
    right: ${props => (props.navDrawer ? 'auto' : '1rem')};
    transition: 0.15s ease-out right;
    width: 100%;
    z-index: 100;
`;

const HOME_PAGE_NAV_ITEM = {
    text: 'Home',
    href: '/',
};

const Nav = ({ items }) => {
    const dispatch = useContext(DispatchContext);
    const state = useContext(LayoutContext);
    const { currentDropdown, navDrawer, navOpen: isOpen } = state;

    /**
     * Compares the currently opened dropdown with the dropdown being toggled and calls the
     * appropriate action function.
     * @param {string} id identifies which dropdown menu should be toggled
     */
    const toggleDropdown = e => {
        const id = e.currentTarget.dataset.id;
        if (id === currentDropdown) {
            dispatch({
                type: CLOSE_DROPDOWN,
            });
        } else {
            dispatch({
                type: OPEN_DROPDOWN,
                payload: id,
            });
        }
    };

    /**
     * Handles keyUp events from navItems. If the escape key is pressed, it tries to close
     * something.
     * @param {Object} e keyUp event object
     *  @param {Integer} e.keyCode
     * @param {*} openedDropdown
     */
    const handleNavItemKeyUp = (e, openedDropdown) => {
        if (e.keyCode === KEYCODES.ESC && openedDropdown) {
            dispatch({
                type: CLOSE_DROPDOWN,
            });
            e.stopPropagation();
        } else if (e.keyCode === KEYCODES.ESC && isOpen) {
            dispatch({ type: CLOSE_NAV });
            e.stopPropagation();
        }
    };

    return (
        <StyledNav isOpen={isOpen} navDrawer={navDrawer}>
            <NavList isOpen={isOpen} navDrawer={navDrawer}>
                {isOpen && (
                    <NavItem
                        {...HOME_PAGE_NAV_ITEM}
                        handleKeyUp={handleNavItemKeyUp}
                    />
                )}
                {items.map(item => (
                    <NavItem
                        {...item}
                        key={item.href}
                        isOpen={item.href === currentDropdown}
                        handleArrowClick={toggleDropdown}
                        handleKeyUp={handleNavItemKeyUp}
                        stackedNav={navDrawer}
                    />
                ))}
            </NavList>
        </StyledNav>
    );
};

Nav.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
            subLinks: PropTypes.arrayOf(
                PropTypes.shape({
                    text: PropTypes.string.isRequired,
                    href: PropTypes.string.isRequired,
                })
            ),
        })
    ).isRequired,
};

export default Nav;
