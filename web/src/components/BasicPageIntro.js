import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getLayoutTransitionFor } from '../utils/styles';
import colors from '../theme/tokens/colors';

const StyledTitle = styled.h1`
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.15) 0%,
        rgba(0, 0, 0, 0) 35%,
        rgba(0, 0, 0, 0) 100%
    );
    border-bottom: 1px solid ${colors.ventureYellow};
    font-size: 14px;
    line-height: 1.3;
    text-transform: uppercase;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    padding: 1rem;
    ${getLayoutTransitionFor('margin')}
    ${getLayoutTransitionFor('padding')}

    @media (min-width: 500px) {
        margin-bottom: 2rem;
        padding: 2rem;
    }
`;

const BasicPageIntro = ({ title }) => <StyledTitle>{title}</StyledTitle>;

BasicPageIntro.propTypes = {
    title: PropTypes.string.isRequired,
};

export default BasicPageIntro;
