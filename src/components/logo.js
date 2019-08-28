import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const LayoutLink = styled(Link)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
`;

const StyledMark = styled.svg`
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    max-width: 100%;
`;

const StyledText = styled.span`
    grid-row: 1 / 3;
`;

const Logo = () => (
    <h1>
        <LayoutLink to="/">
            <StyledMark viewBox="0 0 352 278">
                <g class="logo-mark">
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
        </LayoutLink>
    </h1>
);

export default Logo;
