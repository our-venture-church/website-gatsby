import React from 'react';
import PropTypes from 'prop-types';

const EmailInput = ({ id, name, value }) => (
    <input
        id={id}
        type="email"
        name={name}
        value={value}
        placeholder="yourname@gmail.com"
        required
    />
);

EmailInput.propTypes = {
    changeHandler: PropTypes.func,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

export default EmailInput;
