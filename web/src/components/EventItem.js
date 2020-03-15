import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
import colors from '../theme/tokens/colors';

const StyledEvent = styled.div`
    > a {
        border: none;
        display: block;
        text-decoration: none;

        &:hover img {
            border-color: ${colors.ventureYellow};
        }
    }

    img {
        border: 5px solid rgba(0, 0, 0, 0.15);
        border-radius: 3px;
        margin-bottom: 0.25rem;
    }
`;

const EventItem = ({ title, beginAt, endAt, image, slug }) => {
    const endDate = endAt && beginAt !== endAt ? ` - ${endAt}` : '';

    return (
        <StyledEvent>
            <Link to={`/event/${slug.current}`} aria-label={`${title} event`}>
                <img
                    src={imageUrlFor(buildImageObj(image))
                        .width(1200)
                        .height(Math.floor((9 / 16) * 1200))
                        .fit('crop')
                        .auto('format')
                        .url()}
                    alt=""
                />
                <b>{title}</b>
                <br />
                {beginAt}
                {endDate}
            </Link>
        </StyledEvent>
    );
};

EventItem.propTypes = {
    title: PropTypes.string.isRequired,
    beginAt: PropTypes.string.isRequired,
    endAt: PropTypes.string,
    image: PropTypes.object.isRequired,
    slug: PropTypes.shape({
        current: PropTypes.string.isRequired,
    }).isRequired,
};

EventItem.defaultProps = {
    endAt: null,
};

export default EventItem;
