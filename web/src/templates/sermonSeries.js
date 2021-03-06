import React from 'react';
import { graphql } from 'gatsby';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import SEO from '../components/seo';
import BlockContent from '../components/block-content';
import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
import { pluralizeString } from '../utils/strings';
import Layout from '../components/layout';
import DetailPage from '../layouts/DetailPage';
import Grid from '../layouts/Grid';
import { VideoContainer } from '../theme/components';
import { Button, VisuallyHidden } from '../theme/components';

const StyledSeriesSubTitle = styled.h2`
    margin-bottom: 2rem;
    margin-top: 3rem;
`;

const StyledSermonTitle = styled.h3`
    font-size: 1.25rem;
    margin-bottom: 0.25em;
`;

const StyledSermonSpeaker = styled.div`
    font-size: 0.875rem;
    margin-bottom: 0.25em;
`;

const AudioContainer = styled.p`
    margin-top: 0.5rem;
`;

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
        allSanitySermon(
            filter: { series: { id: { eq: $id } } }
            sort: { fields: date, order: DESC }
        ) {
            totalCount
            nodes {
                id
                title
                video {
                    url
                }
                speaker {
                    name
                }
                date(formatString: "M/D/YYYY")
                audio
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
                    series.artwork ? (
                        <img
                            src={imageUrlFor(buildImageObj(series.artwork))
                                .width(800)
                                .height(Math.floor((9 / 16) * 800))
                                .fit('crop')
                                .auto('format')
                                .url()}
                            alt={series.artwork.alt}
                        />
                    ) : null
                }
            >
                <h1>{series.title}</h1>
                {series._rawDescription && (
                    <BlockContent blocks={series._rawDescription} />
                )}
                {sermons.length > 0 && (
                    <React.Fragment>
                        <StyledSeriesSubTitle>
                            Messages in this series
                        </StyledSeriesSubTitle>
                        <Grid>
                            {sermons.map(sermon => (
                                <li key={sermon.id}>
                                    <StyledSermonTitle>
                                        {sermon.title}
                                    </StyledSermonTitle>
                                    <StyledSermonSpeaker>
                                        {sermon.speaker && sermon.speaker.name}{' '}
                                        on {sermon.date}
                                    </StyledSermonSpeaker>
                                    {sermon.video && (
                                        <VideoContainer>
                                            <ReactPlayer
                                                url={sermon.video.url}
                                                height="100%"
                                                width="100%"
                                                config={{
                                                    youtube: {
                                                        playerVars: {
                                                            showinfo: 0,
                                                        },
                                                    },
                                                }}
                                            />
                                        </VideoContainer>
                                    )}
                                    {sermon.audio && (
                                        <AudioContainer>
                                            <Button
                                                as="a"
                                                href={sermon.audio}
                                                inverted={true}
                                            >
                                                Listen to the
                                                <VisuallyHidden>
                                                    {' '}
                                                    {sermon.title}
                                                </VisuallyHidden>{' '}
                                                Podcast
                                            </Button>
                                        </AudioContainer>
                                    )}
                                </li>
                            ))}
                        </Grid>
                    </React.Fragment>
                )}
            </DetailPage>
        </Layout>
    );
};

export default SermonSeriesTemplate;
