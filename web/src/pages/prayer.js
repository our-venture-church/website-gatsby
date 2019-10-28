import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BasicPageIntro from '../components/BasicPageIntro';
import PrayerStation from '../components/PrayerStation';

const Prayer = props => {
    const data = useStaticQuery(graphql`
        query PrayerQuery {
            sanityPrayerVenture {
                _rawStations
                intro {
                    title
                    seoDescription
                }
            }
        }
    `);

    const { _rawStations, intro } = data.sanityPrayerVenture;

    return (
        <Layout>
            <SEO title="Prayer" description={intro.seoDescription} />
            <BasicPageIntro title={intro.title} />
            <p>{intro.seoDescription}</p>
            {_rawStations && (
                <div>
                    <h2>Checkout all the stations:</h2>
                    <ul>
                        {_rawStations.map(station => (
                            <li>
                                <Link
                                    to={`/prayer/station/${station.slug.current}`}
                                >
                                    {station.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {_rawStations && _rawStations[0] && (
                <PrayerStation {..._rawStations[0]} />
            )}
        </Layout>
    );
};

Prayer.propTypes = {};

export default Prayer;
