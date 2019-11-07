import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NarrowPageWrapper from './NarrowPageWrapper';
import colors from '../theme/tokens/colors';

const StyledImage = styled.div`
    border-bottom: 1px solid ${colors.ventureYellow};
    margin: 0 auto 0.5rem;
    max-width: 800px;

    img {
        margin-bottom: 0;
    }
`;

const DetailPage = ({ image, children }) => {
    return (
        <React.Fragment>
            <StyledImage>{image}</StyledImage>
            <NarrowPageWrapper
                includeTopPadding={true}
                includeSidePadding={true}
            >
                {children}
            </NarrowPageWrapper>
        </React.Fragment>
    );
};

DetailPage.propTypes = {
    children: PropTypes.node.isRequired,
};

DetailPage.defaultProps = {
    includeSidePadding: false,
    includeTopPadding: false,
};

export default DetailPage;
