import React from 'react';
import { graphql } from 'gatsby';
import ReactPlayer from 'react-player';
import SEO from '../components/seo';
import BlockContent from '../components/block-content';
import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
import { pluralizeString } from '../utils/strings';
import Layout from '../components/layout';
import DetailPage from '../layouts/DetailPage';

export const query = graphql`
    query SermonSeriesTemplateQuery($id: String!) {
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

const SermonSeriesTemplate = props => {
    const { data } = props;
    const series = data && data.sanitySeries;
    const sermons = data && data.allSanitySermon.nodes;

    const seoDescription =
        series.seoDescription ||
        generateSeoDescription({
            ...series,
            numOfSermons: sermons.totalCount || 0,
        });

    return (
        <Layout>
            <SEO title={`${series.title}`} description={seoDescription} />
            <DetailPage
                image={
                    <img
                        src={imageUrlFor(buildImageObj(series.artwork))
                            .width(800)
                            .height(Math.floor((9 / 16) * 800))
                            .fit('crop')
                            .auto('format')
                            .url()}
                        alt={series.artwork.alt}
                    />
                }
            >
                <h1>{series.title}</h1>
                {series._rawDescription && (
                    <BlockContent blocks={series._rawDescription} />
                )}
                {sermons && (
                    <ul>
                        {sermons.map(sermon => (
                            <li key={sermon.id}>
                                {sermon.title}
                                <ReactPlayer url={sermon.video.url} />
                            </li>
                        ))}
                    </ul>
                )}
            </DetailPage>
        </Layout>
    );
};

export default SermonSeriesTemplate;
