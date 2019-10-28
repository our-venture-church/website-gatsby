import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { KEYCODES } from '../constants';
import { openDropdown, closeDropdown, closeNav } from '../actions';

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
    right: ${props => (props.navDrawer ? getBottomVal(props.isOpen) : 'auto')};
    display: block;
    position: relative;
    transition: 0.15s ease-out right;
    width: 100%;
    z-index: 100;
`;

const HOME_PAGE_NAV_ITEM = {
    text: 'Home',
    href: '/',
};

class Nav extends Component {
    constructor(props) {
        super(props);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.handleNavItemKeyUp = this.handleNavItemKeyUp.bind(this);
    }

    /**
     * Compares the currently opened dropdown with the dropdown being toggled and calls the
     * appropriate action function.
     * @param {string} id identifies which dropdown menu should be toggled
     */
    toggleDropdown(e) {
        const id = e.currentTarget.dataset.id;
        const { currentDropdown, openDropdown, closeDropdown } = this.props;
        if (id === currentDropdown) {
            closeDropdown();
        } else {
            openDropdown(id);
        }
    }

    /**
     * Handles keyUp events from navItems. If the escape key is pressed, it tries to close
     * something.
     * @param {Object} e keyUp event object
     *  @param {Integer} e.keyCode
     * @param {*} openedDropdown
     */
    handleNavItemKeyUp(e, openedDropdown) {
        const { closeDropdown, closeNav, isOpen } = this.props;
        if (e.keyCode === KEYCODES.ESC && openedDropdown) {
            closeDropdown();
            e.stopPropagation();
        } else if (e.keyCode === KEYCODES.ESC && isOpen) {
            closeNav();
            e.stopPropagation();
        }
    }

    render() {
        const { items, isOpen, currentDropdown, navDrawer } = this.props;
        return (
            <StyledNav isOpen={isOpen} navDrawer={navDrawer}>
                <NavList isOpen={isOpen} navDrawer={navDrawer}>
                    {isOpen && (
                        <NavItem
                            {...HOME_PAGE_NAV_ITEM}
                            handleKeyUp={this.handleNavItemKeyUp}
                        />
                    )}
                    {items.map(item => (
                        <NavItem
                            {...item}
                            key={item.href}
                            isOpen={item.href === currentDropdown}
                            handleArrowClick={this.toggleDropdown}
                            handleKeyUp={this.handleNavItemKeyUp}
                            stackedNav={navDrawer}
                        />
                    ))}
                </NavList>
            </StyledNav>
        );
    }
}

Nav.propTypes = {
    closeDropdown: PropTypes.func,
    isOpen: PropTypes.bool,
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
    navDrawer: PropTypes.bool,
    openDropdown: PropTypes.func,
};

Nav.defaultProps = {
    isOpen: true,
    navDrawer: false,
    openDropdown: null,
};

const mapStateToProps = state => ({
    currentDropdown: state.currentDropdown,
});

const mapDispatchToProps = {
    openDropdown,
    closeDropdown,
    closeNav,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav);
