import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Logo from './logo';
import Nav from './nav';

import colors from '../theme/tokens/colors';

const StyledHeader = styled.header`
    border-bottom: 1px solid ${colors.ventureYellow};
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 1.45rem;
    padding: 1.45rem 1.0875rem;
`;

const StyledLogo = styled(Logo)`
    border: 1px solid red;
`;

const StyledNav = styled(Nav)`
    background: green;
`;

const Header = ({ siteTitle, navigation }) => (
    <StyledHeader>
        <StyledLogo />
        <Nav items={navigation} />
    </StyledHeader>
);

Header.propTypes = {
    navigation: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
        })
    ),
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    navigation: [],
    siteTitle: ``,
};

export default Header;
