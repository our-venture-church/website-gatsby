import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { HERO_TYPES } from '../constants';
import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';

const StyledHero = styled.div`
    background: url('${props => props.backgroundImage}');
    background-position: center;
    background-size: cover;
    border-bottom: 1px solid #fff;
    display: flex;
    height: 70vh;
    margin-bottom: 2rem;

    > a {
        align-items: center;
        border: 0;
        display: flex;
        text-decoration: none;
        width: 100%;
    }
`;

const StyledHeroText = styled.h2`
    margin: auto;
    padding: 0 1rem;

    @media (min-width: 500px) {
        padding: 0 2rem;
    }
`;

const Hero = ({ text, image, link }) => (
    <StyledHero
        backgroundImage={imageUrlFor(buildImageObj(image))
            .width(1200)
            .height(Math.floor((9 / 16) * 1200))
            .fit('crop')
            .auto('format')
            .url()}
    >
        <Link to={link}>
            <StyledHeroText>{text}</StyledHeroText>
        </Link>
    </StyledHero>
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
