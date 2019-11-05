import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BlockContent from '../components/block-content';
import styled from 'styled-components';
import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
import { getDefaultPadding, buttonStyles } from '../utils/styles';
import colors from '../theme/tokens/colors';

const getMobileBackgroundImageStyles = url => `
    background-image: url('${url}')
`;

const getDesktopBackgroundImageStyles = url => `
    @media (min-width: 820px) {
        background-image: url('${url}')
    }
`;

const StyledIntroBlock = styled.div`
    ${getDefaultPadding()}
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-bottom: 1px solid ${colors.ventureYellow};
    padding-bottom: 4rem;
    padding-top: 3rem;

    ${props =>
        props.mobileImage && getMobileBackgroundImageStyles(props.mobileImage)}

    ${props =>
        props.desktopImage &&
        getDesktopBackgroundImageStyles(props.desktopImage)}
`;

const StyledLink = styled.a`
    ${buttonStyles()};
`;

const StyledLinkInverted = styled.a`
    ${buttonStyles({ inverted: true })};
`;

const StyledGiveBlock = styled.div`
    ${getDefaultPadding()}
    padding-bottom: 4rem;
    padding-top: 3rem;

    ${props => props.even && `background-color: rgba(0,0,0,0.25);`}

    @media (min-width: 820px) {
        align-items: center;
        display: ${props => (props.last ? 'block' : 'grid')};
        grid-gap: 4rem;
        grid-template-columns: 1fr 1fr;
    }

    > div {
        order: ${props => (props.even ? '2' : '1')};
    }

    h2 {
        font-size: 1.5rem;
    }

    > blockquote {
        font-family: Georgia, serif;
        font-size: 39px;
        font-style: italic;
        line-height: 1.1;
        order: ${props => (props.even ? '1' : '2')};
        text-align: center;

        @media (max-width: 819px) {
            padding-top: 4rem;
        }
    }
`;

const GiveBlock = ({
    linkText,
    title,
    quote,
    text,
    giveLink,
    _key,
    isLast,
    count,
}) => {
    return (
        <StyledGiveBlock key={_key} last={isLast} even={count % 2 === 0}>
            <div>
                <h2>{title}</h2>
                <BlockContent blocks={text} />
                {linkText && (
                    <StyledLink href={giveLink}>{linkText}</StyledLink>
                )}
            </div>
            {quote && <blockquote>"{quote}"</blockquote>}
        </StyledGiveBlock>
    );
};

const GivePage = props => {
    const data = useStaticQuery(graphql`
        query GivePageQuery {
            sanityGivePage {
                title
                intro
                giveLink
                seoDescription
                _rawContentBlock
                bannerImage {
                    desktopSize {
                        asset {
                            _id
                        }
                    }
                    mobileSize {
                        asset {
                            _id
                        }
                    }
                }
            }
        }
    `);

    const {
        title,
        intro,
        giveLink,
        seoDescription,
        _rawContentBlock,
        bannerImage,
    } = data.sanityGivePage;

    const { desktopSize, mobileSize } = bannerImage;

    const bgImages = {};
    let desktopImage;
    let mobileImage;

    if (desktopSize) {
        desktopImage = imageUrlFor(buildImageObj(desktopSize))
            .width(1200)
            .height(Math.floor((9 / 16) * 1200))
            .fit('crop')
            .auto('format')
            .url();
    }

    if (mobileSize) {
        mobileImage = imageUrlFor(buildImageObj(mobileSize))
            .width(1200)
            .height(Math.floor((9 / 16) * 1200))
            .fit('crop')
            .auto('format')
            .url();
    }

    if (mobileImage) {
        bgImages.mobileImage = mobileImage;
        if (desktopImage) {
            bgImages.desktopImage = desktopImage;
        }
    } else if (desktopImage) {
        bgImages.mobileImage = desktopImage;
    }

    return (
        <Layout>
            <SEO title={title} description={seoDescription} />
            <StyledIntroBlock {...bgImages}>
                <h1>{title}</h1>
                <p>{intro}</p>
                <StyledLinkInverted href={giveLink}>
                    Give Now
                </StyledLinkInverted>
            </StyledIntroBlock>
            {_rawContentBlock.map((block, index) => (
                <GiveBlock
                    {...block}
                    giveLink={giveLink}
                    count={index + 1}
                    isLast={index + 1 === _rawContentBlock.length}
                />
            ))}
        </Layout>
    );
};

GivePage.propTypes = {};

export default GivePage;
