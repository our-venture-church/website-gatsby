import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getDefaultPadding } from '../utils/styles';

const StyledLayout = styled.div`
    margin: auto;
    max-width: 800px;

    ${props =>
        (props.includeTopPadding || props.includePadding) &&
        `
            padding-top: 2rem;
        `}
    ${props => (props.includeSidePadding || props.includePadding) && getDefaultPadding()}
`;

const NarrowPageWrapper = ({
    children,
    includeTopPadding,
    includeSidePadding,
    includePadding,
    className,
}) => {
    return (
        <StyledLayout
            className={className}
            includeTopPadding={includeTopPadding}
            includeSidePadding={includeSidePadding}
            includePadding={includePadding}
        >
            {children}
        </StyledLayout>
    );
};

NarrowPageWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    includePadding: PropTypes.bool,
    includeSidePadding: PropTypes.bool,
    includeTopPadding: PropTypes.bool,
};

NarrowPageWrapper.defaultProps = {
    className: '',
    includePadding: false,
    includeSidePadding: false,
    includeTopPadding: false,
};

export default NarrowPageWrapper;
