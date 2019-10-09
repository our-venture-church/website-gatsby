import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../theme/tokens/colors';

const StyledExpando = styled.svg`
    color: ${colors.cloudGray};
    display: inline-block;
    height: 1.2em;
    width: 1.2em;
`;

const Expando = ({ direction }) => (
    <StyledExpando
        viewBox="0 0 10 10"
        fill="none"
        stroke="currentColor"
        stroke-width="1px"
    >
        <title>Expandable</title>
        <polyline
            points={
                direction === 'DOWN'
                    ? '0,2.5 5,7.5 10,2.5'
                    : '0,7.5 5,2.5 10,7.5'
            }
        />
    </StyledExpando>
);

Expando.propTypes = {
    direction: PropTypes.oneOf(['UP', 'DOWN']).isRequired,
};

export default Expando;
