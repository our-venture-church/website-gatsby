import React from 'react';
import styled from 'styled-components';
import colors from '../theme/tokens/colors';

const StyledHamburger = styled.button`
    background: none;
    border: 0;
    font-size: 1rem;
    cursor: pointer;
    font-weight: normal;
    height: 46px;
    text-decoration: none !important;
    transition: 250ms width cubic-bezier(0.22, 0.61, 0.36, 1);
    width: 46px;
    z-index: 3;

    margin-right: 6px;
    position: absolute;
    right: 0;
    top: 27px;

    @media (min-width: 1050px) {
        display: none;
    }
    @media (min-width: 500px) {
        margin-right: 22px;
    }
    i {
        color: #fff;
        font-style: normal;
        margin: 0 10px;
        position: relative;
        position: relative;
        right: 0;
        top: 22px;
        width: calc(100% - 20px);
    }
    &:hover i {
        color: #fff;
    }

    i,
    i:before,
    i:after {
        background: #fff;
        content: '';
        display: block;
        height: 2px;
        position: absolute;
        transition: all 250ms cubic-bezier(0.22, 0.61, 0.36, 1);
    }
    i:before {
        right: 0;
        top: -7px;
        width: 100%;
    }
    i:after {
        bottom: -7px;
        right: 0;
        width: 100%;
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
            background: rgba(255, 255, 255, 0) !important;
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

const Hamburger = ({ handleButtonClick, isOpen }) => (
    <StyledHamburger
        onClick={handleButtonClick}
        aria-label="Open navigation menu"
        isOpen={isOpen}
    >
        <i></i>
    </StyledHamburger>
);

export default Hamburger;
