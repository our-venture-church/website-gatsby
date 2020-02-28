import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';

import BlockContent from '../components/block-content';
import SEO from '../components/seo';
import Layout from '../components/layout';
import NarrowPageWrapper from '../layouts/NarrowPageWrapper';
import SocialLink from '../components/SocialLink';
import ArrowLeft from '../components/icons/arrowLeft';
import colors from '../theme/tokens/colors';

const DetailLayout = styled.div`
    display: grid;

    @media (min-width: 750px) {
        grid-template-columns: 1fr 285px;
        grid-gap: 1rem 2rem;
    }
`;

const Breadcrumb = styled(Link)`
    align-items: center;
    border: 0;
    display: inline-flex;
    margin-bottom: 1rem;
    text-decoration: none;

    @media (min-width: 750px) {
        grid-column: span 2;
    }

    svg {
        background: rgba(0, 0, 0, 0.35);
        border-radius: 50%;
        display: inline-block;
        height: 2em;
        margin-right: 0.5em;
        padding: 0.5em;
        width: 2em;
    }
`;

const HeroImage = styled.img`
    margin-bottom: 0.5rem;
`;

const HeadingGroup = styled.div`
    display: flex;

    h1 {
        font-size: 1.62671rem;
        margin-bottom: 0.25em;
    }

    h2 {
        font-size: 1.38316rem;
        font-weight: normal;
        margin-bottom: 1rem;
    }

    @media (min-width: 750px) {
        display: block;
        h1 {
        }
    }
`;

const HeadingText = styled.div`
    flex: 1;
`;

const ContactInfo = styled.ul`
    list-style: none;
    margin: 0;

    > li {
        display: inline-block;
        font-size: 1.35rem;
        margin-bottom: 1rem;
        margin-left: 0.5em;

        @media (min-width: 750px) {
            margin-left: 0;
            margin-right: 0.5em;
        }
    }
`;

const Content = styled.div`
    @media (min-width: 750px) {
        grid-column: span 2;
    }
`;

const StyledStaffImagePlaceholder = styled.div`
    background: ${colors.cinderGray};
    line-height: 1;
    margin-bottom: 0.25rem;
    position: relative;

    &:before {
        color: ${colors.charcoalBlack};
        content: 'Photo coming soon';
        text-align: center;
        display: block;
        top: 50%;
        position: absolute;
        width: 100%;
        margin-top: -0.5em;
        line-height: 1;
    }

    &:after {
        content: '';
        display: block;
        padding-bottom: 100%;
    }
`;

export const query = graphql`
    query PersonDetailsTemplateQuery($id: String!) {
        person: sanityPerson(id: { eq: $id }) {
            id
            name
            title
            honorific
            image {
                asset {
                    _id
                }
            }
            _rawBio
            email
            socialLinks {
                url
                type
            }
        }
    }
`;

const PersonDetailsTemplate = props => {
    const { data } = props;
    const { honorific, name, title, image, _rawBio, email, socialLinks } =
        data && data.person;
    const displayName = honorific ? `${honorific} ${name}` : name;
    return (
        <Layout>
            <SEO
                title={`${displayName} - ${title}`}
                description={`${displayName} serves as ${title} for Venture Church.`}
            />
            <NarrowPageWrapper
                includeTopPadding={true}
                includeSidePadding={true}
            >
                <DetailLayout>
                    <Breadcrumb to="/staff">
                        <ArrowLeft aria-hidden="true" />
                        View all staff
                    </Breadcrumb>
                    {image ? (
                        <HeroImage
                            src={imageUrlFor(buildImageObj(image))
                                .width(1200)
                                .height(1200)
                                .fit('crop')
                                .auto('format')
                                .url()}
                            alt={displayName}
                        />
                    ) : (
                        <StyledStaffImagePlaceholder></StyledStaffImagePlaceholder>
                    )}
                    <HeadingGroup>
                        <HeadingText>
                            <h1>{displayName}</h1>
                            <h2>{title}</h2>
                        </HeadingText>
                        {(email || socialLinks) && (
                            <ContactInfo>
                                {email && (
                                    <li>
                                        <SocialLink
                                            text={`Email ${displayName}`}
                                            title="email"
                                            url={`mailto:${email}`}
                                        />
                                    </li>
                                )}
                                {socialLinks.map(socialLink => {
                                    return (
                                        <li>
                                            <SocialLink
                                                title={socialLink.type}
                                                url={socialLink.url}
                                                text={socialLink.url}
                                            />
                                        </li>
                                    );
                                })}
                            </ContactInfo>
                        )}
                    </HeadingGroup>
                    <Content>
                        <BlockContent blocks={_rawBio} />
                    </Content>
                </DetailLayout>
            </NarrowPageWrapper>
        </Layout>
    );
};

export default PersonDetailsTemplate;
