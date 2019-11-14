import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const WhoWeArePage = props => {
    const data = useStaticQuery(graphql`
        query WhoWeArePageQuery {
            sanityWhoWeArePage {
                title
            }
        }
    `);

    const { title } = data.sanityWhoWeArePage;

    return (
        <Layout>
            <SEO title={title} description="" />
            <h1>{title}</h1>
        </Layout>
    );
};

WhoWeArePage.propTypes = {};

export default WhoWeArePage;
