import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getLayoutTransitionFor } from '../utils/styles';

const StyledIntro = styled.div`
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.15) 0%,
        rgba(0, 0, 0, 0) 35%,
        rgba(0, 0, 0, 0) 100%
    );
    margin-bottom: ${props => (noMargin ? '0' : '3rem')};
    padding-bottom: 3rem;
    padding-top: 2rem;
    ${getLayoutTransitionFor('padding')}

    @media (min-width: 500px) {
        margin-bottom: 4rem;
        padding-bottom: 4rem;
        padding-top: 3rem;
    }
`;

const StyledTitle = styled.h1`
    font-size: 14px;
    line-height: 1.3;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    margin-left: auto;
    margin-right: auto;
    max-width: 700px;
    padding-left: 1rem;
    padding-right: 1rem;
    ${getLayoutTransitionFor('padding')}

    @media (min-width: 500px) {
        padding-left: 2rem;
        padding-right: 2rem;
    }
`;

const StyledTag = styled.p`
    font-size: 38px;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 0;
    margin-left: auto;
    margin-right: auto;
    max-width: 700px;
    padding-left: 1rem;
    padding-right: 1rem;
    ${getLayoutTransitionFor('padding')}
    ${getLayoutTransitionFor('font-size')}

    @media (min-width: 720px) {
        font-size: 75px;
        line-height: 1.05;
        letter-spacing: -2px;
    }

    @media (min-width: 500px) {
        padding-left: 2rem;
        padding-right: 2rem;
    }
`;

const PageIntro = ({ title, tag, noMargin }) => (
    <StyledIntro noMargin={noMargin}>
        <StyledTitle>{title}</StyledTitle>
        <StyledTag>{tag}</StyledTag>
    </StyledIntro>
);

PageIntro.propTypes = {
    title: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    noMargin: PropTypes.bool,
};

PageIntro.defaultProps = {
    noMargin: false,
};

export default PageIntro;
