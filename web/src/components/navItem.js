import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../theme/tokens/colors';

import Expando from './icons/expando';

const NavList = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    height: ${props => (!props.isOpen ? '0' : 'auto')};
    list-style: none;
    margin: 0 auto;
`;

const StyledNavItem = styled.li`
    margin: 0;
    position: relative;

    ul a {
        border: none;
        font-size: 0.875rem;
        padding-left: 2.5rem;
    }
`;
const ExpandoButton = styled.button`
    background: none;
    border: 0;
    padding: 0.8em 1.3em 0.5em;
    position: absolute;
    right: 0;
    top: 0;
`;

const NavLink = styled(Link)`
    border-bottom: 0;
    border-top: ${props => (props.stackedNav ? '1px solid #595959' : 'none')};
    display: block;
    padding: ${props => (props.stackedNav ? `0.66em 3.75rem 0.66em 1rem` : `.5em 0.25em`)};
    text-align: ${props => (props.stackedNav ? `left` : `center`)};
    text-decoration: none;

    ${props =>
        !props.stackedNav &&
        `
            border: 1px solid transparent;
            margin: 0 5px;
            border-radius: 3px;
        `}

    &:hover,
    &:focus {
        border-color: currentColor;
        color: ${colors.ventureYellow};
        text-decoration: ${props => (props.stackedNav ? 'underline' : 'none')};
    }

    @media (min-width: 500px) {
        ${props => props.stackedNav && 'padding-left: 2rem;'}
    }
`;

const buildSubNav = ({ text, href }, stackedNav) => (
    <StyledNavItem key={href}>
        <NavLink to={href} stackedNav={stackedNav}>
            {text}
        </NavLink>
    </StyledNavItem>
);

const NavItem = ({ handleArrowClick, handleKeyUp, href, isOpen, stackedNav, subLinks, text }) => {
    return (
        <StyledNavItem
            open={isOpen}
            onKeyUp={e => {
                handleKeyUp(e, isOpen);
            }}
        >
            <NavLink to={href} stackedNav={stackedNav}>
                {text}
            </NavLink>
            {subLinks && (
                <React.Fragment>
                    {stackedNav && (
                        <ExpandoButton
                            className="expando"
                            onClick={handleArrowClick}
                            data-id={href}
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        >
                            <Expando direction={isOpen ? 'UP' : 'DOWN'} />
                        </ExpandoButton>
                    )}
                    {isOpen && (
                        <NavList isOpen={isOpen}>
                            {subLinks.map(item => buildSubNav(item, stackedNav))}
                        </NavList>
                    )}
                </React.Fragment>
            )}
        </StyledNavItem>
    );
};

NavItem.propTypes = {
    handleExpandoClick: PropTypes.func,
    handleKeyUp: PropTypes.func,
    href: PropTypes.string.isRequired,
    isOpen: PropTypes.bool,
    stackedNav: PropTypes.bool,
    subLinks: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
        })
    ),
    text: PropTypes.string.isRequired,
};

NavItem.defaultProps = {
    handleExpandoClick: () => {},
    handleKeyUp: () => {},
    isOpen: true,
    openDropdown: null,
    stackedNav: true,
};

export default NavItem;
