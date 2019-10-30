import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';

const getEventItem = ({ title, date, link }) => (
    <li>
        <Link to={link}>
            {title}
            {date}
        </Link>
    </li>
);

const StyledWelcomeContainer = styled.div`
    margin-bottom: 4rem;
    padding: 0 1rem;

    @media (min-width: 500px) {
        padding: 0 2rem;
    }
`;

const StyledSubContentContainer = styled.div`
    margin-bottom: 4rem;
    padding: 0 1rem;

    @media (min-width: 500px) {
        padding: 0 2rem;
    }

    display: grid;
    grid-gap: 4rem;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

const StyledImage = styled.img`
    max-width: 100%;
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
            <StyledWelcomeContainer>
                <h1>{welcome.title}</h1>
                <p>{welcome.message}</p>
            </StyledWelcomeContainer>
            <StyledSubContentContainer>
                <div>
                    <h2>Current Sermon Series: {currentSeries.title}</h2>
                    <StyledImage
                        src={imageUrlFor(buildImageObj(currentSeries.artwork))
                            .width(1200)
                            .height(Math.floor((9 / 16) * 1200))
                            .fit('crop')
                            .auto('format')
                            .url()}
                        alt={currentSeries.artwork.alt}
                    />
                    <p>
                        <Link
                            to={`/sermon/series/${currentSeries.slug.current}`}
                        >
                            Get caught up on all the messages
                        </Link>
                    </p>
                </div>
                <div className="events">
                    <h2>Upcoming Events</h2>
                    <ul>{events.map(getEventItem)}</ul>
                    <Link to="/events">See all events</Link>
                </div>
            </StyledSubContentContainer>
        </Layout>
    );
};

export default IndexPage;
