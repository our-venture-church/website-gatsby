import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getDefaultPadding } from '../utils/styles';

const StyledLayout = styled.div`
    margin: auto;
    max-width: 800px;

    ${props =>
        props.includeTopPadding &&
        `
            padding-top: 2rem;
        `}
    ${props => props.includeSidePadding && getDefaultPadding()}
`;

const NarrowPageWrapper = ({
    children,
    includeTopPadding,
    includeSidePadding,
}) => {
    return (
        <StyledLayout
            includeTopPadding={includeTopPadding}
            includeSidePadding={includeSidePadding}
        >
            {children}
        </StyledLayout>
    );
};

NarrowPageWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    includeSidePadding: PropTypes.bool,
    includeTopPadding: PropTypes.bool,
};

NarrowPageWrapper.defaultProps = {
    includeSidePadding: false,
    includeTopPadding: false,
};

export default NarrowPageWrapper;
