import React from 'react';
import PropTypes from 'prop-types';

const EmailLink = ({ emailAddress, children, ...rest }) => (
    <a href={`mailto:${emailAddress}`} {...rest}>
        {children ? children : emailAddress}
    </a>
);

EmailLink.propTypes = {
    emailAddress: PropTypes.string.isRequired,
};

export default EmailLink;
