import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

const Modal = ({ closeModal, title, children, isOpen, label }) => (
    <ReactModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel={label}
    >
        <h2>{title}</h2>
        <button onClick={closeModal}>Close</button>
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
