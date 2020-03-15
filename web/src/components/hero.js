import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { HERO_TYPES } from '../constants';
import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
import colors from '../theme/tokens/colors';
import { VisuallyHidden } from '../theme/components';

const StyledHero = styled.div`
    background: url('${props => props.backgroundImage}');
    background-position: center;
    background-size: cover;
    border-bottom: 1px solid ${colors.ventureYellow};
    display: flex;
    height: 65vh;
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
    margin: auto 1rem;
    max-width: 620px;

    @media (min-width: 500px) {
        padding: 0 2rem;
    }

    span {
        background: ${colors.ventureYellow};
        color: ${colors.charcoalBlack};
        box-decoration-break: clone;
        box-shadow: 0.5rem 0 0 ${colors.ventureYellow},
            -0.5rem 0 0 ${colors.ventureYellow};
        line-height: 1.6;
        padding-bottom: 4px;
        padding-top: 4px;
    }
`;

const Hero = ({ text, image, link, altText }) => (
    <StyledHero
        backgroundImage={imageUrlFor(buildImageObj(image))
            .width(1200)
            .height(Math.floor((9 / 16) * 1200))
            .fit('crop')
            .auto('format')
            .url()}
    >
        <Link to={link}>
            {text ? (
                <StyledHeroText>
                    <span>{text}</span>
                </StyledHeroText>
            ) : (
                <VisuallyHidden>{altText}</VisuallyHidden>
            )}
        </Link>
    </StyledHero>
);

Hero.propTypes = {
    type: PropTypes.oneOf([
        HERO_TYPES.CURRENT_SERIES,
        HERO_TYPES.SERVICE_TIMES,
        HERO_TYPES.CUSTOM,
    ]).isRequired,
    text: PropTypes.string,
    image: PropTypes.object.isRequired,
    link: PropTypes.string.isRequired,
    altText: PropTypes.string,
};

Hero.defaultProps = {
    text: '',
    altText: '',
};

export default Hero;
