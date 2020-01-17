import React from 'react';
import PropTypes from 'prop-types';

const EmailInput = ({ id, name, value, changeHandler }) => (
    <input
        id={id}
        type="email"
        name={name}
        value={value}
        placeholder="yourname@gmail.com"
        onChange={changeHandler}
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
