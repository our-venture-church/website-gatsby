import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BlockContent from '../components/block-content';
import PageIntroWithText from '../components/PageIntroWithText';
import LinkAsButton from '../components/LinkAsButton';
import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';

const StyledSection = styled.div`
    background: ${props => (props.odd ? 'rgba(0,0,0,0.2)' : 'transparent')};
    display: flex;
    min-height: 98vh;

    > div:first-child {
        flex: 1 0;
        margin: auto;
        max-width: 550px;
        padding: 40px;
    }

    h2,
    p {
        margin-bottom: 0.5rem;
    }
`;

const StaffPhotos = styled.div`
    img {
        border: 5px solid rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        max-width: 220px;
    }

    img:nth-child(1):hover {
        border-color: red;
    }

    img:nth-child(2):hover {
        border-color: orange;
    }

    img:nth-child(3):hover {
        border-color: yellow;
    }

    img:nth-child(4):hover {
        border-color: green;
    }

    img:nth-child(5):hover {
        border-color: blue;
    }
`;

const WhoWeAreSection = ({ text, title, link, index, staffPhotos }) => {
    let extraContent = null;

    if (title === 'Our Staff') {
        extraContent = (
            <StaffPhotos>
                {staffPhotos.map(staffPhoto => {
                    return (
                        <img
                            src={imageUrlFor(buildImageObj(staffPhoto))
                                .width(300)
                                .height(300)
                                .fit('crop')
                                .auto('format')
                                .url()}
                            alt=""
                        />
                    );
                })}
            </StaffPhotos>
        );
    }

    return (
        <StyledSection odd={index % 2 === 1}>
            <div>
                <h2>{title}</h2>
                <p>{text}</p>
                {index === 1 ? (
                    <Link to={link.href}>{link.text}</Link>
                ) : (
                    <LinkAsButton to={link.href}>{link.text}</LinkAsButton>
                )}
            </div>
            {extraContent}
        </StyledSection>
    );
};

const WhoWeArePage = props => {
    const data = useStaticQuery(graphql`
        query WhoWeArePageQuery {
            sanityWhoWeArePage {
                title
                _rawBlurb
                seoDescription
                contentBlock {
                    text
                    title
                    link {
                        href
                        text
                        type
                    }
                }
                staffPhotos {
                    asset {
                        _id
                    }
                }
            }
        }
    `);

    const {
        title,
        seoDescription,
        _rawBlurb,
        contentBlock,
        staffPhotos,
    } = data.sanityWhoWeArePage;

    return (
        <Layout>
            <SEO title={title} description={seoDescription} />

            <PageIntroWithText title={title}>
                <BlockContent blocks={_rawBlurb} />
            </PageIntroWithText>
            {contentBlock.map((block, index) => (
                <WhoWeAreSection
                    {...block}
                    index={index}
                    staffPhotos={staffPhotos}
                />
            ))}
        </Layout>
    );
};

WhoWeArePage.propTypes = {};

export default WhoWeArePage;
