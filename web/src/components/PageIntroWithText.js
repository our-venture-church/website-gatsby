import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getLayoutTransitionFor } from '../utils/styles';
import colors from '../theme/tokens/colors';

const StyledIntro = styled.div`
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.15) 0%,
        rgba(0, 0, 0, 0) 35%,
        rgba(0, 0, 0, 0) 100%
    );
    border-bottom: 1px solid ${colors.ventureYellow};
    margin-bottom: ${props => (props.noMargin ? '0' : '3rem')};
    padding-bottom: 3rem;
    padding-top: 2rem;
    ${getLayoutTransitionFor('padding')}

    @media (min-width: 500px) {
        ${props => (props.noMargin ? '0' : '4rem')};
        padding-bottom: 4rem;
        padding-top: 3rem;
    }
`;

const StyledTitle = styled.h1`
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 1.3;
    margin-bottom: 1rem;
    text-transform: uppercase;
    margin-left: auto;
    margin-right: auto;
    max-width: 700px;
    padding-left: 1rem;
    padding-right: 1rem;
    ${getLayoutTransitionFor('padding')}
    ${getLayoutTransitionFor('font-size')}

    @media (min-width: 500px) {
        font-size: 1.5rem;
        padding-left: 2rem;
        padding-right: 2rem;
    }
`;

const StyledText = styled.p`
    font-size: 1rem;
    line-height: 1.4;
    margin-bottom: 0;
    margin-left: auto;
    margin-right: auto;
    max-width: 700px;
    padding-left: 1rem;
    padding-right: 1rem;
    ${getLayoutTransitionFor('padding')}
    ${getLayoutTransitionFor('font-size')}

    @media (min-width: 720px) {
    }

    @media (min-width: 500px) {
        font-size: 1.25rem;
        padding-left: 2rem;
        padding-right: 2rem;
    }
`;

const PageIntroWithText = ({ title, children, noMargin }) => (
    <StyledIntro noMargin={noMargin}>
        <StyledTitle>{title}</StyledTitle>
        <StyledText>{children}</StyledText>
    </StyledIntro>
);

PageIntroWithText.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
    noMargin: PropTypes.bool,
};

PageIntroWithText.defaultProps = {
    noMargin: false,
};

export default PageIntroWithText;
