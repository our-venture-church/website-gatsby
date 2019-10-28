import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
import { getLayoutTransitionFor } from '../utils/styles';

const StyledContainer = styled.div`
    margin-bottom: 4rem;
    ${getLayoutTransitionFor('margin')}

    @media (min-width: 800px) {
        margin-bottom: 5rem;
    }
`;
const StyledCampusImage = styled.img`
    border: 10px solid rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin-bottom: 0.5rem;
`;
const StyledCampusDetails = styled.div`
    ${getLayoutTransitionFor('padding')}

    @media (min-width: 800px) {
        padding: 0 50px;
    }
`;
const StyledCampusHeading = styled.h2`
    margin-bottom: 0.5em;
`;

const Campus = ({ title, serviceTimes, image, location }) => (
    <StyledContainer>
        <StyledCampusImage
            src={imageUrlFor(buildImageObj(image))
                .width(800)
                .height(Math.floor((9 / 16) * 800))
                .fit('crop')
                .auto('format')
                .url()}
            alt={image.alt}
        />
        <StyledCampusDetails>
            <StyledCampusHeading>{title}</StyledCampusHeading>
            {location && (
                <p>
                    {location.address}
                    <br />
                    <a
                        href={`https://www.google.com/maps/search/?api=1&query=${location.location.lat},${location.location.lng}`}
                    >
                        Get Directions
                    </a>
                </p>
            )}
            <p>
                <b>Service Times:</b>
                <br />
                {serviceTimes}
            </p>
        </StyledCampusDetails>
    </StyledContainer>
);

Campus.propTypes = {
    title: PropTypes.string.isRequired,
    serviceTimes: PropTypes.string.isRequired,
};

export default Campus;
