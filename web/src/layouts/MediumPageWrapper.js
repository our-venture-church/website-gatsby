import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getDefaultPadding } from '../utils/styles';

const StyledLayout = styled.div`
    margin: auto;
    max-width: 1200px;

    ${props =>
        (props.includeTopPadding || props.includePadding) &&
        `
            padding-top: 2rem;
        `}
    ${props =>
        (props.includeSidePadding || props.includePadding) &&
        getDefaultPadding()}
`;

const MediumPageWrapper = ({
    children,
    includePadding,
    includeTopPadding,
    includeSidePadding,
}) => {
    return (
        <StyledLayout
            includePadding={includePadding}
            includeTopPadding={includeTopPadding}
            includeSidePadding={includeSidePadding}
        >
            {children}
        </StyledLayout>
    );
};

MediumPageWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    includeSidePadding: PropTypes.bool,
    includeTopPadding: PropTypes.bool,
};

MediumPageWrapper.defaultProps = {
    includeSidePadding: false,
    includeTopPadding: false,
};

export default MediumPageWrapper;
