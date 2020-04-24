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

const StyledHeading = styled.h1`
    font-size: calc(20px + 46 * ((100vw - 320px) / 680));
    text-align: center;
    text-transform: uppercase;

    @media (min-width: 550px) {
        font-size: 40px;
    }
`;

const Hope = styled.span`
    display: block;
    font-size: 4em;
    font-weight: bold;
    text-shadow: 0.05em 0 0 ${colors.ventureYellow};
`;

const StartsHere = styled.span`
    background: ${colors.ventureYellow};
    color: ${colors.charcoalBlack};
    display: inline-block;
    font-size: 0.75em;
    letter-spacing: 0.1em;
    padding: 0.1em 1.75em;
`;

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
    return (
        <Layout>
            {/* <SEO title={title} description={seoDescription} /> */}

            <StyledHeading>
                <Hope>Hope</Hope> <StartsHere>starts here</StartsHere>
            </StyledHeading>

            <p>
                While COVID-19 has fundamentally changed everyone's day-to-day
                lives. We have been ordered to stay home, businesses have closed
                and our healthcare system is being overwhelmed. While we, as a
                church, can't meet in person, our purpose of being mission,
                community and generosity does not just pause. We continue to
                push on and to spread hope. We're doing a number of things to
                help you get through these difficult times. Find out about them
                here.
            </p>
        </Layout>
    );
};

LiveStreamPage.propTypes = {};

export default LiveStreamPage;
