import React from 'react';
import { graphql } from 'gatsby';
import ReactPlayer from 'react-player';
import SEO from '../components/seo';
import Layout from '../components/layout';
import { VideoContainer } from '../theme/components';

export const query = graphql`
    query SermonTemplateQuery($id: String!) {
        sanitySermon(id: { eq: $id }) {
            id
            title
            video {
                url
            }
            speaker {
                name
            }
            date(formatString: "M/D/YYYY")
        }
    }
`;

const SermonTemplate = props => {
    const { data } = props;
    const sermon = data && data.sanitySermon;

    return (
        <Layout>
            <SEO
                title={`${sermon.title}`}
                description={`Sermon "${sermon.title}" on ${
                    sermon.date
                } by ${sermon.speaker && sermon.speaker.name}`}
            />
            <h1>{sermon.title}</h1>
            <p>
                {sermon.speaker && sermon.speaker.name} on {sermon.date}
            </p>
            {sermon.video && (
                <VideoContainer>
                    <ReactPlayer
                        url={sermon.video.url}
                        height="100%"
                        width="100%"
                        config={{
                            youtube: {
                                playerVars: { showinfo: 0 },
                            },
                        }}
                    />
                </VideoContainer>
            )}
        </Layout>
    );
};

export default SermonTemplate;
