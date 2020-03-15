import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import LinkAsButton from '../components/LinkAsButton';
import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
import PageIntroWithText from '../components/PageIntroWithText';
import { TagMe } from '../theme/components';
import MediumPageWrapper from '../layouts/MediumPageWrapper';

const StyledHighlightedList = styled.ul`
    margin: 0;
`;

const StyledHighlightedMinistry = styled.li`
    align-items: center;
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 2rem;

    @media (min-width: 800px) {
        grid-gap: 4rem;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 4rem;
    }
`;

const StyledMinistryInfo = styled.div`
    order: 2;
    @media (min-width: 800px) {
        ${props => (props.oddIndex ? `order: 0;` : `order: 1;`)}
    }
`;

const StyledMinistryTitle = styled.h3`
    @media (max-width: 799px) {
        margin-bottom: 0.25em;
    }
    a {
        border: 0;
        text-decoration: none;
    }
`;

const StyledMinistryBlurb = styled.p``;

const StyledMinistryImage = styled.img`
    max-width: 100%;
`;

const StyledOtherMinistries = styled.div`
    background: rgba(0, 0, 0, 0.1);
    padding: 3rem 1rem;

    > * {
        margin-left: auto;
        margin-right: auto;
        max-width: 1200px;
    }

    @media (min-width: 500px) {
        padding: 3rem 2rem;
    }
`;

const StyledOtherMinistriesList = styled.ul`
    list-style: none;
    margin-bottom: 0;

    @media (min-width: 520px) {
        column-count: 2;
        column-gap: 2rem;
    }

    @media (min-width: 900px) {
        column-count: 3;
    }
`;

const WhatWeDoPage = () => {
    const data = useStaticQuery(graphql`
        query WhatWeDoPageQuery {
            sanityWhatWeDoPage {
                title
                seoDescription
                blurb
                highlightedMinistries {
                    ministry {
                        _id
                        name
                        slug {
                            current
                        }
                    }
                    blurb
                    image {
                        asset {
                            _id
                        }
                    }
                }
            }
            allSanityMinistry {
                nodes {
                    slug {
                        current
                    }
                    name
                    _id
                }
            }
        }
    `);

    const {
        title,
        seoDescription,
        blurb,
        highlightedMinistries,
    } = data.sanityWhatWeDoPage;
    const ministries =
        data && data.allSanityMinistry && data.allSanityMinistry.nodes;

    const highlightedMinistryIds = highlightedMinistries.map(
        entry => entry.ministry._id
    );

    return (
        <Layout>
            <SEO title={title} description={seoDescription} />
            <PageIntroWithText title={title}>{blurb}</PageIntroWithText>
            {highlightedMinistries && (
                <MediumPageWrapper includeSidePadding={true}>
                    <h2>
                        <TagMe secondary={true}>Feature Ministries</TagMe>
                    </h2>
                    <StyledHighlightedList>
                        {highlightedMinistries.map(
                            ({ ministry, blurb, image }, index) => (
                                <StyledHighlightedMinistry key={ministry._id}>
                                    <StyledMinistryInfo
                                        oddIndex={index % 2 === 1}
                                    >
                                        <StyledMinistryTitle>
                                            <Link
                                                to={`/${ministry.slug.current}`}
                                            >
                                                {ministry.name}
                                            </Link>
                                        </StyledMinistryTitle>
                                        <StyledMinistryBlurb>
                                            {blurb}
                                        </StyledMinistryBlurb>
                                        <p>
                                            <LinkAsButton
                                                to={`/${ministry.slug.current}`}
                                            >
                                                Learn more about {ministry.name}
                                            </LinkAsButton>
                                        </p>
                                    </StyledMinistryInfo>
                                    <StyledMinistryImage
                                        src={imageUrlFor(buildImageObj(image))
                                            .width(800)
                                            .height(800)
                                            .fit('crop')
                                            .auto('format')
                                            .url()}
                                        alt=""
                                    />
                                </StyledHighlightedMinistry>
                            )
                        )}
                    </StyledHighlightedList>
                </MediumPageWrapper>
            )}
            <StyledOtherMinistries>
                <h2>Other Ministries</h2>
                {ministries && (
                    <StyledOtherMinistriesList>
                        {ministries
                            .filter(
                                ministry =>
                                    !highlightedMinistryIds.includes(
                                        ministry._id
                                    )
                            )
                            .sort((a, b) => {
                                const nameA = a.name.toUpperCase();
                                const nameB = b.name.toUpperCase();
                                if (nameA < nameB) {
                                    return -1;
                                }
                                if (nameA > nameB) {
                                    return 1;
                                }
                                return 0;
                            })
                            .map(({ _id, slug, name }) => (
                                <li key={_id}>
                                    <LinkAsButton
                                        to={`/${slug.current}`}
                                        fullSize={true}
                                        buttonStyle="secondary"
                                    >
                                        {name}
                                    </LinkAsButton>
                                </li>
                            ))}
                    </StyledOtherMinistriesList>
                )}
            </StyledOtherMinistries>
        </Layout>
    );
};

WhatWeDoPage.propTypes = {};

export default WhatWeDoPage;
