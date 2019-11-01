import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLayout = styled.div`
    margin: auto;
    max-width: 800px;
`;

const NarrowPageWrapper = ({ children }) => {
    return <StyledLayout>{children}</StyledLayout>;
};

NarrowPageWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default NarrowPageWrapper;
