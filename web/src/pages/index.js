import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql, Link, navigate } from 'gatsby';
import styled from 'styled-components';

import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';

import LinkAsButton from '../components/LinkAsButton';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import { getDefaultPadding } from '../utils/styles';
import colors from '../theme/tokens/colors';
import EventItem from '../components/EventItem';

const StyledBelowFold = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    ${getDefaultPadding()};

    @media (min-width: 900px) {
        grid-template-columns: 65% 1fr;
        grid-template-row: repeat(3, 1fr);
    }
`;

const StyledWelcomeTitle = styled.h1``;

const StyledWelcomeMessage = styled.p`
    margin-bottom: 3rem;
    @media (min-width: 900px) {
        grid-column: 1;
        grid-row: 2;
    }
`;

const StyledCurrentSeries = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    margin: 0 -1rem 3rem;
    position: relative;

    @media (min-width: 500px) {
        margin: 0 -2rem 3rem;
    }

    @media (min-width: 650px) {
        grid-gap: 0 2rem;
        grid-template-columns: 60% 1fr;
        grid-template-rows: repeat(3, auto);
        margin: 0 0 3rem;
    }

    @media (min-width: 900px) {
        grid-column: 2;
        grid-row: 2;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        padding-left: 2rem;
    }
`;

const StyledSeriesLabel = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 0.5em;
    padding: 0 1rem;

    @media (min-width: 500px) {
        padding: 0 2rem;
    }

    @media (min-width: 650px) {
        font-size: 1rem;
        font-weight: normal;
        grid-column: 2;
        padding: 0;
    }

    @media (min-width: 900px) {
        display: none;
    }
`;

const StyledSeriesTitle = styled.p`
    display: none;

    @media (min-width: 650px) {
        display: block;
        font-size: 1.25rem;
        font-weight: bold;
        grid-column: 2;
    }

    @media (min-width: 900px) {
        display: none;
    }
`;

const StyledSeriesLink = styled(Link)`
    background: ${colors.mintBlue};
    border: 1px solid ${colors.mintBlue};
    color: ${colors.charcoalBlack};
    display: inline-block;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5em 1em;
    text-decoration: none;
    text-transform: uppercase;

    bottom: 10px;
    position: absolute;
    right: 1rem;

    @media (min-width: 500px) {
        right: 2rem;
    }

    @media (min-width: 650px) {
        border-radius: 3px;
        bottom: auto;
        grid-column: 2;
        grid-row: 3;
        right: auto;
    }

    @media (min-width: 900px) {
        border-radius: 0;
        font-size: 0.75rem;
        grid-column: 1;
        grid-row: 1;
        right: 1rem;
        top: -1.5rem;
    }

    &:hover,
    &:focus {
        background: ${colors.charcoalBlack};
        color: ${colors.mintBlue};
    }
`;

const StyledSeriesImage = styled.img`
    max-width: 100%;

    @media (min-width: 650px) {
        grid-row: 1 / 4;
    }

    @media (min-width: 900px) {
        grid-column: 1;
        grid-row: 1;
    }
`;

const StyledEvents = styled.div`
    background: rgba(0, 0, 0, 0.1);
    margin: 0 -1rem;
    padding: 2rem 1rem;

    > a {
        display: block;
    }

    @media (min-width: 500px) {
        margin: 0 -2rem;
        padding: 3rem 2rem;
        text-align: center;

        > h2 {
            margin-bottom: 3rem;
        }

        a {
            display: inline-block;
            margin: auto;
        }
    }

    @media (min-width: 900px) {
        grid-column: 1 / 3;
        grid-row: 3;
    }
`;

const StyledEventsList = styled.ul`
    display: grid;
    grid-gap: 2rem 3rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    margin: 0 0 2rem;
    text-align: left;

    li {
        list-style: none;
    }
`;

const StyledLinkAsButton = styled(LinkAsButton)`
    margin: auto;
`;

const StreamingLive = styled.div`
    background: ${colors.ventureYellow};
    color: ${colors.charcoalBlack};
    cursor: pointer;
`;

const StreamingLiveContent = styled.div`
    ${getDefaultPadding};
    align-items: center;
    border-bottom: 1px solid ${colors.ventureYellow};
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;

    p {
        margin: 0;
    }

    a {
        margin-left: 1.5em;
        white-space: nowrap;
    }
`;

const useMountEffect = func => useEffect(func, []);
const checkDateIsSunday = () => {
    const today = new Date();
    if (today.getDay() === 0) {
        return true;
    }

    return false;
};

const IndexPage = () => {
    const [state, setState] = useState({ promoLiveStream: false });

    const data = useStaticQuery(graphql`
        query HomepageQuery {
            allSanitySeries(
                limit: 1
                sort: { fields: startDate, order: DESC }
                filter: { hide: { ne: true } }
            ) {
                nodes {
                    title
                    slug {
                        current
                    }
                    artwork {
                        asset {
                            _id
                        }
                    }
                }
            }
            sanityHomePage {
                welcome {
                    title
                    message
                }
                customHero {
                    text
                    image {
                        asset {
                            _id
                        }
                    }
                    link
                }
                liveStream
                events {
                    title
                    beginAt(formatString: "MMM D")
                    endAt(formatString: "MMM D")
                    image {
                        asset {
                            _id
                        }
                    }
                    id
                    slug {
                        current
                    }
                }
            }
        }
    `);

    const {
        heroType,
        welcome,
        customHero,
        events,
        liveStream,
    } = data.sanityHomePage;
    const { nodes } = data.allSanitySeries;
    const currentSeries = nodes[0];

    useMountEffect(() => {
        if (!state.promoLiveStream && checkDateIsSunday) {
            setState({ ...state, promoLiveStream: true });
        }
    });

    return (
        <Layout>
            <SEO title="Home" />
            <StreamingLive onClick={() => navigate('/live')}>
                {state.promoLiveStream && (
                    <StreamingLiveContent>
                        <p>{liveStream}</p>
                        <LinkAsButton to="/live" buttonStyle="alternative">
                            Join us now!
                        </LinkAsButton>
                    </StreamingLiveContent>
                )}
            </StreamingLive>
            <Hero type={heroType} {...customHero} />
            <StyledBelowFold>
                <StyledWelcomeTitle>{welcome.title}</StyledWelcomeTitle>
                <StyledWelcomeMessage>{welcome.message}</StyledWelcomeMessage>
                <StyledCurrentSeries>
                    <StyledSeriesLabel>Current Series</StyledSeriesLabel>
                    <StyledSeriesTitle>{currentSeries.title}</StyledSeriesTitle>
                    <StyledSeriesImage
                        src={imageUrlFor(buildImageObj(currentSeries.artwork))
                            .width(700)
                            .height(Math.floor((9 / 16) * 700))
                            .fit('crop')
                            .auto('format')
                            .url()}
                        alt={currentSeries.title}
                    />
                    <StyledSeriesLink
                        to={`/sermon/series/${currentSeries.slug.current}`}
                    >
                        Watch now
                    </StyledSeriesLink>
                </StyledCurrentSeries>
                <StyledEvents>
                    <h2>Upcoming Events</h2>
                    <StyledEventsList>
                        {events.map(event => (
                            <li key={event.id}>
                                <EventItem {...event} />
                            </li>
                        ))}
                    </StyledEventsList>
                    <StyledLinkAsButton to="/events">
                        See all events
                    </StyledLinkAsButton>
                </StyledEvents>
            </StyledBelowFold>
        </Layout>
    );
};

export default IndexPage;
