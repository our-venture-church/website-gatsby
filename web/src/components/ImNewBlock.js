import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import BlockContent from './block-content';
import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
import colors from '../theme/tokens/colors';

const StyledBlock = styled.div`
    background: url('${props => props.backgroundImage}');
    padding: 4rem;
`;

const StyledContent = styled.div`
    background: rgb(52, 51, 51, 0.9);
    display: inline-block;
    max-width: 600px;
    padding: 40px;
    position: relative;
`;

const StyledTag = styled.h2`
    background: ${colors.ventureYellow};
    color: ${colors.charcoalBlack};
    display: inline-block;
    font-size: 1.25rem;
    padding: 0.5em 1em;
    position: absolute;
    text-transform: uppercase;
    top: -34px;
`;

const StyledLink = styled(Link)`
    text-transform: uppercase;
`;

const ImNewBlock = ({ title, text, link, image, key }) => (
    <StyledBlock
        backgroundImage={
            image &&
            imageUrlFor(buildImageObj(image))
                .width(1200)
                .height(Math.floor((9 / 16) * 1200))
                .fit('crop')
                .auto('format')
                .url()
        }
        key={key}
    >
        <StyledContent>
            <StyledTag>{title}</StyledTag>
            <BlockContent blocks={text} />
            {link && <StyledLink to={link.linkUrl}>{link.linkText}</StyledLink>}
        </StyledContent>
    </StyledBlock>
);

ImNewBlock.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.object.isRequired,
    link: PropTypes.object,
    image: PropTypes.object.isRequired,
    key: PropTypes.string.isRequired,
};

export default ImNewBlock;
