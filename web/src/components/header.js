import PropTypes from 'prop-types';
import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import _throttled from 'lodash.throttle';

import {
    CLOSE_NAV,
    OPEN_NAV,
    ENABLE_NAV_DRAWER,
    DISABLE_NAV_DRAWER,
} from '../constants';
import LayoutContext from '../utils/LayoutContext';
import DispatchContext from '../utils/DispatchContext';

import Logo from './logo';
import Hamburger from './Hamburger';
import Nav from './nav';

import colors from '../theme/tokens/colors';

const StyledHeader = styled.header`
    background: ${colors.charcoalBlack};
    border-bottom: ${props => (props.navOpen ? '3px' : '1px')} solid
        ${colors.ventureYellow};
    display: grid;
    grid-template-columns: ${props => (props.navOpen ? '1fr' : 'auto 1fr')};
    grid-template-rows: auto 1fr;
    height: ${props => (props.navOpen ? '100%' : 'auto')};
    left: 0;
    overflow: auto;
    position: ${props => (props.navOpen ? 'fixed' : 'static')};
    top: 0;
    width: 100%;
    z-index: 100;
`;

const StyledLogo = styled(Logo)`
    border: 1px solid red;
`;

const THROTTLE_TIME = 250;

const handleResize = dispatch => {
    if (typeof window !== 'undefined' && window.innerWidth < 1050) {
        dispatch({ type: ENABLE_NAV_DRAWER });
    } else {
        dispatch({ type: DISABLE_NAV_DRAWER });
    }
};

const Header = ({ navigation, pathChanged }) => {
    const dispatch = useContext(DispatchContext);
    const state = useContext(LayoutContext);
    const { navOpen, navDrawer } = state;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            handleResize(dispatch);
            window.addEventListener(
                'resize',
                _throttled(handleResize.bind(this, dispatch), THROTTLE_TIME),
                this
            );
        }
    }, [dispatch]);

    useEffect(() => {
        if (pathChanged && navOpen) {
            dispatch({ type: CLOSE_NAV });
        }
    }, [pathChanged, navOpen, dispatch]);

    const toggleNav = () => {
        if (navDrawer) {
            if (navOpen) {
                dispatch({ type: CLOSE_NAV });
            } else {
                dispatch({ type: OPEN_NAV });
            }
        }
    };

    useEffect(() => {
        if (pathChanged && navOpen) {
            dispatch({ type: CLOSE_NAV });
        }
    }, [navOpen, pathChanged, dispatch]);

    return (
        <StyledHeader navOpen={navOpen}>
            <StyledLogo navDrawer={navDrawer} />
            <Hamburger handleButtonClick={toggleNav} isOpen={navOpen} />
            <Nav items={navigation} />
        </StyledHeader>
    );
};

Header.propTypes = {
    navOpen: PropTypes.bool,
    navDrawer: PropTypes.bool,
    navigation: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
        })
    ),
    pathChanged: PropTypes.bool,
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    navOpen: true,
    navDrawer: true,
    navigation: [],
    pathChanged: false,
    siteTitle: ``,
};

export default Header;
