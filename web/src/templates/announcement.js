import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/seo';
import Layout from '../components/layout';
import BlockContent from '../components/block-content';
import NarrowPageWrapper from '../layouts/NarrowPageWrapper';
import { getDefaultPadding } from '../utils/styles';

export const query = graphql`
    query AnnouncementTemplateQuery($id: String!) {
        announcement: sanityAnnouncement(id: { eq: $id }) {
            title
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

const StyledTitle = styled.h1`
    margin: 2rem 0 1rem;
`;

const AnnouncementTemplate = props => {
    const { data } = props;
    const announcement = data && data.announcement;
    const { title, _rawContent, updates } = announcement;
    return (
        <Layout>
            <SEO title={title} />
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
