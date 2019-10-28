import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import PageIntro from '../components/PageIntro';
import SEO from '../components/seo';
import ImNewBlock from '../components/ImNewBlock';

const ImNewPage = props => {
    const data = useStaticQuery(graphql`
        query ImNewPageQuery {
            sanityImNewPage {
                pageIntro {
                    _key
                    _type
                    title
                    tag
                    seoDescription
                }
                _rawBlocks
            }
        }
    `);

    const { title, tag, seoDescription } = data.sanityImNewPage.pageIntro;
    const { _rawBlocks: blocks } = data.sanityImNewPage;

    return (
        <Layout>
            <SEO title={title} description={seoDescription} />
            <PageIntro title={title} tag={tag} noMargin={true} />
            {blocks && blocks.map(block => <ImNewBlock {...block} />)}
        </Layout>
    );
};

ImNewPage.propTypes = {};

export default ImNewPage;
