import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';
import colors from '../theme/tokens/colors';

const StyledLink = styled(GatsbyLink)`
    background: ${colors.charcoalBlack};
    border: 1px solid currentColor;
    border-radius: 3px;
    color: ${colors.ventureYellow};
    display: ${props => (props.fullSize ? 'block' : 'inline-block')};
    padding: 0.5em 0.75em;
    text-align: center;
    text-decoration: none;

    &:hover,
    &:focus {
        background-color: ${colors.ventureYellow};
        border-color: ${colors.ventureYellow};
        color: ${colors.charcoalBlack};
    }
`;

const LinkAsButton = ({ to, children, fullSize }) => (
    <StyledLink to={to} fullSize={fullSize}>
        {children}
    </StyledLink>
);

LinkAsButton.propTypes = {
    children: PropTypes.any.isRequired,
    to: PropTypes.string.isRequired,
    fullSize: PropTypes.bool,
};

LinkAsButton.defaultProps = {
    fullSize: false,
};

export default LinkAsButton;
