import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/seo';
import Layout from '../components/layout';
import BlockContent from '../components/block-content';
import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
import NarrowPageWrapper from '../layouts/NarrowPageWrapper';

export const query = graphql`
    query EventDetailsTemplateQuery($id: String!) {
        event: sanityEvent(id: { eq: $id }) {
            title
            link
            allDay
            beginAt(formatString: "dddd, MMMM Do, YYYY")
            endAt(formatString: "dddd, MMMM Do, YYYY")
            _rawDescription
            image {
                asset {
                    _id
                }
            }
        }
    }
`;

const StyledEventTitle = styled.h1`
    margin-bottom: 0.25rem;
`;

const StyledDate = styled.div`
    margin-bottom: 2rem;
`;

const getDateText = ({ allDay, beginAt, endAt }) => {
    if (beginAt === endAt || !endAt) {
        return beginAt;
    } else {
        return `${beginAt} - ${endAt}`;
    }
};

const EventDetailsTemplate = props => {
    const { data } = props;
    const event = data && data.event;
    const {
        title,
        image,
        allDay,
        beginAt,
        endAt,
        _rawDescription,
        link,
    } = event;
    return (
        <Layout>
            <SEO title={title} description="" />
            <NarrowPageWrapper>
                <img
                    src={imageUrlFor(buildImageObj(image))
                        .width(800)
                        .height(Math.floor((9 / 16) * 800))
                        .fit('crop')
                        .auto('format')
                        .url()}
                    alt={image.alt}
                />
                <StyledEventTitle>{title}</StyledEventTitle>
                <StyledDate>
                    {getDateText({ allDay, beginAt, endAt })}
                </StyledDate>

                {_rawDescription && <BlockContent blocks={_rawDescription} />}
                {link && (
                    <p>
                        For more information, visit <a href={link}>{link}</a>.
                    </p>
                )}
            </NarrowPageWrapper>
        </Layout>
    );
};

export default EventDetailsTemplate;
