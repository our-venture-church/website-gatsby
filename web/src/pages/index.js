import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Button from '../components/button';
import Image from '../components/image';

const getAnnouncmentItem = ({ title, text, link }) => (
    <li>
        <Link to={link}>
            {title}
            {text}
        </Link>
    </li>
);

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
            site {
                siteMetadata {
                    homepage {
                        hero {
                            text
                            type
                            image
                        }
                        welcomeMessage {
                            title
                            text
                        }
                        announcements {
                            title
                            text
                            link
                        }
                        events {
                            title
                            date
                            link
                        }
                    }
                }
            }
        }
    `);

    const {
        hero,
        welcomeMessage,
        announcements,
        events,
    } = data.site.siteMetadata.homepage;

    return (
        <Layout>
            <SEO title="Home" />
            <div className="hero">
                <h2>
                    {hero.type} {hero.text}
                </h2>
                <Image src={hero.image} />
            </div>
            <div className="welcome">
                <h1>{welcomeMessage.title}</h1>
                <p>{welcomeMessage.text}</p>
            </div>
            <div className="announcements">
                <h2>Announcements</h2>
                <ul className="announcements">
                    {announcements.map(getAnnouncmentItem)}
                </ul>
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
