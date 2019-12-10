import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSpan = styled.span`
    white-space: nowrap;
`;

const PhoneNumber = ({ children }) => <StyledSpan>{children}</StyledSpan>;

PhoneNumber.propTypes = {
    children: PropTypes.any.isRequired,
};

export default PhoneNumber;
