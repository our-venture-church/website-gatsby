import React from 'react';
import PropTypes from 'prop-types';

const EmailLink = ({ emailAddress }) => (
    <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
);

EmailLink.propTypes = {
    emailAddress: PropTypes.string.isRequired,
};

export default EmailLink;
