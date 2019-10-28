import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BasicPageIntro from '../components/BasicPageIntro';

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

    console.log(data);
    const { _rawStations, intro } = data.sanityPrayerVenture;

    return (
        <Layout>
            <SEO title="Prayer" description={intro.seoDescription} />
            <BasicPageIntro title={intro.title} />
            {_rawStations}
        </Layout>
    );
};

Prayer.propTypes = {};

export default Prayer;
