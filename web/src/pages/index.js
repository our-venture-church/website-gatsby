import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import { HERO_TYPES } from '../constants';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Button from '../components/button';
import Hero from '../components/hero';

const getEventItem = ({ title, date, link }) => (
    <li>
        <Link to={link}>
            {title}
            {date}
        </Link>
    </li>
);

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query HomepageQuery {
            sanitySeries {
                title
                slug {
                    current
                }
                artwork {
                    asset {
                        url
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
                heroType
                customHero {
                    text
                    image {
                        asset {
                            url
                        }
                    }
                    link
                }
            }
        }
    `);

    console.log(data);
    const { heroType, welcome, customHero } = data.sanityHomePage;
    const { nodes: events } = data.allSanityEvent;
    const { sanitySeries: currentSeries } = data;

    let heroProps;
    if (heroType === HERO_TYPES.CURRENT_SERIES) {
        heroProps = { ...currentSeries };
        console.log(heroProps);
        heroProps.image = heroProps.artwork.asset.url;
        heroProps.link = `/sermon/series/${heroProps.slug.current}`;
    } else if (heroType === HERO_TYPES.SERVICE_TIMES) {
        // TODO make a default ServiceTimes
        heroProps = {};
    } else if (heroType === HERO_TYPES.CUSTOMcustom) {
        heroProps = { ...customHero };
    }

    return (
        <Layout>
            <SEO title="Home" />
            <Hero type={heroType} {...heroProps} />
            <div className="welcome">
                <h1>{welcome.title}</h1>
                <p>{welcome.message}</p>
            </div>
            <div className="events">
                <h2>Upcoming Events</h2>
                <ul>{events.map(getEventItem)}</ul>
                <Link to="/events">See all events</Link>
            </div>
            <p>
                <Button>Learn more</Button>
            </p>
            <Link to="/page-2/">Go to page 2</Link>
        </Layout>
    );
};

export default IndexPage;
