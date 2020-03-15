import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NarrowPageWrapper from './NarrowPageWrapper';
import colors from '../theme/tokens/colors';

const StyledImage = styled.div`
    margin: 0 auto 0.5rem;
    max-width: 800px;

    img {
        border-bottom: 1px solid ${colors.ventureYellow};
        display: block;
        margin: 0 0 0.5rem;

        @media (min-width: 800px) {
            border: 5px solid rgba(0, 0, 0, 0.15);
            border-radius: 3px;
            margin: 2rem auto 0.5rem;
            max-width: 800px;
            width: 100%;
        }
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
