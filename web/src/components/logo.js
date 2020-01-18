import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import sizes from '../theme/tokens/sizes';
import colors from '../theme/tokens/colors';
import { getLayoutTransitionFor } from '../utils/styles';

const StyledLogoLink = styled(Link)`
    border: 0;
    color: ${colors.white};
    display: block;
    padding: 1.45rem 1rem;
    text-align: left;
    text-decoration: none;
    ${getLayoutTransitionFor('padding')}

    @media (min-width: 500px) {
        padding-left: 2rem;
        padding-right: 2rem;
    }
`;

const StyledMark = styled.svg`
    display: block;
    height: ${sizes.logoHeight};
    max-width: 100%;
`;

const Logo = ({ handleLogoClick }) => (
    <StyledLogoLink to="/" aria-label="Venture Church Home page">
        <StyledMark viewBox="0 0 2412.42 661.56" fill="#fff" focusable="false">
            <title>Venture Church Logo</title>
            <g className="logo-mark">
                <path fill="#ffe534" d="M0 0l422 662 176-276L352 0H0z" />
                <path d="M547 0l149 233L844 0H547z" />
            </g>
            <path
                className="logo-text"
                d="M1075 258l52-133h51l-84 208h-39l-84-208h51zM1352 125v42h-103v43h93v39h-93v43h106v41h-153V125zM1542 125h46v208h-46l-99-130v130h-46V125h43l102 134zM1727 166v167h-46V166h-59v-41h164v41zM1875 280q12 14 31 14t31-14q12-15 12-40V125h46v117q0 45-25 69t-64 24q-39 0-64-24t-25-69V125h47v115q0 25 11 40zM2412 125v42h-106v43h93v39h-93v43h106v41h-153V125zM2172 259q40-15 40-65 0-36-21-52t-69-17h-79v208h47V165h34q23 0 32 6t9 24q0 16-9 24t-32 8h-30l30 43 44 63h57zM985 505c0-42 32-76 77-76 27 0 44 9 57 23l-20 23a54 54 0 00-38-16c-24 0-42 20-42 45v1c0 25 17 46 42 46 17 0 27-7 39-17l20 20a75 75 0 01-60 26c-43 0-75-33-75-75zM1159 432h32v57h59v-57h32v146h-32v-59h-59v59h-32zM1328 515v-83h32v82c0 24 12 36 31 36s32-12 32-35v-83h32v82c0 44-25 66-64 66s-63-22-63-65zM1500 432h67c19 0 33 5 43 14 8 9 12 20 12 34 0 24-12 39-31 46l36 52h-38l-31-47h-26v47h-32zm65 71c16 0 25-9 25-21v-1c0-13-10-20-26-20h-32v42zM1657 505c0-42 32-76 77-76 27 0 44 9 57 23l-20 23a54 54 0 00-38-16c-24 0-42 20-42 45v1c0 25 17 46 42 46 17 0 27-7 39-17l20 20a75 75 0 01-60 26c-43 0-75-33-75-75zM1831 432h32v57h59v-57h32v146h-32v-59h-59v59h-32z"
            />
        </StyledMark>
    </StyledLogoLink>
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
