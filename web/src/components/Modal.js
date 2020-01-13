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
    position: absolute;
    right: 30px;
    top: 30px;
`;

const Modal = ({ closeModal, title, children, isOpen, label }) => (
    <ReactModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel={label}
        style={{
            overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                zIndex: 10,
            },
            content: {
                backgroundColor: colors.charcoalBlack,
                border: 'none',
                padding: '30px',
            },
        }}
    >
        <h2>{title}</h2>
        <StyledCloseBtn onClick={closeModal} aria-label="Close dialog">
            <X />
        </StyledCloseBtn>
        {children}
    </ReactModal>
);

Modal.propTypes = {
    isOpen: PropTypes.string,
    closeModal: PropTypes.func,
    label: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.any,
};

export default Modal;
