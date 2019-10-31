import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';

import LinkAsButton from '../components/LinkAsButton';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import { getDefaultPadding } from '../utils/styles';
import colors from '../theme/tokens/colors';

const getEventItem = ({ title, beginAt: date, link, id, image, slug }) => {
    const linkTo = link || `/event/${slug.current}`;
    return (
        <li key={id}>
            <Link to={linkTo} aria-label={`${title} event`}>
                <img
                    src={imageUrlFor(buildImageObj(image))
                        .width(1200)
                        .height(Math.floor((9 / 16) * 1200))
                        .fit('crop')
                        .auto('format')
                        .url()}
                    alt=""
                />
                <b>{title}</b>
                <br />
                {date}
            </Link>
        </li>
    );
};

const StyledBelowFold = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 3rem;
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
    background: ${colors.ventureYellow};
    border: 1px solid ${colors.ventureYellow};
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
        color: ${colors.ventureYellow};
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

    @media (min-width: 900px) {
        grid-column: 1 / 3;
        grid-row: 3;
    }
`;

const StyledEventsList = styled.ul`
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    margin: 0;

    li {
        list-style: none;
    }
`;

const StyledLinkAsButton = styled(LinkAsButton)`
    margin: auto;
`;

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query HomepageQuery {
            allSanitySeries(
                limit: 1
                sort: { fields: startDate, order: DESC }
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
            allSanityEvent(sort: { fields: beginAt }) {
                nodes {
                    title
                    link
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
            }
        }
    `);

    const { heroType, welcome, customHero } = data.sanityHomePage;
    const { nodes: events } = data.allSanityEvent;
    const { nodes } = data.allSanitySeries;
    const currentSeries = nodes[0];

    return (
        <Layout>
            <SEO title="Home" />
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
                        {events.map(event => getEventItem(event))}
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
