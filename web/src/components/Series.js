import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
import { getLayoutTransitionFor } from '../utils/styles';
import colors from '../theme/tokens/colors';

const borderWidth = '10px';
const StyledContainer = styled(Link)`
    border: 0;
    border-color: rgba(0, 0, 0, 0.25);
    display: block;
    text-decoration: none;
    ${getLayoutTransitionFor('margin')}
    ${getLayoutTransitionFor('color')}

    @media (min-width: 688px) {
        border-color: rgba(0, 0, 0, 0.1);
        margin-bottom: 3rem;
    }

    &:hover,
    &:focus {
        border-color: ${colors.ventureYellow};
    }
`;
const StyledSeriesText = styled.div`
    font-size: 16px;
    padding: 0 1rem;
    ${getLayoutTransitionFor('padding')}

    @media (min-width: 500px) {
        padding: 0 2rem;
    }

    @media (min-width: 688px) {
        padding: 0 ${borderWidth};
    }
`;
const StyledSeriesImage = styled.img`
    border-style: solid;
    border-color: inherit;
    border-width: 1px 0;
    margin-bottom: 0.5rem;
    ${getLayoutTransitionFor('border')}

    @media (min-width: 688px) {
        border-width: ${borderWidth};
        border-radius: 3px;
    }
`;
const StyledSeriesHeading = styled.h2`
    font-size: 18px;
    margin-bottom: 0.2em;
`;

const getDateString = (startDate, endDate) => {
    return startDate === endDate ? startDate : `${startDate} – ${endDate}`;
};

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
            {getDateString(startDate, endDate)}
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
