import React from 'react';
import { graphql } from 'gatsby';
import ReactPlayer from 'react-player';
import SEO from '../components/seo';
import BlockContent from '../components/block-content';
import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
import { pluralizeString } from '../utils/strings';
import Layout from '../components/layout';
import scripture from '../../../content/schemas/objects/scripture';

export const query = graphql`
    query prayerStationTemplateQuery($id: String!) {
        sanitySeries(id: { eq: $id }) {
            id
            title
            startDate(formatString: "MMM YYYY")
            endDate(formatString: "MMM YYYY")
            _rawDescription
            artwork {
                asset {
                    _id
                }
            }
            seoDescription
        }
        allSanitySermon(filter: { series: { id: { eq: $id } } }) {
            totalCount
            nodes {
                id
                title
                video {
                    url
                }
            }
        }
    }
`;

const generateSeoDescription = ({ title, startDate, numOfSermons }) =>
    `${title} is a sermon series from ${startDate}. It has ${numOfSermons} ${pluralizeString(
        'message',
        numOfSermons
    )} in it.`;

const prayerStationTemplate = props => {
    const { data } = props;
    const series = data && data.sanitySeries;
    const sermons = data && data.allSanitySermon.nodes;

    return (
        <Layout>
            <SEO
                title={`${title}`}
                description={`${title} station on the Venture prayer journey.`}
            />
            <h1>{title}</h1>
            <h2>{year}</h2>

            <div>
                <b>${scripture.reference}</b> ${scripture.text}
                <BlockContent />
            </div>
        </Layout>
    );
};

export default prayerStationTemplate;
