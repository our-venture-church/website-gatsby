import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/seo';
import Layout from '../components/layout';
import BlockContent from '../components/block-content';
import NarrowPageWrapper from '../layouts/NarrowPageWrapper';
import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
import colors from '../theme/tokens/colors';
import { getDefaultPadding } from '../utils/styles';

export const query = graphql`
    query AnnouncementTemplateQuery($id: String!) {
        announcement: sanityAnnouncement(id: { eq: $id }) {
            title
            image {
                asset {
                    _id
                }
            }
            _rawContent
            updates {
                title
                text
                date(formatString: "D/M/YYYY")
            }
        }
    }
`;

const StyledWrapper = styled.div`
    ${getDefaultPadding()};
`;

const StyledImage = styled.img`
    border-bottom: 1px solid ${colors.ventureYellow};
    display: block;
    margin: 0 0 0.5rem;

    @media (min-width: 800px) {
        border: 5px solid rgba(0, 0, 0, 0.15);
        border-radius: 3px;
        margin: 2rem auto 0.5rem;
        max-width: 800px;
        width: 100%;
    }
`;

const StyledTitle = styled.h1`
    margin: 2rem 0 1rem;
`;

const AnnouncementTemplate = props => {
    const { data } = props;
    const announcement = data && data.announcement;
    const { title, _rawContent, updates, image } = announcement;
    return (
        <Layout>
            <SEO title={title} />
            {image && (
                <StyledImage
                    src={imageUrlFor(buildImageObj(image))
                        .width(800)
                        .height(Math.floor((9 / 16) * 800))
                        .fit('crop')
                        .auto('format')
                        .url()}
                    alt=""
                />
            )}
            <NarrowPageWrapper>
                <StyledWrapper>
                    <StyledTitle>{title}</StyledTitle>
                    {_rawContent && <BlockContent blocks={_rawContent} />}
                    {updates.length > 0 && (
                        <React.Fragment>
                            <h2>Updates:</h2>
                            <ul>
                                {updates.map(update => (
                                    <li>
                                        {update.title} - {update.text}
                                        <br />
                                        {update.date}
                                    </li>
                                ))}
                            </ul>
                        </React.Fragment>
                    )}
                </StyledWrapper>
            </NarrowPageWrapper>
        </Layout>
    );
};

export default AnnouncementTemplate;
