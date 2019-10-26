import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
import { getLayoutTransitionFor } from '../utils/styles';

const borderWidth = '10px';
const StyledContainer = styled(Link)`
    margin-bottom: 4rem;
    ${getLayoutTransitionFor('margin')}

    @media (min-width: 800px) {
        margin-bottom: 5rem;
    }
`;
const StyledSeriesText = styled.div`
    padding: 0 ${borderWidth};
`;
const StyledSeriesImage = styled.img`
    border: ${borderWidth} solid rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin-bottom: 0.5rem;
`;
const StyledSeriesHeading = styled.h2`
    margin-bottom: 0.5em;
`;

const Series = ({ title, startDate, artwork, endDate, slug }) => (
    <StyledContainer to={`/sermon/series/${slug.current}`}>
        <StyledSeriesImage
            src={imageUrlFor(buildImageObj(artwork))
                .width(800)
                .height(Math.floor((9 / 16) * 800))
                .fit('crop')
                .auto('format')
                .url()}
            alt={artwork.alt}
        />
        <StyledSeriesText>
            <StyledSeriesHeading>{title}</StyledSeriesHeading>
            {startDate} &ndash; {endDate}
        </StyledSeriesText>
    </StyledContainer>
);

Series.propTypes = {
    title: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    artwork: PropTypes.object.isRequired,
};

export default Series;
