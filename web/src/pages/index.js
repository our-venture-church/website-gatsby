import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import { getDefaultPadding } from '../utils/styles';
import colors from '../theme/tokens/colors';

const getEventItem = ({ title, date, link }) => (
    <li>
        <Link to={link}>
            {title}
            {date}
        </Link>
    </li>
);

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
        grid-gap: 2rem;
        grid-template-columns: 60% 1fr;
        grid-template-rows: repeat(3, 1fr);
        margin: 0 0 3rem;
    }

    @media (min-width: 900px) {
        grid-column: 2;
        grid-row: 2;
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
        grid-column: 2;
        padding: 0;
    }
`;

const StyledSeriesTitle = styled.p`
    display: none;

    @media (min-width: 650px) {
        display: block;
        grid-column: 2;
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
`;

const StyledEvents = styled.div`
    @media (min-width: 900px) {
        grid-column: 1 / 3;
        grid-row: 3;
    }
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
            allSanityEvent(
                limit: 5
                filter: { published: { eq: true } }
                sort: { fields: beginAt }
            ) {
                nodes {
                    title
                    link
                    beginAt
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
                    <StyledSeriesLabel>Current Sermon Series</StyledSeriesLabel>
                    <StyledSeriesTitle>{currentSeries.title}</StyledSeriesTitle>
                    <StyledSeriesImage
                        src={imageUrlFor(buildImageObj(currentSeries.artwork))
                            .width(1200)
                            .height(Math.floor((9 / 16) * 1200))
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
                    <ul>{events.map(getEventItem)}</ul>
                    <Link to="/events">See all events</Link>
                </StyledEvents>
            </StyledBelowFold>
        </Layout>
    );
};

export default IndexPage;
