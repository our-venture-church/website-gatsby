import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: 3rem;
    margin-left: 0;

    @media (min-width: 500px) {
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    }

    > li {
        list-style: none;
    }
`;

const Grid = ({ children, config }) => {
    return <StyledGrid {...config}>{children}</StyledGrid>;
};

Grid.propTypes = {
    children: PropTypes.node.isRequired,
    config: PropTypes.shape({
        gridGap: PropTypes.string,
        gridMinWidth: PropTypes.string,
    }),
};

export default Grid;
