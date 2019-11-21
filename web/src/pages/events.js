import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BasicPageIntro from '../components/BasicPageIntro';
import { getDefaultPadding } from '../utils/styles';
import Grid from '../layouts/Grid';
import EventItem from '../components/EventItem';

const StyledContainer = styled.div`
    ${getDefaultPadding()}
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: 1rem;

    @media (min-width: 839px) {
        grid-gap: 4rem;
    }
`;

const Events = props => {
    const data = useStaticQuery(graphql`
        query EventsQuery {
            allSanityEvent(
                filter: { published: { eq: true } }
                sort: { fields: beginAt, order: DESC }
            ) {
                nodes {
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

    const { nodes: events } = data.allSanityEvent;

    return (
        <Layout>
            <SEO
                title="Events"
                description="Find a list of everything happening at Venture Church"
            />
            <BasicPageIntro title="Events" />
            <StyledContainer>
                {events && (
                    <div>
                        <Grid>
                            {events.map(event => {
                                return (
                                    <li key={event.id}>
                                        <EventItem {...event} />
                                    </li>
                                );
                            })}
                        </Grid>
                    </div>
                )}
            </StyledContainer>
        </Layout>
    );
};

Events.propTypes = {};

export default Events;
