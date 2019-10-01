import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sizes from '../theme/tokens/sizes';
import colors from '../theme/tokens/colors';

const StyledH1 = styled.button`
    background: transparent;
    border: 0;
    color: ${colors.white};
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 1.45rem 1.0875rem;
    text-align: left;
    text-decoration: none;
`;

const StyledMark = styled.svg`
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    height: ${sizes.logoHeight};
    max-width: 100%;
`;

const StyledText = styled.span`
    grid-row: 1 / 3;
`;

const Logo = ({ handleLogoClick }) => (
    <StyledH1 onClick={handleLogoClick}>
        <StyledMark viewBox="0 0 352 278">
            <g className="logo-mark">
                <polygon
                    fill="#fde164"
                    points="0 0 146.562926 0 248.02867 162.041675 175.536598 278.061337"
                ></polygon>
                <polygon
                    fill="#fff"
                    points="229.896463 0 350.946314 0 290.421389 98.6285717"
                ></polygon>
            </g>
        </StyledMark>
        <StyledText>Venture Church</StyledText>
    </StyledH1>
);

Logo.propTypes = {
    handleLogoClick: PropTypes.func,
    navDrawer: PropTypes.bool,
};

Logo.defaultProps = {
    handleLogoClick: () => {},
    navDrawer: false,
};

export default Logo;
