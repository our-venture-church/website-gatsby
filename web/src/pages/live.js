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

    return (
        <Layout>
            <SEO title={title} description={seoDescription} />

            <Banner>
                <NarrowPageWrapper includePadding>
                    <LiveStreamTitle>{title}</LiveStreamTitle>
                    <StreamingList>
                        <StreamingListItem>
                            <StreamingLink href={facebookStreamingLink}>
                                <Facebook aria-hidden />
                                <span>Facebook</span>
                            </StreamingLink>
                        </StreamingListItem>
                        <StreamingListItem>
                            <StreamingLink href={youtubeStreamingLink}>
                                <YouTube aria-hidden />
                                <span>YouTube</span>
                            </StreamingLink>
                        </StreamingListItem>
                    </StreamingList>
                </NarrowPageWrapper>
            </Banner>

            <NarrowPageWrapper includePadding>
                <BlockContent blocks={_rawWelcome} />
            </NarrowPageWrapper>
        </Layout>
    );
};

LiveStreamPage.propTypes = {};

export default LiveStreamPage;
