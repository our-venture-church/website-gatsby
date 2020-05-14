import React from 'react';
import MuiModal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import styled from 'styled-components';
import colors from '../theme/tokens/colors';
import X from './icons/x';

const StyledModal = styled(MuiModal)`
    border: none;
    outline: none;

    > div {
        outline: none;
    }
`;

const StyledCloseBtn = styled.button`
    background: none;
    border: 0;
    color: ${colors.white};
    cursor: pointer;
    padding-top: 4px;
    position: absolute;
    right: 1rem;
    top: 1rem;

    &:hover,
    &:focus {
        color: ${colors.ventureYellow};
    }

    @media (min-width: 500px) {
        right: 2rem;
        top: 2rem;
    }
`;

const Flex = styled.div`
    align-content: center;
    display: flex;
    height: 100%;
    justify-content: center;
`;

const ModalContent = styled.div`
    background-color: ${colors.charcoalBlack};
    border: none;
    border-bottom: 3px solid ${colors.ventureYellow};
    border-radius: 3px;
    margin: auto;
    outline: none;
    overflow: auto;
    padding: 1rem;
    position: relative;
    ${props =>
        props.fullScreen &&
        `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        top: 0;
    `}
    ${props =>
        props.maxWidth &&
        `
        max-width: ${props.maxWidth};
    `}

    @media (min-width: 500px) {
        padding: 2rem;
    }

    @media (min-width: 800px) {
        border-radius: 0;
        bottom: 40px;
        margin: auto;
        max-width: 600px;
        top: 40px;
    }

    > h2 {
        margin-bottom: 0;
        margin-left: -1rem;
        margin-right: -1rem;
        padding-bottom: 1.45rem;
        padding-left: 1rem;
        padding-right: 1rem;

        @media (min-width: 500px) {
            margin-left: -2rem;
            margin-right: -2rem;
            padding-left: 2rem;
            padding-right: 2rem;
        }
    }
`;

const Modal = ({ children, isOpen, closeModal, title, ...rest }) => (
    <Fade in={isOpen}>
        <StyledModal open={true} onClose={closeModal}>
            <Flex>
                <ModalContent {...rest}>
                    {title && <h2>{title}</h2>}
                    <StyledCloseBtn
                        onClick={closeModal}
                        aria-label="Close dialog"
                    >
                        <X />
                    </StyledCloseBtn>
                    {children}
                </ModalContent>
            </Flex>
        </StyledModal>
    </Fade>
);

export default Modal;
