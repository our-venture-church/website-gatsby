import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';
import colors from '../theme/tokens/colors';

const linkBg = props => {
    switch (props.buttonStyle) {
        case 'alternative':
            return colors.white;
        default:
            return colors.charcoalBlack;
    }
};

const linkColor = props => {
    switch (props.buttonStyle) {
        case 'secondary':
            return colors.mintBlue;
        case 'alternative':
            return colors.charcoalBlack;
        default:
            return colors.ventureYellow;
    }
};

const hoverBg = props => {
    switch (props.buttonStyle) {
        case 'secondary':
            return colors.mintBlue;
        default:
            return colors.ventureYellow;
    }
};

const hoverBorderColor = props => {
    switch (props.buttonStyle) {
        case 'secondary':
            return colors.mintBlue;
        case 'alternative':
            return colors.charcoalBlack;
        default:
            return colors.ventureYellow;
    }
};

const hoverColor = props => {
    switch (props.buttonStyle) {
        case 'alternative':
            return colors.white;
        default:
            return colors.charcoalBlack;
    }
};

const StyledLink = styled(GatsbyLink)`
    background: ${props => linkBg(props)};
    border: 1px solid currentColor;
    border-radius: 3px;
    color: ${props => linkColor(props)};
    display: ${props => (props.fullSize ? 'block' : 'inline-block')};
    padding: 0.5em 0.75em;
    text-align: center;
    text-decoration: none;

    &:hover {
        background-color: ${props => hoverBg(props)};
        border-color: ${props => hoverBorderColor(props)};
        color: ${props => hoverColor(props)};
    }
`;

const LinkAsButton = ({ to, children, fullSize, buttonStyle, className }) => (
    <StyledLink
        to={to}
        fullSize={fullSize}
        buttonStyle={buttonStyle}
        className={className}
    >
        {children}
    </StyledLink>
);

LinkAsButton.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    to: PropTypes.string.isRequired,
    fullSize: PropTypes.bool,
    buttonStyle: PropTypes.string,
};

LinkAsButton.defaultProps = {
    className: '',
    fullSize: false,
    buttonStyle: '',
};

export default LinkAsButton;
