import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NavList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    list-style: none;
    margin: 0 auto;
`;

const NavItem = styled.li`
    margin: 0;
`;

const NavLink = styled(Link)`
    display: block;
`;

const buildSubNav = ({ text, href }) => (
    <li>
        <Link to={href}>{text}</Link>
    </li>
);

const getNavItem = ({ text, href, subLinks }) => {
    return (
        <NavItem>
            <NavLink to={href}>
                {text}
                {subLinks && <ul>{subLinks.map(item => buildSubNav(item))}</ul>}
            </NavLink>
        </NavItem>
    );
};

const Nav = ({ items }) => (
    <nav role="navigation">
        <NavList>{items.map(item => getNavItem(item))}</NavList>
    </nav>
);

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
