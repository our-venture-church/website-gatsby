import React from 'react';
import styled from 'styled-components';
import colors from '../theme/tokens/colors';

const StyledHamburger = styled.button`
    background: none;
    border: 0;
    font-size: 16px;
    font-size: 1rem;
    cursor: pointer;
    font-weight: normal;
    height: 46px;
    position: absolute;
    right: 0;
    text-decoration: none !important;
    top: 10px;
    transition: 250ms width cubic-bezier(0.22, 0.61, 0.36, 1);
    width: 36px;
    z-index: 3;
    @media (min-width: 1050px) {
        display: none;
    }
    @media (min-width: 25rem) {
        margin-right: 25px;
        margin-right: 1.5625rem;
        width: 46px;
    }
    i {
        color: #fff;
        font-style: normal;
        position: relative;
        position: relative;
        right: 12px;
        top: 22px;
    }
    &:hover i {
        color: #fff;
    }

    i,
    i:before,
    i:after {
        background: #fff;
        content: '';
        display: inline-block;
        height: 2px;
        position: absolute;
        transition: all 250ms cubic-bezier(0.22, 0.61, 0.36, 1);
        width: 20px;
    }
    i:before {
        top: -5px;
    }
    i:after {
        bottom: -5px;
    }
    &:hover i,
    &:hover i:before,
    &:hover i:after {
        background: ${colors.ventureYellow};
    }

    ${({ isOpen }) =>
        isOpen &&
        `
        i {
            background: transparent;
        }
        i:before {
            top: 0;
            transform: rotate(45deg);
        }
        i:after {
            bottom: 0;
            transform: rotate(-45deg);
        }
    `}
`;

const SkipLink = ({ handleButtonClick, isOpen }) => (
    <StyledHamburger
        onClick={handleButtonClick}
        aria-label="Open navigation menu"
        isOpen={isOpen}
    >
        <i></i>
    </StyledHamburger>
);

export default SkipLink;
