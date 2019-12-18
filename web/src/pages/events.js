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

const removeOldEvents = ({ endAt, beginAt }) => {
    const currentDate = new Date();
    const beginDate = beginAt ? new Date(beginAt.split('--')[1]) : null;
    const endDate = endAt ? new Date(endAt.split('--')[1]) : null;
    if (endDate && endDate > currentDate) {
        return true;
    }

    if (beginDate && beginDate > currentDate) {
        return true;
    }

    return false;
};

const Events = props => {
    const data = useStaticQuery(graphql`
        query EventsQuery {
            allSanityEvent(
                filter: { published: { eq: true } }
                sort: { fields: beginAt, order: ASC }
            ) {
                nodes {
                    title
                    beginAt(formatString: "MMM D--YYYY-MM-DD")
                    endAt(formatString: "MMM D--YYYY-MM-DD")
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
                            {events.filter(removeOldEvents).map(event => {
                                if (event.beginAt) {
                                    event.beginAt = event.beginAt.split(
                                        '--'
                                    )[0];
                                }
                                if (event.endAt) {
                                    event.endAt = event.endAt.split('--')[0];
                                }
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
