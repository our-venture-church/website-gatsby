import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import PageIntro from '../components/PageIntro';
import SEO from '../components/seo';

const ImNewPage = props => {
    const data = useStaticQuery(graphql`
        query ImNewPageQuery {
            sanityImNewPage {
                pageIntro {
                    title
                    tag
                    seoDescription
                }
            }
        }
    `);

    const { title, tag, seoDescription } = data.sanityImNewPage.pageIntro;

    return (
        <Layout>
            <SEO title={title} description={seoDescription} />
            <PageIntro title={title} tag={tag} />
        </Layout>
    );
};

ImNewPage.propTypes = {};

export default ImNewPage;
