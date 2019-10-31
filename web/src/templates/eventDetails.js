import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/layout';
import BlockContent from '../components/block-content';
import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';

export const query = graphql`
    query EventDetailsTemplateQuery($id: String!) {
        event: sanityEvent(id: { eq: $id }) {
            title
            link
            allDay
            beginAt(formatString: "MMM D")
            endAt(formatString: "MMM D")
            _rawDescription
            image {
                asset {
                    _id
                }
            }
        }
    }
`;

const EventDetailsTemplate = props => {
    const { data } = props;
    const event = data && data.event;
    return (
        <Layout>
            <SEO title={event.title} description="" />
            <img
                src={imageUrlFor(buildImageObj(event.image))
                    .width(800)
                    .height(Math.floor((9 / 16) * 800))
                    .fit('crop')
                    .auto('format')
                    .url()}
                alt={event.image.alt}
            />
            <h1>{event.title}</h1>
            <ul>
                <li>All Day: {event.allDay}</li>
                <li>Begins At: {event.beginAt}</li>
                <li>Ends At: {event.endAt}</li>
                <li>Link: {event.link}</li>
            </ul>

            {event._rawDescription && (
                <BlockContent blocks={event._rawDescription} />
            )}
        </Layout>
    );
};

export default EventDetailsTemplate;
