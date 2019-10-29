import React from 'react';
import SEO from '../components/seo';
import BlockContent from '../components/block-content';
import Layout from '../components/layout';

const prayerStationTemplate = ({ title, year, scripture, content }) => {
    return (
        <Layout>
            <SEO
                title={`${title}`}
                description={`${title} station on the Venture prayer journey.`}
            />
            <h1>{title}</h1>
            {year && <h2>{year}</h2>}
            <div>
                {scripture && (
                    <React.Fragment>
                        <b>{scripture.reference}</b> {scripture.text}
                    </React.Fragment>
                )}

                <BlockContent blocks={content} />
            </div>
        </Layout>
    );
};

export default prayerStationTemplate;
