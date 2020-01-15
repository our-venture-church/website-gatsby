import React from 'react';
import PropTypes from 'prop-types';
import ReactPhoneNumberInput from 'react-phone-number-input/input';

const PhoneInput = ({ changeHandler, id, name, value, ...props }) => {
    const callChangeHandler = phoneNumber => {
        changeHandler({
            target: {
                name,
                value: phoneNumber,
            },
        });
    };

    return (
        <ReactPhoneNumberInput
            id={id}
            name={name}
            value={value}
            onChange={callChangeHandler}
            placeholder="(###) ###-####"
            country="US"
            {...props}
        />
    );
};

PhoneInput.propTypes = {
    changeHandler: PropTypes.func,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

export default PhoneInput;
