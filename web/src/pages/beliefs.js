import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BlockContent from '../components/block-content';
import NarrowPageWrapper from '../layouts/NarrowPageWrapper';

const BeliefsPage = props => {
    const data = useStaticQuery(graphql`
        query BeliefsPageQuery {
            sanityBeliefsPage {
                title
                seoDescription
                _rawContent
            }
        }
    `);

    const { title, seoDescription, _rawContent } = data.sanityBeliefsPage;

    return (
        <Layout>
            <SEO title={title} description={seoDescription} />
            <NarrowPageWrapper includePadding={true}>
                <h1>{title}</h1>
                <BlockContent blocks={_rawContent} />
            </NarrowPageWrapper>
        </Layout>
    );
};

BeliefsPage.propTypes = {};

export default BeliefsPage;
