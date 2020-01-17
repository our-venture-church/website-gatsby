import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import colors from '../theme/tokens/colors';
import X from './icons/x';

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

const ReactModalAdapter = ({
    className,
    modalClassName,
    closeModal,
    title,
    children,
    isOpen,
    label,
    ...props
}) => (
    <ReactModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel={label}
        className={modalClassName}
        portalClassName={className}
        {...props}
    >
        <h2>{title}</h2>
        <StyledCloseBtn onClick={closeModal} aria-label="Close dialog">
            <X />
        </StyledCloseBtn>
        {children}
    </ReactModal>
);

const Modal = styled(ReactModalAdapter).attrs({
    overlayClassName: 'overlay',
    modalClassName: 'modal',
})`
    .overlay {
        background-color: rgba(0, 0, 0, 0.75);
        bottom: 0;
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 110;
    }
    .modal {
        background-color: ${colors.charcoalBlack};
        border: none;
        border-bottom: 3px solid ${colors.ventureYellow};
        border-radius: 3px;
        bottom: 0;
        left: 0;
        outline: none;
        overflow: auto;
        padding: 1rem;
        position: absolute;
        right: 0;
        top: 0;

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
            border-bottom: 1px solid ${colors.ventureYellow};
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
    }
`;

Modal.propTypes = {
    isOpen: PropTypes.string,
    closeModal: PropTypes.func,
    label: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.any,
};

export default Modal;
