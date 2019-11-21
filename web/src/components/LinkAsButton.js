import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';
import colors from '../theme/tokens/colors';

const StyledLink = styled(GatsbyLink)`
    background: ${colors.charcoalBlack};
    border: 1px solid currentColor;
    border-radius: 3px;
    color: ${props => (props.secondary ? colors.mintBlue : colors.ventureYellow)};
    display: ${props => (props.fullSize ? 'block' : 'inline-block')};
    padding: 0.5em 0.75em;
    text-align: center;
    text-decoration: none;

    &:hover,
    &:focus {
        background-color: ${props => (props.secondary ? colors.mintBlue : colors.ventureYellow)};
        border-color: ${props => (props.secondary ? colors.mintBlue : colors.ventureYellow)};
        color: ${colors.charcoalBlack};
    }
`;

const LinkAsButton = ({ to, children, fullSize, secondary, className }) => (
    <StyledLink to={to} fullSize={fullSize} secondary={secondary} className={className}>
        {children}
    </StyledLink>
);

LinkAsButton.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    to: PropTypes.string.isRequired,
    fullSize: PropTypes.bool,
    secondary: PropTypes.bool,
};

LinkAsButton.defaultProps = {
    className: '',
    fullSize: false,
    secondary: false,
};

export default LinkAsButton;
