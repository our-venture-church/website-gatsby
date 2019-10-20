import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { HERO_TYPES } from '../constants';
import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';

const Hero = ({ type, text, image, link }) => (
    <div className="hero">
        <Link to={link}>
            <h2>
                {type} {text}
            </h2>
            <img
                src={imageUrlFor(buildImageObj(image))
                    .width(1200)
                    .height(Math.floor((9 / 16) * 1200))
                    .fit('crop')
                    .auto('format')
                    .url()}
                alt={image.alt}
            />
        </Link>
    </div>
);

Hero.propTypes = {
    type: PropTypes.oneOf([
        HERO_TYPES.CURRENT_SERIES,
        HERO_TYPES.SERVICE_TIMES,
        HERO_TYPES.CUSTOM,
    ]).isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    link: PropTypes.string.isRequired,
};

export default Hero;
