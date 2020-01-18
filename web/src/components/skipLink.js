import React from 'react';
import styled from 'styled-components';
import colors from '../theme/tokens/colors';

const StyledSkipLink = styled.a`
    align-items: center;
    display: flex;
    height: 1px;
    justify-content: center;
    left: -9999px;
    overflow: hidden;
    position: absolute;
    text-align: center;
    text-decoration: underline;
    width: 1px;

    &&& {
        color: ${colors.charcoalBlack};
    }

    &:focus,
    &:active {
        background: #fff;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
        height: auto;
        left: auto;
        outline: 0;
        overflow: visible;
        padding: 0.5rem;
        width: 100%;
        z-index: 1000;

        > span {
            outline: auto;
        }
    }

    > span {
        white-space: nowrap;
    }
`;

const SkipLink = () => (
    <StyledSkipLink href="#main-content">
        <span>Skip to main content</span>
    </StyledSkipLink>
);

export default SkipLink;
