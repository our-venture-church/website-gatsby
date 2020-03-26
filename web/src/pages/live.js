import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BlockContent from '../components/block-content';
import colors from '../theme/tokens/colors';
import NarrowPageWrapper from '../layouts/NarrowPageWrapper';
import { Banner } from '../theme/components';
import YouTube from '../components/icons/youtube';
import Facebook from '../components/icons/facebook';

const LiveStreamTitle = styled.h1`
    font-size: 24px;
    margin-bottom: 2rem;
    text-align: center;
`;

const StreamingList = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding-bottom: 1.25rem;
`;

const StreamingListItem = styled.li`
    flex: 1;
`;

const StreamingLink = styled.a`
    align-items: center;
    border: none;
    color: ${colors.charcoalBlack};
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-decoration: none;

    &:hover,
    &:focus {
        color: ${colors.charcoalBlack};
        text-decoration: underline;
    }

    svg {
        font-size: 48px;
    }
`;

const EmbedContainer = styled.div`
    padding-top: 56.25%;
    position: relative;

    iframe,
    object,
    embed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;

const LiveStreamPage = props => {
    const data = useStaticQuery(graphql`
        query LiveStreamPageQuery {
            sanityLiveStreamPage {
                pageIntro {
                    title
                    seoDescription
                }
                _rawWelcome
                facebookStreamingLink
                youtubeStreamingLink
            }
        }
    `);

    const {
        pageIntro,
        _rawWelcome,
        facebookStreamingLink,
        youtubeStreamingLink,
    } = data.sanityLiveStreamPage;
    const { title, seoDescription } = pageIntro;

    // const iframeSrc =
    //     'https://yourstreamlive.com/embed/iframe/live/6655?&autostart=no&image_url=https://cdn.sanity.io/images/3deuluc8/prod/1f39db72bb0d5a9001a5a7385d182b22a35a93ef-5760x3840.jpg?rect=0,300,5760,3240&w=1200&h=675&fit=crop&auto=format&responsive=yes&aspect_ratio=16:9';
    const iframeAttrs = {
        allow: 'autoplay',
        src:
            'https://yourstreamlive.com/embed/iframe/live/6655?&responsive=yes&aspect_ratio=16:9',
    };

    return (
        <Layout>
            <SEO title={title} description={seoDescription} />

            <Banner>
                <NarrowPageWrapper includePadding>
                    <LiveStreamTitle>{title}</LiveStreamTitle>
                </NarrowPageWrapper>
                <EmbedContainer>
                    <iframe
                        frameborder="0"
                        marginheight="0"
                        marginwidth="0"
                        scrolling="auto"
                        allowfullscreen="yes"
                        allowtransparency="yes"
                        name="live"
                        id="live"
                        {...iframeAttrs}
                    ></iframe>
                </EmbedContainer>
            </Banner>

            <NarrowPageWrapper includePadding>
                <BlockContent blocks={_rawWelcome} />
            </NarrowPageWrapper>
        </Layout>
    );
};

LiveStreamPage.propTypes = {};

export default LiveStreamPage;
