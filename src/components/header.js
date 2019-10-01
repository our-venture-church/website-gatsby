import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import _throttled from 'lodash.throttle';

import {
    closeNav,
    openNav,
    enableNavDrawer,
    disableNavDrawer,
} from '../actions';

import Logo from './logo';
import Nav from './nav';

import colors from '../theme/tokens/colors';

const StyledHeader = styled.header`
    background: ${colors.charcoalBlack};
    border-bottom: ${props => (props.isOpen ? '3px' : '1px')} solid
        ${colors.ventureYellow};
    display: grid;
    grid-template-columns: ${props => (props.isOpen ? '1fr' : 'auto 1fr')};
    grid-template-rows: auto 1fr;
    height: 100%;
    left: 0;
    margin-bottom: 1.45rem;
    overflow: auto;
    position: ${props => (props.isOpen ? 'fixed' : 'static')};
    top: 0;
    width: 100%;
    z-index: 100;
`;

const StyledLogo = styled(Logo)`
    border: 1px solid red;
`;

const THROTTLE_TIME = 250;

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.throttled = false;

        if (typeof window !== 'undefined') {
            window.addEventListener(
                'resize',
                _throttled(this.handleResize, THROTTLE_TIME),
                this
            );
        }
    }

    toggleNav() {
        if (this.props.navDrawer) {
            if (this.props.isOpen) {
                this.props.closeNav();
            } else {
                this.props.openNav();
            }
        }
    }

    handleResize() {
        if (typeof window !== 'undefined' && window.innerWidth < 1050) {
            this.props.enableNavDrawer();
        } else {
            this.props.disableNavDrawer();
        }
    }

    componentWillMount() {
        if (typeof window !== 'undefined' && window.innerWidth < 800) {
            this.props.enableNavDrawer();
        } else {
            this.props.disableNavDrawer();
        }
    }

    render() {
        const { isOpen, navDrawer, navigation } = this.props;
        return (
            <StyledHeader isOpen={isOpen}>
                <StyledLogo
                    handleLogoClick={this.toggleNav}
                    navDrawer={navDrawer}
                />
                <Nav items={navigation} isOpen={isOpen} navDrawer={navDrawer} />
            </StyledHeader>
        );
    }
}

Header.propTypes = {
    isOpen: PropTypes.bool,
    navDrawer: PropTypes.bool,
    navigation: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
        })
    ),
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    isOpen: true,
    navDrawer: true,
    navigation: [],
    siteTitle: ``,
};

const mapStateToProps = state => ({
    isOpen: state.navOpen,
    navDrawer: state.navDrawerEnabled,
});

const mapDispatchToProps = {
    closeNav,
    openNav,
    enableNavDrawer,
    disableNavDrawer,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
